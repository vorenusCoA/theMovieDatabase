const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors")

app.use(cors())
app.use("/api/peliculas", require("./routes/rutas"));
app.use(express.json());

app.use("/", express.static("../frontend/dist/frontend"));

app.listen(port, () => {
  console.log(`Example app listening at port:${port}`)
})


