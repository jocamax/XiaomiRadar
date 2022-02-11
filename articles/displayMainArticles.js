
const get = (selection) => {
    const element = document.querySelector(selection);
    if (element) return element;
    throw new Error("no element selected");
  };
  

const displayMainArticles = ({articles})=>{
    const section = get('.main-news')
    const title = get('.title')
    const img = get('.sidebar-picture')
    const date = get('.sidebar-date')

    const mainArticle = articles.map((article)=>{

        const {idArticle:id, title:title, mainImg:img, date:date, main:main} = article
        if(main === true){
        return `<div class=" main-post" data-id="${id}" >
        <div class="main-post main-img" style='background:url(${img}) no-repeat center' alt="">
            <a href="article1.html"><h2 class="news-title">${title}</h2></a>
           <p class="news-date main-date">${date}</p>
        </div>
    </div>`
        }
    }).join('')
    section.innerHTML = mainArticle
    return section
    
}

export default displayMainArticles

// div class=" main-post" >
//           <div class="main-post main-img" style='background:url(https://www.gizmochina.com/wp-content/uploads/2018/08/XIaomi-Poco-F1-Color-Variants.png) no-repeat center' alt="">
//              <a href="article1.html"><h2 class="news-title">XMIUI 13 global rollout to begin in Q1 2022;
//                here’s the list of devices getting the update
//              </h2></a>
//            <p class="news-date main-date">Jan 21, 2022</p>
//         </div>
//       </div>