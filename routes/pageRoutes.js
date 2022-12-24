import express from "express";
import * as pageController from "../controllers/pageController.js";


const router = express.Router();

router.route("/").get(pageController.getIndexPage);

router.route("/categories").get(pageController.getCategoriesPage);

router.route("/blog-single").get(pageController.getBlogSinglePage);

router.route("/contact").get(pageController.getContactPage);


export default router;