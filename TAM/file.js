let go = document.getElementById("search")
let inputValue = document.querySelector('#place') 

go.addEventListener('click',function(e){
    location.href="main.html"
    let data = inputValue.value
    console.log(data);
    fetch('https://covid-api.mmediagroup.fr/v1')

})