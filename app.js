import express from 'express';
import dotenv from 'dotenv';
import conn from "./db.js";
import pageRoute from "./routes/pageRoutes.js";
import photoRoute from "./routes/photoRoute.js";
import newsRouter from "./routes/news.js";
import sportsRouter from "./routes/sports.js";
import searchRouter from "./routes/searchRoute.js";
import healthRouter from "./routes/health.js";


dotenv.config();

//connection to the db
//conn();

const app = express();
const port = process.env.PORT;

//ejs template engine
app.set('view engine', 'ejs');


//static files middleware
app.use(express.static('public'));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/", pageRoute);

app.use("/photos", photoRoute);

app.use('/news', newsRouter);

app.use('/sports', sportsRouter);
app.use('/search', searchRouter)

app.use('/health', healthRouter);


app.listen(port, () => {
    console.log(`Sistem Çalışıyor, Server Port = ${port}`);
});