const logo =document.querySelector("img");
const onClick =() => console.log ("click event");
const onDoubleClick = ()=> {
    if (document.body.style.backgroundColor!= "purple")
    {
        document.body.style.backgroundColor ="purple";
        document.body.style.color ="white";
    }else{
        document.body.style.backgroundColor ="white"
        document.body.style.color ="black";
    };
    const onRightClick =()=> console.log("right click event");
    const onMouseDown =() => console.log("mouse down event");
    const onMouseUp =() => console.log("mouse up event");
const onMouse
    logo.addEventListener("click", onClick);
    logo.addEventListener("dblclick" onDoubleClick);
    logo.addEventListener("contextmenu", onRightClick);

const onMousewheel =() =>console.log("mouse wheel event")

const onMouseOver =() =>console.log ("mouse over event")
logo.addEventListener("mouseover", onMouseOver);