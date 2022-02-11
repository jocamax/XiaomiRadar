
import showArticles from "../articles/showArticles.js"
import showSidebar from "../sidebar/sidebar.js"
import showMainArticles from "../articles/showMainArticles.js"

const URL = './news-articles.json'
const url = './news-articles.json'

window.addEventListener('DOMContentLoaded', ()=> {
    showArticles(URL)
    showSidebar(url)
    showMainArticles(url)
})