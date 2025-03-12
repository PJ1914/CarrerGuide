import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report
app = Flask(__name__)
run_with_ngrok(app)  # Start ngrok when app runs

variable = "Default Value"

# Load dataset
df = pd.read_csv("/content/Student Attitude and Behavior (1).csv")

# Select target variable
target_column = "Stress Level "
X = df.drop(columns=[target_column])
y = df[target_column]
original_columns = X.columns

# Convert categorical variables to numerical
label_encoders = {}
# Include the target column in the columns to be encoded
for col in X.select_dtypes(include=['object']).columns.union([target_column]):
    le = LabelEncoder()
    # Use df[col] for fitting to ensure target column is encoded
    le.fit(df[col].astype(str))
    # Use X[col] if col is in X else use y to transform and store in label_encoders
    if col in X.columns:
        X[col] = le.transform(X[col].astype(str))
    else:
        y = le.transform(y.astype(str))
    label_encoders[col] = le


# Normalize numerical features
scaler = StandardScaler()
X = scaler.fit_transform(X)

# Split dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train Random Forest classifier
rf = RandomForestClassifier(n_estimators=100, random_state=42)
rf.fit(X_train, y_train)

new_test_data = pd.DataFrame([{
  "Certification Course": "Yes",
  "Gender": "Male",
  "Department": "BCA",
  "Height(CM)": 147,
  "Weight(KG)": 20,
  "10th Mark": 70,
  "12th Mark": 59,
  "college mark": 58,
  "hobbies": "Reading books",
  "daily studing time": "30 - 60 minute",
  "prefer to study in": "Morning",
  "salary expectation": 1500000,
  "Do you like your degree?": "No",
  "willingness to pursue a career based on their degree  " : 50,
  "social medai & video": "1 - 1.30 hour",
  "Travelling Time": "0 - 30 minutes",
  "Stress Level": "Bad",
   "part-time job": "No"
}])
# new_test_data = pd.DataFrame([{
#   "Certification Course": "Yes",
#   "Gender": "Male",
#   "Department": "BCA",
#   "Height(CM)": 160,
#   "Weight(KG)": 65,
#   "10th Mark": 80,
#   "12th Mark": 75,
#   "college mark": 70,
#   "hobbies": "Cinema",
#   "daily studing time": "30 - 60 minute",
#   "prefer to study in": "Morning",
#   "salary expectation": 30000,
#   "Do you like your degree?": "No",
#   "willingness to pursue a career based on their degree  " : 40,
#   "social medai & video": "1 - 1.30 hour",
#   "Travelling Time": "30 - 60 minutes",
#   "Stress Level": "Good",
#   "part-time job": "No"
# }])
for col in new_test_data.select_dtypes(include=['object']).columns:
  if col in label_encoders:  # Check if the column was encoded in training
    new_test_data[col] = label_encoders[col].transform(new_test_data[col])

new_test_data = new_test_data.reindex(columns=original_columns, fill_value=0)

new_test_data = scaler.transform(new_test_data)


predicted_class = rf.predict(new_test_data)

# Decode the prediction
predicted_label = label_encoders[target_column].inverse_transform(predicted_class)
print("Predicted Financial Status:", predicted_label[0])