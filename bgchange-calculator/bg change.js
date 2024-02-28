const box=document.querySelectorAll('.box');
const body=document.querySelector(".calculater");

box.forEach(function(box){
    box.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id==='red'){
            alert("WElCOME USER COLOR IS RED")
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id==='yellow'){
            alert("WElCOME USER COLOR IS YELLOW")
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id==='orange'){
            alert("WElCOME USER COLOR IS ORANGE")
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id==='green'){
            alert("WElCOME USER COLOR IS GREEN")
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id==='purple'){
           alert("WElCOME USER COLOR IS PURPLE"); body.style.backgroundColor=e.target.id
        }
    })
})

