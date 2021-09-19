var alokeve ="empty";
color="black";
width="2";
radius = "8";
canvas=document.getElementById("Canvasar");
ctx=canvas.getContext("2d");
canvas.addEventListener("mousedown", my_mick);

function my_mick(e){
alokeve = "mousedown";
}
canvas.addEventListener("mouseleave", my_mic);

function my_mic(e){
    alokeve="mouseleave";
}
canvas.addEventListener("mouseup", my_mica);

function my_mica(e){
    alokeve="mouseup";
}
canvas.addEventListener("mousemove", my_crood);

function my_crood(e){
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;

if (alokeve == "mousedown") {
    console.log("Current position of x and y coordinates =");
    console.log("x = " + current_x + "y =" + current_y);
    ctx.beginPath();
    ctx.strokeStyle - color;
    ctx.lineWidth = width;
    ctx.arc(current_x, current_y, radius, 0, 2 * Math.PI);
    ctx.stroke();
}


}
