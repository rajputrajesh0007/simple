console.log("1");

let handler = function (){
    console.log("I am handler");
}
setTimeout(handler, 2000);

console.log("2");