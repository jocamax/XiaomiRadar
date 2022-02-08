const get = (selection) => {
    const element = document.querySelector(selection);
    if (element) return element;
    throw new Error("no element selected");
  };
  

const displaySidebar = ({articles})=>{
    const section = get('.sidebar')
    const title = get('.title')
    const img = get('.sidebar-picture')
    const date = get('.sidebar-date')

    const sidebarArticle = articles.map((sidebar)=>{

        const {idArticle:id, title:title, mainImg:img, date:date, displaySidebar:displaySidebar} = sidebar
        if(displaySidebar === true){
        return `<article class="sidebar-element" data-id="${id}">
        <img src="${img}" alt="" class="sidebar-picture">
        <div class="sidebar-text">
            <a href="article1.html" class="sidebar-a"><h3 class="sidebar title">${title}</h3></a>
            <p class="sidebar-date">${date}</p>
        </div>
    </article>`
        }

    }).join('')
    section.innerHTML = sidebarArticle
    return section
    
}

export default displaySidebar