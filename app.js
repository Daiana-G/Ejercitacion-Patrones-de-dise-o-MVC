const express = require('express');

const app = express();

const port=3000

app.use(express.static("public"));

let mainRouter = require('./routers/main')

app.use("/", mainRouter)
app.use("/about", mainRouter)

app.listen(port, () => console.log(`servidor levantado en el puerto ${port}\n http://localhost:${port}`
))