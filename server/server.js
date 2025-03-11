import express from "express";
import passport from "passport";
import session from "express-session";
import cors from "cors";
import dotenv from "dotenv";
import crypto from "crypto";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import pkg from "pg";
const { Pool } = pkg;

// Load environment variables
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const app = express();
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Middleware
app.use(
  cors({ origin: process.env.CLIENT_URL, credentials: true })
);
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { httpOnly: true, secure: process.env.NODE_ENV === "production" },
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Secure API Key Generation
const generateApiKey = () => crypto.randomBytes(16).toString("hex");

// Passport Google OAuth Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const { id, displayName, emails, photos } = profile;
        const email = emails[0].value;
        const photo = photos[0]?.value || null;

        const userQuery = await pool.query("SELECT * FROM userss WHERE google_id = $1", [id]);

        let user;
        if (userQuery.rows.length === 0) {
          const apiKey = generateApiKey();
          const insertQuery = `
            INSERT INTO userss (google_id, name, email, photo, api_key)
            VALUES ($1, $2, $3, $4, $5) RETURNING *`;
          const newUser = await pool.query(insertQuery, [id, displayName, email, photo, apiKey]);
          user = newUser.rows[0];
        } else {
          user = userQuery.rows[0];
        }

        return done(null, user);
      } catch (error) {
        console.error("Database error:", error);
        return done(error, null);
      }
    }
  )
);

// Serialize & Deserialize User
passport.serializeUser((user, done) => done(null, user.google_id));
passport.deserializeUser(async (id, done) => {
  try {
    const userQuery = await pool.query("SELECT * FROM userss WHERE google_id = $1", [id]);
    done(null, userQuery.rows[0]);
  } catch (error) {
    done(error, null);
  }
});

// Routes
app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect(`${process.env.CLIENT_URL}/dashboard`);
  }
);

app.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    req.session.destroy(() => {
      res.redirect(process.env.CLIENT_URL);
    });
  });
});

app.get("/user", (req, res) => {
  res.json(req.user || null);
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
