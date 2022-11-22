async function getWeather(ref){
    let current = ref.previousElementSibling.value;
    //let inref = document.querySelector(".city");
    const City = current;
    const Appid = `8e29d81d22077c201326555769878b8b`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${Appid}&units=metric`;
    let res = await fetch(url);     //return promise
    let list = await res.json();    //return promise
    console.log((list)) ;           
    console.log((res));
    document.querySelector(".weatherCheck").innerHTML = list.main.temp;
}

function keyboardKey(e,ref){
    if(e.keyCode == 13){
        getWeather(ref.nextElementSibling);
    }
}