
function getData(){
    const url = "https://jsonplaceholder.typicode.com/posts";
    let http = new XMLHttpRequest();

    console.log(http);      //optional
    http.onload = function(){
        if (http.responseText) {
            console.log(http.responseText);
            const list = JSON.parse(http.responseText);
            for(let item of list){
                console.log(item);
            }
        }
    };

    http.open("GET",url,true);
    http.send();
}