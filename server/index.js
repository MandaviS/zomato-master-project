//importing env variables
require("dotenv").config();
//libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

//configs
import googleAuthConfig from "./config/google.config";

//microservices routes
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";
import Menu from "./API/Menu";
import Image from "./API/Image";
import Order from "./API/Orders";
import Reviews from "./API/Reviews";

//database connection
import ConnectDB from "./database/connection";

const zomato = express();

//midddleware applications
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false}));
zomato.use(helmet());
zomato.use(cors());
zomato.use(passport.initialize());
zomato.use(passport.session());

//passport configuration
googleAuthConfig(passport);

//application routes
zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);
zomato.use("/menu", Menu);
zomato.use("/image", Image);
zomato.use("/order", Order);
zomato.use("/reviews", Reviews);

zomato.get("/",(req,res) => res.json({ message: "Setup success"}));

zomato.listen(4000 , () => 
ConnectDB()
.then(() => console.log("Server is running 🚀"))
.catch(() =>
  console.log("Server is running, but database connection failed... ")
)
);