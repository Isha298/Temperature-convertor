
function ctof(c){
let tempinc=document.getElementById("tempc");
let v=tempinc.value;
let f=Math.round((9*v)/5+32);
document.getElementById("tempf").value=f;
if(v<=20){      //getid value will be used everywhere
    var url = "https://images.unsplash.com/photo-1604537372136-89b3dae196e3?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80"
    var element = document.getElementById("conduct")
    element.style.backgroundImage = `url(${url})`;

    var gt = document.getElementById("greet")
    gt.style.color="black";
}

else{
    var ment = "https://images.unsplash.com/photo-1504386106331-3e4e71712b38?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1789&q=80"
    var element1 = document.getElementById("conduct")
    element1.style.backgroundImage = `url(${ment})`;

    document.getElementById("greet").style.color = "#FF4500";
}
}

function ftoc(f){
    let tempinf=document.getElementById("tempf");
    let b=tempinf.value;
    let c=Math.round(((b-32)*5)/9);
    document.getElementById("tempc").value=c;
}
