
const btn = document.querySelector('.sorting-button')

btn.innerHTML = "Sort by Latest"


btn.addEventListener('click', function(){
    btn.classList.toggle('active')
    console.log(btn.classList);
    if(btn.classList.contains('active')){
        btn.innerHTML= 'Sort by Earliest'

    }else{
        btn.innerHTML= 'Sort By Latest'
    }
})

