	import express from 'express';
	import axios from 'axios';
	const getIndexPage = async(req, res) => {
	    const pageSize = 3
	    var baseUrl = "http://newsapi.org/v2/top-headlines?country=tr&pageSize=" + pageSize;
	    const apiKey = "676f017549224f488970f1835f9db971";

	    const q = req.query.q ?? ""
	    const page = parseInt(req.query.page ?? "1")
	    var apiUrl = baseUrl + "&page=" + page

	    const newsAPI = await axios.get(`${apiUrl}&apiKey=${apiKey}`)

	    let pages = 0
	    if (newsAPI.data.status == "ok") {
	        pages = Math.ceil(newsAPI.data.totalResults / pageSize)
	    }

	    baseUrl = "http://newsapi.org/v2/top-headlines?country=tr&category=sports&pageSize=3"
	    const sportsAPI = await axios.get(`${baseUrl}&apiKey=${apiKey}`)

	    let sportsTotal = 0
	    if (sportsAPI.data.status == "ok") {
	        sportsTotal = sportsAPI.data.totalResults
	    }

	    baseUrl = "http://newsapi.org/v2/top-headlines?country=tr&category=health&pageSize=3"
	    const healthAPI = await axios.get(`${baseUrl}&apiKey=${apiKey}`)

	    let healthsTotal = 0
	    if (healthAPI.data.status == "ok") {
	        healthsTotal = healthAPI.data.totalResults
	    }

	    res.render("index", {
	        q: q,
	        pages: pages,
	        articles: newsAPI.data,
	        page: page,
	        sports: sportsAPI.data,
	        sportsTotal: sportsTotal,
	        healths: healthAPI.data,
	        healthsTotal: healthsTotal
	    })

	}

	const getCategoriesPage = (req, res) => {
	    res.render("categories");
	}

	const getBlogSinglePage = (req, res) => {
	    res.render("blog-single");
	}

	const getContactPage = (req, res) => {
	    res.render("Contact");
	}

	const getAbouttPage = (req, res) => {
	    res.render("about");
	}
	




	export { getIndexPage, getCategoriesPage, getBlogSinglePage, getContactPage, getAbouttPage }