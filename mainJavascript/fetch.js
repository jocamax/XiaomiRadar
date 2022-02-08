// //  fetch("./news-articles.json")
// //  .then(response => {
// //     return response.json();
// //  })
// //  .then(articles => {
// //      console.log(articles)
// //     });

// import displayArticles from './displayArticles.js'

const fetchArticles = async(url)=>{
    try{
        const response = await fetch(url)
        const data = await response.json()
        return data;

        //destructure
        

    } catch(error){
        console.log(error);
    }
}

export default fetchArticles