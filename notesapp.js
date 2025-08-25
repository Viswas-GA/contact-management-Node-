const express = require("express");
const { trusted } = require("mongoose");
const app = express();
const PORT = 3000;

// 🧩 1. Logger middleware (logs every request)
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // Move to next middleware or route
});

// 🧩 2. Fake Authentication Middleware (only for private routes)
function fakeAuth(req, res, next) {
  const isLoggedIn = true; // change this to true to simulate a logged-in user
  if (!isLoggedIn) {
    return res.status(401).json({ message: "Unauthorized. Please log in." });
  }
  next(); // Continue to the private route
}

// 🧩 Apply fakeAuth only to /notes/private
app.use("/notes/private", fakeAuth);

// 🧾 Public notes route
app.get("/notes/public", (req, res) => {
  res.json([
    { id: 1, text: "This is a public note." },
    { id: 2, text: "Anyone can see this note." },
  ]);
});

// 🔒 Private notes route (protected)
app.get("/notes/private", (req, res) => {
  res.json([
    { id: 101, text: "This is a private note." },
    { id: 102, text: "Only logged-in users should see this." },
  ]);
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
