const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

const { connectDb } = require("./configs/connection");
const { notFound, errorHandler } = require("./middlewares/errorMiddlewares");

dotenv.config();
connectDb();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(morgan("dev"));

app.use("/file", require("./routes/file"));
app.use("/api/personal_details", require("./routes/personal_details"));

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Running on: http://localhost:${PORT}`);
});