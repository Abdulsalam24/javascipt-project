let image = document.getElementById("image");
let images = ["/asset/img-slide1.jpg","/asset/img-slide2.jpg","/asset/img-slide3.jpg"];

setInterval(function(){
    let random = Math.floor(Math.random()*3);
    image.src = images[random];
},2500)

let content = document.getElementsByTagName('body')[0];
let dark = document.getElementById('dark-change');

dark.addEventListener('click',function(){
    content.classList.toggle("night");
});

// setInterval(function(){
//     let textSlide = document.getElementById("text-slide");
//     let testOne = document.getElementById("test1");
//     let testTwo = document.getElementById("test2");
//     let testThree = document.getElementById("test3");


//     let current = 1;


//     if(current === 1){
//         testOne.style.display = "block";
//         testTwo.style.display = "none";
//         testThree.style.display = "none";
//         current++;
//     } 
//      if(current === 2){ 
//         testOne.style.display = "none";
//         testTwo.style.display = "block";
//         testThree.style.display = "none";
//         current++;
//     } 
//      if(current === 3){
//         testOne.style.display = "none";
//         testTwo.style.display = "none";
//         testThree.style.display = "block"; current++;

//     }
//     if(current > 3){
//         current = 1;
//     }
// },3000)




