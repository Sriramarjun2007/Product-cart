let count=1;
let price= 279;
function increase(){
    count++;
    totalprice=count*price;
    document.getElementById("count").innerText=count;
    document.getElementById("subprice").innerText=totalprice;
}
function decrease(){
    if(count>1)
     {
        count--;
        totalpriced=price*count;
        document.getElementById("count").innerText=count;
        document.getElementById("subprice").innerText=totalpriced;
     }
}
function color1(){
    document.getElementById("colorordered").innerText=" Midnight Black";
}
function color2(){
    document.getElementById("colorordered").innerText=" Pearl White";
}
function color3(){
    document.getElementById("colorordered").innerText=" Indigo Blue";
}