function fibo(){
    let a=-1;
    let b= 1;
    for(let i=0;i<10;i++){
        let output = document.querySelector(".fibo");
        
        let c = a+b;
        console.log(c);
        output.innerHTML = ` ${output.innerHTML} <p>${c}</p> ` 
        a=b;
        b=c;
    }
}
