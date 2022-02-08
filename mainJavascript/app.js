import showArticles from "../articles/showArticles.js"
import showSidebar from "../sidebar/sidebar.js"

const URL = './news-articles.json'
const url = './news-articles.json'

window.addEventListener('DOMContentLoaded', ()=> {
    showArticles(URL)
    showSidebar(url)
})