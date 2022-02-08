 import get from '../mainJavascript/getElement.js'

 const displayArticles = ({articles}) =>{
     const section = get('.news-section')
      const title = get('.news-title')
      const date = get('.news-date')
    const btn = document.querySelector('.sorting-button')

    if(btn.classList.contains('active')){
     const newArticles = articles
     .sort((a,b) => parseFloat(a.idArticle) - parseFloat(b.idArticle))
     .map((article)=>{
         
         const {idArticle:id,title:title,mainImg:img,date:date} = article
         return `<article class="news-post" data-id="${id}">
         <a href="article1.html"><img src="${img}" class="img-main" alt=""></a>
         <a href="article1.html"><h2 class="news-title">${title}</h2></a>
         <p class="news-date">${date}</p>
     </article>`
     }).join('')
 section.innerHTML = newArticles
 return section
 }else{
    const newArticles = articles
    .sort((a,b) => parseFloat(b.idArticle) - parseFloat(a.idArticle))
    .map((article)=>{
         
        const {idArticle:id,title:title,mainImg:img,date:date} = article
        return `<article class="news-post" data-id="${id}">
        <a href="article1.html"><img src="${img}" class="img-main" alt=""></a>
        <a href="article1.html"><h2 class="news-title">${title}</h2></a>
        <p class="news-date">${date}</p>
    </article>`
    }).join('')
section.innerHTML = newArticles
return section
 }
}


 export default displayArticles