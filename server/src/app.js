import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

//middlewares
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//import routes
import generalRouter from "./routes/general.router.js";
import filterRouter from "./routes/fliter.router.js";

//routes
app.use("/general", generalRouter);
app.use("/filter", filterRouter);

export { app };
