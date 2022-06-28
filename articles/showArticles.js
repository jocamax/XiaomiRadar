import fetchArticles from "../mainJavascript/fetch.js";
import displayArticles from "./displayArticles.js"
import setArticle from "../singleArticle/setArticle.js";
import paginate from "../articles/pagination.js"
import displayButtons from "./displayButtons.js";
const buttonContainer = document.querySelector('.btn-container')




let index = 0
let pages = []


const showArticles = async (url) =>{


const setupUI = ()=>{
    displayArticles(paginate(data)[index])
    displayButtons(buttonContainer, pages, index)
}


    // fetch articles
    const data = await fetchArticles(url)

     //display articles
     const section = await displayArticles(paginate(data)[index])
     pages = paginate(data)

     setArticle(section)
     setupUI()
    
    buttonContainer.addEventListener('click', function(e){
        if(e.target.classList.contains('page-btn')){
            index = parseInt(e.target.dataset.index);
             window.scrollTo({
                 top: 0,
                 left: 0,
                 behavior: 'smooth'
               });
    
        }
        setupUI()
        setArticle(section)
    })
    

}





export default showArticles
