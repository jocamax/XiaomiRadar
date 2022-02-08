
import displaySidebar from "./displaySidebar.js";
import fetchArticles from "../mainJavascript/fetch.js";

const showSidebar = async (url)=>{
    // fetch
    const data = await fetchArticles(url)
    // destructure
    const section = await displaySidebar(data)

}

export default showSidebar