let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let clearBtn = document.querySelector('.clear');
let saveBtn = document.querySelector('.save');
let slct = document.querySelector('.slct');
//window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.lineWidth = 5; 
let prevX = null;
let prevY = null;
let draw=false;
let clrs = document.querySelectorAll('.clr');
console.log(clrs);
let clrArr = Array.from(clrs);
// forEach -> massive forIn -> object 
clrArr.forEach(clr=>{
    clr.addEventListener("click",()=>{
        ctx.strokeStyle = clr.dataset.clr;
    });
});
window.addEventListener("mousedown",(e)=> draw=true);
window.addEventListener("mouseup",(e)=> draw=false);
window.addEventListener("mousemove", (e) => {  
    if(prevX==null || prevY==null || !draw){
        prevX=e.clientX;
        prevY=e.clientY;
    }
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    ctx.beginPath(); // zurgiin zamiig ehluuleh
    ctx.moveTo(prevX, prevY); // mousenii bairshil 
    ctx.lineTo(mouseX, mouseY); //tuhain bairshild zurah 
    ctx.stroke();  //cursan line-iig gargaj ireh
    prevX=e.clientX;
    prevY=e.clientY;
});
clearBtn.addEventListener("click",()=>{
    //alert("Cleared");
    ctx.clearRect(0,0,canvas.width,canvas.height);
});
saveBtn.addEventListener("click",()=>{
    //alert("Saved");
    let data = canvas.toDataURL('imag/png'); 
    let a = document.createElement('a'); 
    a.href=data;
    a.download="test.png";
    a.click();
});
let op= document.getElementsByTagName('.slct')[0];
slct.addEventListener('click',()=>{
    ctx.lineWidth=op.value
})