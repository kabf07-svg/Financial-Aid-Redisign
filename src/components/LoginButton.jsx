const handleLogin = async (id) => {
  try {
    const response = await fetch('http://localhost:5000/api/student-login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ bannerId: id })
    });
    const result = await response.json();
    
    if (result.success) {
      // Use this data to auto-fill your SMART AID ESTIMATOR
      console.log("Welcome,", result.data.name);
    }
  } catch (error) {
    console.error("Login failed:", error);
  }
};