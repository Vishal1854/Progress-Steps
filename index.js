let circles=document.querySelectorAll('.circle')
let prev=document.getElementById('prev')
let next=document.getElementById('next')
let counter=1;

prev.addEventListener('click',()=>{
    counter--;
    if(counter<1){
        counter=1
    }
    update()
})

next.addEventListener('click',()=>{
   counter++;
   if(counter>circles.length){
    counter=circles.length
   }
   update()
})

function update(){
    circles.forEach((circle,idx)=>{
        if(idx<counter){
            circle.classList.add('active')
        }
        else{
            circle.classList.remove('active')
        }
    })
    const actives=document.querySelectorAll('.active')
    progress.style.width=(actives.length-1)/(circles.length-1)*100+'%'


if(counter==1){
    prev.disabled=true
}
else if(counter===circles.length){
    next.disabled=true
}
else{
    prev.disabled=false;
    next.disabled=false;
}
}