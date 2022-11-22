window.onload = function(){
    getData();
}
async function getData(){
    const url = "https://jsonplaceholder.typicode.com/posts";

    let res= await fetch(url);
    let list = await res.json();
    console.log(list);
    console.log(res);
    
    // iterating the data/list :: dom operation
    for(let item of list){
        let refout = document.querySelector("#output");
        let newvalue = `<p class="post">${item.title}</p>`;

        refout.innerHTML=`${newvalue} ${refout.innerHTML}`
    }
}