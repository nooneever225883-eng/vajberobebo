const express = require("express");
const app = express();
app.use(express.json());

// Funkcije
const schedule = require("./functions/schedule");
const send = require("./functions/send");

// Rute
app.post("/schedule", schedule.handler);
app.get("/send", send.handler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
