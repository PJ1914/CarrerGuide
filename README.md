# Career Compass

Career Compass is a career guidance platform designed to help users track their learning progress, receive personalized career recommendations, and visualize their career path.

## 📌 Features
- **User Authentication**: Secure OAuth-based authentication
- **Dashboard**: Displays user progress, career insights, and suggestions
- **Career Path Visualization**: Dynamic career roadmap (coming soon)
- **Student Stats**: Tracks courses, certifications, and completed projects
- **Personalized Recommendations**: AI-driven suggestions for career growth

## 🏗 Tech Stack
### Frontend:
- **React.js** (Vite for fast development)
- **CSS (Vanilla CSS)**

### Backend:
- **Node.js** (Primary backend for API handling)
- **Flask** (For AI-driven career recommendations and analytics)

### Database:
- **PostgreSQL** (For storing user data, progress, and recommendations)

### Authentication:
- **OAuth** (Secure login system)

## 🚀 Getting Started
### Prerequisites
Make sure you have the following installed:
- Node.js & npm
- Python & pip
- PostgreSQL

### Setup Instructions
#### 1️⃣ Clone the repository:
```bash
 git clone https://github.com/yourusername/career-compass.git
 cd career-compass
```
#### 2️⃣ Install dependencies
##### Frontend:
```bash
 cd frontend
 npm install
 npm run dev
```
##### Backend (Node.js):
```bash
 cd backend
 npm install
 npm server.js
```
##### Backend (Flask - AI Module):
```bash
to be run in IDE
```

#### 3️⃣ Database Setup
1. Start PostgreSQL
2. Create a database:
```sql
 CREATE DATABASE career_compass;
```
3. Run migrations (if applicable)

#### 4️⃣ Environment Variables
Create a `.env` file in `backend/` and add:
```env
 DATABASE_URL=postgresql://username:password@localhost:5432/career_compass
 OAUTH_CLIENT_ID=your_client_id
 OAUTH_CLIENT_SECRET=your_client_secret
```

## 🔐 Security Measures
- **OAuth Authentication**: Ensures secure access with token-based authentication
- **Data Encryption**: User credentials and sensitive data are encrypted
- **API Rate Limiting**: Prevents abuse of endpoints
- **CORS Policy**: Restricted access to prevent unauthorized API calls
- **Sanitized Inputs**: Prevents SQL injections and XSS attacks

## 🤝 Contribution Guidelines
1. Fork the repository
2. Create a new branch (`feature-branch`)
3. Commit your changes
4. Push to your fork and create a pull request

## 📞 Contact
For any queries, reach out to [pranay.jumbarthi1905@gmail.com].
