
const paginate = (data)=>{


const articlesPerPage = 8
const pages = Math.ceil(data.articles.length / articlesPerPage)
const newArticles = Array.from({length:pages},(_,index)=>{
    const start = index * articlesPerPage
    return data.articles.slice(start,start+articlesPerPage)

})
console.log(newArticles);
return newArticles
}

export default paginate