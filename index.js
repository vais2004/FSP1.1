const express = require("express");

const app = express();

const SECRET_KEY = "supersecretadmin";
app.use(express.json());

app.post("/admin/login", (req, res) => {
  const { secret } = req.body;

  if (secret === SECRET_KEY) {
    res.json({ message: "Access Granted" });
  } else {
    res.json({ message: "Invalid Secret" });
  }
});

app.listen(3000, () => console.log("Server is running on PORT 3000"));
