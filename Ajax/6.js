async function getData(){
    const url = "https://jsonplaceholder.typicode.com/posts";

    let res = await fetch(url);
    let list = await res.json();

    //DOM opretion
    for(let item of list ){
        let ref = document.querySelector("#output");
        let newvalue = `<p class="post">${item.body}</p>`;

        ref.innerHTML=newvalue+ref.innerHTML;

    }
}