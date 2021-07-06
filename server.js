const express = require("express");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: "http://127.0.0.1:8080",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.cookie("authToken", "42", {
    httpOnly: false,
    secure: false,
    sameSite: "lax",
    domain: "127.0.0.1",
  });
  console.log(req.headers.cookie);
  // res.send("test");
  res.json({
    status: 200,
    cookies: req.headers.cookie,
  });
});

app.listen(8000, () => {
  console.log("listening");
});
