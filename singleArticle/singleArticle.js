import fetchArticles from "../mainJavascript/fetch.js";
import displayArticle from "./displaySingleArticle.js";
import setArticle from "./setArticle.js";

const presentArticle = async() => {
    
    const id = localStorage.getItem('article')
    const {articles} = await fetchArticles('./news-articles.json')
    const article = articles.filter(article => article.idArticle == id)

    displayArticle(article)

    
}

window.addEventListener('DOMContentLoaded', presentArticle)