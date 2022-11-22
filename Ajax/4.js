window.onload = function(){
    getData();
}
function getData(){
    const url = "https://jsonplaceholder.typicode.com/posts";

    //request call
    let webRequest = new XMLHttpRequest;

    // response handler
    webRequest.onload = function(){
        const list = JSON.parse(webRequest.responseText);

        let ref = document.querySelector("#container");
        for(let item of list){

            let newvalue = `<p class="postonload">${item.body}</p>`;
            //display on browser window
            ref.innerHTML = newvalue+ref.innerHTML;
        }
    }

    //sending the request
    webRequest.open("Get",url,true);
    webRequest.send();
}