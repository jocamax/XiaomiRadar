const setArticle = (section)=>{
    section.addEventListener('click', function(e){
        //e.preventDefault()
        const id = e.target.parentElement.parentElement.dataset.id;
        console.log(id);
        localStorage.setItem('article',id)
    } )

}



export default setArticle