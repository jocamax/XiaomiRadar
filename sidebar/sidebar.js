
import displaySidebar from "./displaySidebar.js";
import fetchArticles from "../mainJavascript/fetch.js";
import setArticle from "../singleArticle/setArticle.js";

const showSidebar = async (url)=>{
    // fetch
    const data = await fetchArticles(url)
    // destructure
    const section = await displaySidebar(data)
    setArticle(section)
}

export default showSidebar