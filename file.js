let go = document.getElementById("search")
let inputValue = document.querySelector('#place') 

go.addEventListener('click',function(e){
    let data = inputValue.value
    console.log(data);
    fetch('https://covid-api.mmediagroup.fr/v1')
    GET /cases?country=India;

})