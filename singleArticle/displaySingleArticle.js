import get from '../mainJavascript/getElement.js'

const displayArticle = (data)=>{

    const article = data[0]

    console.log(article);
    const section = get('.news')
    
// .    
    function articleTemplate(article){
        const {title:title, text1:text1, text2:text2, text3:text3, text4:text4,text5:text5, mainImg:mainImg} = article
        return `<h1 class="article-title">Xiaomi U Disk Flash Drive launched in China, offers 150MB/s read speeds</h1>
        <div class="share-btns">
        <button class="fb share-btn">Facebook</button>
        <button class="twitter share-btn">Twitter</button>
        <button class="reddit share-btn">Reddit</button>
        <button class="instagram share-btn">Instagram</button>
            </div>
            
        <p class="text1 article-text">${text1}</p>
        <p class="text2 article-text">${text2}</p>
        <img src="${mainImg}" class="article-img">
        <p class="text3 article-text">${text3}</p>
        <p class="text4 article-text">${text4}</p>
        <p class=" text5 article-text">${text5}</p>
        <h2>Comment Section</h2>
        <input type="text" class="comment-input">`
    }
    section.innerHTML = articleTemplate(article)
    return section

}

export default displayArticle