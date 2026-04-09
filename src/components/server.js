const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Mock Database - In a real app, this would be your connection to NC A&T's Banner System
const mockStudentData = {
  "12345678": {
    name: "Aggie Student",
    major: "Computer Science",
    classification: "Junior",
    gpa: 3.4,
    sapStatus: "Meeting Standards",
    financialAid: {
      pellGrant: 5000,
      subsidizedLoan: 3500,
      unmetNeed: 1200
    }
  }
};

// Route to handle "Login" and fetch student-specific data
app.post('/api/student-login', (req, res) => {
  const { bannerId } = req.body;

  if (mockStudentData[bannerId]) {
    // In a real scenario, you'd verify their password via NC A&T SSO here
    res.json({ 
      success: true, 
      data: mockStudentData[bannerId] 
    });
  } else {
    res.status(404).json({ success: false, message: "Student record not found." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));