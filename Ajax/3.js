function getData(){
    const url = "https://jsonplaceholder.typicode.com/posts";

    //it helps to http call,programmitically via JS
    let webRequest = new XMLHttpRequest();

    // Registering/binding the handler
    // will be handle the response here
    webRequest.onload = function (){
        const list = JSON.parse(webRequest.responseText);

        let ref = document.querySelector("#output");
            for(let item of list){
                let newvalue = `<p class="post">${item.body}</p>`;
                ref.innerHTML = newvalue+ref.innerHTML
            }
    };
 // Sending the request
    webRequest.open("Get",url,true);
    webRequest.send();
}