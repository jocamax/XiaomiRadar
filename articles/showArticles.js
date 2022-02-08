import fetchArticles from "../mainJavascript/fetch.js";
import displayArticles from "./displayArticles.js"
import setArticle from "../singleArticle/setArticle.js";

const showArticles = async (url) =>{
    // fetch articles
    const data = await fetchArticles(url)

     //display articles
     const section = await displayArticles(data)
     setArticle(section)

}

export default showArticles