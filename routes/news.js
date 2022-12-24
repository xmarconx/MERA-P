import express from 'express';
import axios from 'axios';
const newsRouter = express.Router()

const pageSize = 3
const baseUrl = "http://newsapi.org/v2/top-headlines?country=tr&pageSize=" + pageSize;
const apiKey = "676f017549224f488970f1835f9db971";

newsRouter.get('', async(req, res) => {
    try {
        const q = req.query.q ?? ""
        const page = parseInt(req.query.page ?? "1")
        let apiUrl = baseUrl + "&page=" + page + "&q=" + q
        const newsAPI = await axios.get(`${apiUrl}&apiKey=${apiKey}`)

        let pages = 0
        if (newsAPI.data.status == "ok") {
            pages = Math.ceil(newsAPI.data.totalResults / pageSize)
        }

        res.render('news', {
            articles: newsAPI.data,
            pages: pages,
            page: page,
            q: q
        })
    } catch (err) {
        if (err.response) {
            res.render('news', { articles: null })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if (err.request) {
            res.render('news', { articles: null })
            console.log(err.requiest)
        } else {
            res.render('news', { articles: null })
            console.error('Error', err.message)
        }
    }
})


export default newsRouter;