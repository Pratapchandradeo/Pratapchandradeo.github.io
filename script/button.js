const prim_nav=document.querySelector("#navi");
const butt=document.querySelector(".open_close");

butt.addEventListener("click",() =>{
    const visi=prim_nav.getAttribute("data-visible");
    if(visi=="false")
    {
        prim_nav.setAttribute('data-visible',true);
        butt.innerText="Menu";
    }
    else if(visi=="true"){
        prim_nav.setAttribute('data-visible',false);
        butt.innerText="X";
    }
})
