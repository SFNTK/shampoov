let timeline = new TimelineMax();
gsap.registerPlugin(ScrollTrigger);


let controller = new ScrollMagic.Controller();

gsap.to("#productyellow", {
    y: -10, // Adjust the floating distance
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
})
gsap.to("#productblue", {
    y: -10, // Adjust the floating distance
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
})

gsap.to("#productpink", {
    y: -10, // Adjust the floating distance
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
})

gsap.to("#logo", {
    y: -10, // Adjust the floating distance
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
})

gsap.to("#tike", {
    y: -10, // Adjust the floating distance
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
})

gsap.to("#price", {
    y: -10, 
    rotate:5,// Adjust the floating distance
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
})

if (window.innerWidth > 1024){
  var tls = gsap.timeline({scrollTrigger:{
    trigger: "#part1",
    start: "top 0%",
    end: "top -80%",
    scrub: true,
}})

tls.
fromTo("#productyellow",{
    rotate:0

  },{
    rotate:360,
    top:"110%",left:"80%",
    width:"8%",
    duration:5

  },"firstanimation").to("#productblue",{
    rotate:360,
    top:"110%",opacity:0,left:"80%",
   width:"9%",
    duration:5
  },"firstanimation").to("#productpink",{
    rotate:360,left:"80%",
    opacity:0,
    top:"110%",
    width:"8%",
    duration:5
  },"firstanimation").to("#logo",{
    
    top:"120%",
    left:"40%",
    duration:5
  },"firstanimation").to("#price",{
    
    top:"120%",
    
    duration:5
  },"firstanimation").to("#tike",{
    
    top:"125%",
    left:"20%",
    duration:5
  },"firstanimation")


  var tls2 = gsap.timeline({scrollTrigger:{
    trigger: "#part4",
    start: "top 0%",
    end: "top -80%",
    scrub: true,
}})

tls2.
fromTo("#productyellow",{
    rotate:0

  },{
    rotate:360,opacity:0,
    top:"210%",left:"10%",
    width:"8%",
    duration:5

  },"secondanimation").to("#productblue",{
    rotate:360,
    top:"210%",opacity:0,left:"10%",
   width:"9%",
    duration:5
  },"secondanimation").fromTo("#productpink",{rotate:0},{
    rotate:360,
    left:"10%",
    opacity:1,
    top:"210%",
    width:"8%",
    duration:5
  },"secondanimation").to("#logo",{
    
    top:"220%",
    left:"40%",
    duration:5
  },"secondanimation").to("#price",{
    
    top:"223%",
    left:"20%",
    duration:5
  },"secondanimation").to("#tike",{
    
    top:"225%",
    left:"80%",
    duration:5
  },"secondanimation")


  var tls3 = gsap.timeline({scrollTrigger:{
    trigger: "#part5",
    start: "top 0%",
    end: "top -80%",
    scrub: true,
}})

tls3.
fromTo("#productyellow",{
    rotate:0

  },{
    rotate:360,opacity:0,
    top:"310%",left:"10%",
    width:"8%",
    duration:5

  },"secondanimation").fromTo("#productblue",{rotate:0},{
    rotate:360,
    top:"310%",opacity:1,left:"10%",
   width:"9%",
    duration:5
  },"secondanimation").fromTo("#productpink",{rotate:0},{
    rotate:360,
    left:"10%",
    opacity:0,
    top:"310%",
    width:"9%",
    duration:5
  },"secondanimation").to("#logo",{
    
    top:"320%",
    left:"40%",
    duration:5
  },"secondanimation").to("#price",{
    
    top:"323%",
     left:"80%",
    duration:5
  },"secondanimation").to("#tike",{
    
    top:"325%",
   left:"20%",
    duration:5
  },"secondanimation")


}else if(window.innerWidth>767){
  var tls = gsap.timeline({scrollTrigger:{
    trigger: "#part1",
    start: "top 0%",
    end: "top -80%",
    scrub: true,
}})

tls.
fromTo("#productyellow",{
    rotate:0

  },{
    rotate:360,
    top:"111vh",left:"40%",
    width:"18%",
    duration:5

  },"firstanimation").to("#productblue",{
    rotate:360,
    top:"111vh",opacity:0,left:"40%",
   width:"18%",
    duration:5
  },"firstanimation").to("#productpink",{
    rotate:360,left:"40%",
    opacity:0,
    top:"111vh",
    width:"18%",
    duration:5
  },"firstanimation").to("#logo",{
    
    top:"142vh",
    left:"25%",
    duration:5
  },"firstanimation").to("#price",{
    
    top:"120vh",
    
    duration:5
  },"firstanimation").to("#tike",{
    
    top:"120vh",
    left:"65%",
    duration:5
  },"firstanimation")


  var tls2 = gsap.timeline({scrollTrigger:{
    trigger: "#part4",
    start: "top 0%",
    end: "top -80%",
    scrub: true,
}})

tls2.
fromTo("#productyellow",{
    rotate:0

  },{
    rotate:360,
    top:"211vh",left:"40%",
    width:"18%",opacity:0,
    duration:5

  },"firstanimation").to("#productblue",{
    rotate:360,
    top:"211vh",opacity:0,left:"40%",
   width:"18%",
    duration:5
  },"firstanimation").fromTo("#productpink",{
    rotate:0
  },{
    rotate:360,left:"40%",
    opacity:1,
    top:"211vh",
    width:"18%",
    duration:5
  },"firstanimation").to("#logo",{
    
    top:"242vh",
    left:"25%",
    duration:5
  },"firstanimation").to("#price",{
    
    top:"220vh",
    
    duration:5
  },"firstanimation").to("#tike",{
    
    top:"220vh",
    left:"65%",
    duration:5
  },"firstanimation")

  var tls3 = gsap.timeline({scrollTrigger:{
    trigger: "#part5",
    start: "top 0%",
    end: "top -80%",
    scrub: true,
}})

tls3.
fromTo("#productyellow",{
    rotate:0

  },{
    rotate:360,
    top:"311vh",left:"40%",
    width:"18%",
    duration:5

  },"firstanimation").to("#productblue",{
    rotate:360,
    top:"311vh",opacity:0,left:"40%",
   width:"18%",opacity:1,
    duration:5
  },"firstanimation").to("#productpink",{
    rotate:360,left:"40%",
    opacity:0,
    top:"311vh",
    width:"18%",
    duration:5
  },"firstanimation").to("#logo",{
    
    top:"342vh",
    left:"25%",
    duration:5
  },"firstanimation").to("#price",{
    
    top:"320vh",
    
    duration:5
  },"firstanimation").to("#tike",{
    
    top:"320vh",
    left:"65%",
    duration:5
  },"firstanimation")
}else if(window.innerWidth>535){
  let logo=document.getElementById("logo")
  let tike=document.getElementById("tike")
  let price=document.getElementById("price")
  let productpink=document.getElementById("productpink")
  let productblue=document.getElementById("productblue")
  let productyellow=document.getElementById("productyellow")
  logo.style.width="40%"
  logo.style.left="30%"
  price.style.width="25%"
  productyellow.style.width="23%"
  productpink.style.width="23%"
  productblue.style.width="25%"
  productyellow.style.top="20%"
  productpink.style.top="20%"
  productblue.style.top="20%"

  var tls = gsap.timeline({scrollTrigger:{
    trigger: "#part1",
    start: "top 0%",
    end: "top -80%",
    scrub: true,
}})

tls.
fromTo("#productyellow",{
    rotate:0

  },{
    rotate:360,
    top:"130%",left:"40%",
    width:"15%",
    duration:5

  },"firstanimation").to("#productblue",{
    rotate:360,
    top:"130%",left:"40%",
    width:"15%",opacity:0,
  
    duration:5
  },"firstanimation").to("#productpink",{
    rotate:360,
    opacity:0,
    top:"130%",left:"40%",
    width:"15%",
    duration:5
  },"firstanimation").to("#logo",{
    
    top:"152%",
    left:"25%",
    duration:5
  },"firstanimation").to("#price",{
    
    top:"135%",
    
    duration:5
  },"firstanimation").to("#tike",{
    
    top:"135%",
    left:"65%",
    duration:5
  },"firstanimation")


  var tls2 = gsap.timeline({scrollTrigger:{
    trigger: "#part5",
    start: "top 80%",
    end: "top 30%",
    scrub: true,
}})

tls2.
fromTo("#productyellow",{
    rotate:0

  },{
    rotate:360,
    top:"302%",left:"40%",
    width:"18%",opacity:0,
    duration:5

  },"firstanimation").to("#productblue",{
    rotate:360,
    top:"302%",opacity:0,left:"40%",
   width:"18%",
    duration:5
  },"firstanimation").fromTo("#productpink",{
    rotate:0
  },{
    rotate:360,left:"40%",
    opacity:1,
    top:"302%",
    width:"15%",
    duration:5
  },"firstanimation").to("#logo",{
    
    top:"324%",
    left:"27%",
    duration:5
  },"firstanimation").to("#price",{
    
    top:"300%",
    
    duration:5
  },"firstanimation").to("#tike",{
    
    top:"300%",
    left:"65%",
    duration:5
  },"firstanimation")

  var tls3 = gsap.timeline({scrollTrigger:{
    trigger: "#part6",
    start: "top 80%",
    end: "top 30%",
    scrub: true,
}})

tls3.
fromTo("#productyellow",{
    rotate:0

  },{
    rotate:360,
    top:"455%",left:"40%",
    width:"22%",
    duration:5

  },"firstanimation").to("#productblue",{
    rotate:360,
    top:"455%",opacity:0,left:"40%",
   width:"22%",opacity:1,
    duration:5
  },"firstanimation").to("#productpink",{
    rotate:360,left:"40%",
    opacity:0,
    top:"455%",
    width:"22%",
    duration:5
  },"firstanimation").to("#logo",{
    
    top:"490%",
    left:"28%",
    duration:5
  },"firstanimation").to("#price",{
    
    top:"465%",
    
    duration:5
  },"firstanimation").to("#tike",{
    
    top:"465%",
    left:"65%",
    duration:5
  },"firstanimation")

}
else if (window.innerWidth > 385){
  var tls = gsap.timeline({scrollTrigger:{
    trigger: "#part1",
    start: "top 0%",
    end: "top -80%",
    scrub: true,
}})

tls.
fromTo("#productyellow",{
    rotate:0

  },{
    rotate:360,
    top:"150vh",left:"40%",
    width:"20%",
    duration:5

  },"firstanimation").to("#productblue",{
    rotate:360,
    top:"150vh",left:"40%",
    width:"20%",opacity:0,
    duration:5
  },"firstanimation").to("#productpink",{
    rotate:360,
    top:"150vh",left:"40%",
    width:"20%",opacity:0,
    duration:5
  },"firstanimation").to("#logo",{
    
    top:"130vh",width:"60%",
    left:"20%",
    duration:5
  },"firstanimation").to("#price",{
    
    top:"125vh",width:"18%",
    
    duration:5
  },"firstanimation").to("#tike",{
    
    top:"125vh",
    
    duration:5
  },"firstanimation")
  

  var tls2 = gsap.timeline({scrollTrigger:{
    trigger: "#part5",
    start: "top 80%",
    end: "top 30%",
    scrub: true,
}})

tls2.
to("#productyellow",{
    rotate:360,
    top:"300vh",
    left:"40%",opacity:0,
    width:"20%",
    duration:5,

  },"secondanimation").to("#productblue",{
    rotate:360,
    top:"300vh",left:"40%",
    width:"20%",opacity:0,
    duration:5
  },"secondanimation").to("#productpink",{
    rotate:360,
    top:"300vh",left:"40%",
    width:"20%",opacity:1,
    duration:5
  },"secondanimation").to("#logo",{
    
    top:"325vh",width:"60%",
    left:"20%",
    duration:5
  },"secondanimation").to("#price",{
    
    top:"322vh",width:"18%",
    
    duration:5
  },"secondanimation").to("#tike",{
    
    top:"322vh",
    
    duration:5
  },"secondanimation")

  var tls3 = gsap.timeline({scrollTrigger:{
    trigger: "#part6",
    start: "top 80%",
    end: "top 30%",
    scrub: true,
}})

tls3.
to("#productyellow",{
    rotate:360,
    top:"485vh",
    left:"40%",opacity:0,
    width:"25%",
    duration:5,

  },"secondanimation").to("#productblue",{
    rotate:360,
    top:"485vh",left:"40%",
    width:"25%",opacity:1,
    duration:5
  },"secondanimation").to("#productpink",{
    rotate:360,
    top:"485vh",left:"40%",
    width:"26%",opacity:0,
    duration:5
  },"secondanimation").to("#logo",{
    
    top:"465vh",width:"60%",
    left:"20%",
    duration:5
  },"secondanimation").to("#price",{
    
    top:"482vh",width:"25%",
    
    duration:5
  },"secondanimation").to("#tike",{
    
    top:"482vh",
    
    duration:5
  },"secondanimation")
  
  


} 
else if (window.innerWidth >=285){
  var tls = gsap.timeline({scrollTrigger:{
    trigger: "#part1",
    start: "top 0%",
    end: "top -80%",
    scrub: true,
}})

tls.
fromTo("#productyellow",{
    rotate:0

  },{
    rotate:360,
    top:"170vh",left:"40%",
    width:"20%",
    duration:5

  },"firstanimation").to("#productblue",{
    rotate:360,
    top:"170vh",left:"40%",
    width:"20%",opacity:0,
    duration:5
  },"firstanimation").to("#productpink",{
    rotate:360,
    top:"170vh",left:"40%",
    width:"20%",opacity:0,
    duration:5
  },"firstanimation").to("#logo",{
    
    top:"150vh",width:"60%",
    left:"20%",
    duration:5
  },"firstanimation").to("#price",{
    
    top:"125vh",width:"18%",
    
    duration:5
  },"firstanimation").to("#tike",{
    
    top:"125vh",
    
    duration:5
  },"firstanimation")
 
  var tls2 = gsap.timeline({scrollTrigger:{
    trigger: "#part5",
    start: "top 80%",
    end: "top 30%",
    scrub: true,
}})

tls2.
to("#productyellow",{
    rotate:360,
    top:"345vh",
    left:"40%",opacity:0,
    width:"25%",
    duration:5,

  },"secondanimation").to("#productblue",{
    rotate:360,
    top:"345vh",left:"40%",
    width:"25%",opacity:0,
    duration:5
  },"secondanimation").to("#productpink",{
    rotate:360,
    top:"345vh",left:"40%",
    width:"25%",opacity:1,
    duration:5
  },"secondanimation").to("#logo",{
    
    top:"380vh",width:"60%",
    left:"20%",
    duration:5
  },"secondanimation").to("#price",{
    
    top:"372vh",width:"18%",
    
    duration:5
  },"secondanimation").to("#tike",{
    
    top:"372vh",
    
    duration:5
  },"secondanimation")

  var tls3 = gsap.timeline({scrollTrigger:{
    trigger: "#part6",
    start: "top 80%",
    end: "top 30%",
    scrub: true,
}})

tls3.
to("#productyellow",{
    rotate:360,
    top:"540vh",
    left:"40%",opacity:0,
    width:"25%",
    duration:5,

  },"secondanimation").to("#productblue",{
    rotate:360,
    top:"540vh",left:"40%",
    width:"25%",opacity:1,
    duration:5
  },"secondanimation").to("#productpink",{
    rotate:360,
    top:"540vh",left:"40%",
    width:"26%",opacity:0,
    duration:5
  },"secondanimation").to("#logo",{
    
    top:"580vh",width:"60%",
    left:"20%",
    duration:5
  },"secondanimation").to("#price",{
    
    top:"542vh",width:"25%",
    
    duration:5
  },"secondanimation").to("#tike",{
    
    top:"542vh",
    
    duration:5
  },"secondanimation")
  


}else if (window.innerWidth < 285){
  var tls = gsap.timeline({scrollTrigger:{
    trigger: "#part1",
    start: "top 0%",
    end: "top -80%",
    scrub: true,
}})

tls.
fromTo("#productyellow",{
    rotate:0

  },{
    rotate:360,
    top:"170vh",left:"40%",
    width:"20%",
    duration:5

  },"firstanimation").to("#productblue",{
    rotate:360,
    top:"170vh",left:"40%",
    width:"20%",opacity:0,
    duration:5
  },"firstanimation").to("#productpink",{
    rotate:360,
    top:"170vh",left:"40%",
    width:"20%",opacity:0,
    duration:5
  },"firstanimation").to("#logo",{
    
    top:"150vh",width:"60%",
    left:"20%",
    duration:5
  },"firstanimation").to("#price",{
    
    top:"165vh",width:"18%",
    
    duration:5
  },"firstanimation").to("#tike",{
    
    top:"165vh",
    
    duration:5
  },"firstanimation")
 
  var tls2 = gsap.timeline({scrollTrigger:{
    trigger: "#part5",
    start: "top 80%",
    end: "top 30%",
    scrub: true,
}})

tls2.
to("#productyellow",{
    rotate:360,
    top:"357vh",
    left:"40%",opacity:0,
    width:"25%",
    duration:5,

  },"secondanimation").to("#productblue",{
    rotate:360,
    top:"357vh",left:"40%",
    width:"25%",opacity:0,
    duration:5
  },"secondanimation").to("#productpink",{
    rotate:360,
    top:"357vh",left:"40%",
    width:"25%",opacity:1,
    duration:5
  },"secondanimation").to("#logo",{
    
    top:"385vh",width:"60%",
    left:"20%",
    duration:5
  },"secondanimation").to("#price",{
    
    top:"372vh",width:"18%",
    
    duration:5
  },"secondanimation").to("#tike",{
    
    top:"372vh",
    
    duration:5
  },"secondanimation")

  var tls3 = gsap.timeline({scrollTrigger:{
    trigger: "#part6",
    start: "top 80%",
    end: "top 30%",
    scrub: true,
}})

tls3.
to("#productyellow",{
    rotate:360,
    top:"540vh",
    left:"35%",opacity:0,
    width:"35%",
    duration:5,

  },"secondanimation").to("#productblue",{
    rotate:360,
    top:"540vh",left:"35%",
    width:"35%",opacity:1,
    duration:5
  },"secondanimation").to("#productpink",{
    rotate:360,
    top:"540vh",left:"35%",
    width:"35%",opacity:0,
    duration:5
  },"secondanimation").to("#logo",{
    
    top:"580vh",width:"70%",
    left:"18%",
    duration:5
  },"secondanimation").to("#price",{
    
    top:"542vh",width:"25%",
    
    duration:5
  },"secondanimation").to("#tike",{
    
    top:"542vh",
    
    duration:5
  },"secondanimation")
  

}
