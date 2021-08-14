const toggle = document.querySelector('.tog');
const body = document.querySelector('.body')
const nav = document.querySelector('.nav-links')
toggle.addEventListener('click', ()=>{
  nav.classList.toggle('active');
  body.classList.toggle('active');
    
})

const links = document.querySelectorAll('.navlinks');
for(let i = 0; i<links.length; i++){

}


if(screen.width < 600){
      links.forEach(link => {
        link.addEventListener('click',()=>{
                nav.classList.remove('active');
                body.classList.remove('active');
    })})
};  



const sections = document.querySelectorAll('.sect')
sections.forEach(sect => {
    console.log(sect.offsetTop)
    console.log(sect.offsetHeight)
    window.pageXOffset=1000;
});
 function scrollActive(){
     const scrollY = window.pageYOffset
  
     sections.forEach(current =>{
         const sectionHeight = current.offsetHeight
         const sectionTop = current.offsetTop - 150;
         sectionId = current.getAttribute('id')
         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-links a[href*=' + sectionId + ']').classList.add('active')
         }else{
           document.querySelector('.nav-links a[href*=' + sectionId + ']').classList.remove('active')
       }
     })
 }
 window.addEventListener('scroll', scrollActive)