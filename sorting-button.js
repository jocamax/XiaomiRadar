
const btn = document.querySelector('.sorting-button')

btn.innerHTML = "Sort by Latest"


btn.addEventListener('click', function(){

    let sort;
    console.log(btn.classList);
    if(btn.classList.contains('active')){
        btn.innerHTML= 'Sort by Earliest'

    }else{
        btn.innerHTML= 'Sort By Latest'
    }
})

