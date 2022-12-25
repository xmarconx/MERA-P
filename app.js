import express from 'express';
import dotenv from 'dotenv';
import conn from "./db.js";
import pageRoute from "./routes/pageRoutes.js";
import newsRouter from "./routes/news.js";
import sportsRouter from "./routes/sports.js";
import searchRouter from "./routes/searchRoute.js";
import healthRouter from "./routes/health.js";
import businessRouter from "./routes/business.js";
import scienceRouter from "./routes/science.js";
import technologyRouter from "./routes/technology.js";
import generalRouter from "./routes/general.js";
import entertainmentRouter from "./routes/entertainment.js";
//import categoriesRouter from "./routes/categories.js";

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

app.use('/news', newsRouter);

app.use('/sports', sportsRouter);

app.use('/search', searchRouter);

app.use('/business', businessRouter);

app.use('/health', healthRouter);

app.use('/science', scienceRouter);

app.use('/sports', sportsRouter);

app.use('/technology', technologyRouter);

app.use('/general', generalRouter);

app.use('/entertainment', entertainmentRouter);

//app.use('/categories', categoriesRouter);


app.listen(port, () => {
    console.log(`Sistem Çalışıyor, Server Port = ${port}`);
});