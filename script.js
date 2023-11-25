let rect = document.querySelector("#center");

rect.addEventListener("mousemove",function(details){
    var rectanglelocation = rect.getBoundingClientRect();
    let x = details.clientX - rectanglelocation.left;
    let y = details.clientY - rectanglelocation.height;
    //left side
    if(x<rectanglelocation.width/2){
        let redColor = gsap.utils.mapRange(0,rectanglelocation.width/2,255,0,x)
        gsap.to(rect,{
            backgroundColor:`rgb(${redColor},0,0)`,
            ease : Power4,
        })
    }
    // right side
    else{
        let blueColor = gsap.utils.mapRange(rectanglelocation.width/2,rectanglelocation.width,0,255,x)
        gsap.to(rect,{
            backgroundColor:`rgb(0,0,${blueColor})`,
            ease : Power4,
        })
    }
})

rect.addEventListener("mouseleave",function(){
    gsap.to(rect,{
        backgroundColor:"white"
    })
})
