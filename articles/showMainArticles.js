import fetchArticles from "../mainJavascript/fetch.js";
import displayMainArticles from "./displayMainArticles.js";

const showMainArticles = async (url)=>{
    // fetch
    const data = await fetchArticles(url)
    // destructure
    const section = await displayMainArticles(data)

}

export default showMainArticles