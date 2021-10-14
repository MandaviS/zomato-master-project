import express from "express";
import cors from "cors";
import helmet from "helmet";

const zomato = express();

//midddleware applications
zomato.use(express.jspn());
zomato.use(express.urlencoded({ extended: false}));
zomato.use(helmet());
zomato.use(cors());

zomato.get("/",(req,res) => res.json({ message: "Setup success"}));

zomato.listen(4000, () => console.log("Server is running"));