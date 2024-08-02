let searchBar = document.getElementById("searchbar")
let searchClickFunc = () => {
  
    searchBar.style.border="1px solid gray";
    searchBar.style.fontWeight="bold"
    searchBar.style.padding="0px 25px 0px 9px"
}
searchBar.addEventListener("click", searchClickFunc);
//House selection Generator
// function getRandomPercentages() {
//     let random1 = Math.floor(Math.random() * 100);
//     let random2 = Math.floor(Math.random() * (100 - random1));
//     let random3 = Math.floor(Math.random() * (100 - random1 - random2));
//     let random4 = 100 - random1 - random2 - random3;

//     return [random1, random2, random3, random4];
// }

// let percentages = getRandomPercentages();
// console.log(percentages); // Example output: [23.45, 12.67, 43.21, 20.67]

// document.addEventListener("DOMContentLoaded", () => {
//     let downArrows = document.querySelectorAll(".arrows");

//     downArrows.forEach(downArrow => {
//         downArrow.addEventListener("click", () => {
//             downArrow.style.transform = "rotate(270deg)";
//             console.log("Hello");
//         });
//     });
// });
document.addEventListener("DOMContentLoaded", () => {
        let downArrows = document.querySelectorAll(".arrows");
        let popup=document.getElementsByClassName("popup-image")[0]
        popup.style.display="none"
        downArrows.forEach(downArrow => {
            downArrow.addEventListener("click", () => {
                if(downArrow.classList.contains("rotate-270")){
                 popup.style.display="none"
                    downArrow.classList.add("rotate-90")
                    downArrow.classList.remove("rotate-270")
                    console.log("upar")
                }
                else{
            
                    downArrow.classList.add("rotate-270")
                    popup.style.display="flex"
                    downArrow.classList.remove("rotate-90")
                    console.log("niche")
                }
            });
        });
    });
    
    //rotate 270 pe display = flex
    //rotate 90 pe display=none
  //adding different images for the popup block for different elements
    
  let discover = document.getElementById("discover");
  let imgBlock = document.getElementById("popup");
  
  let imageAdder = () => {
      imgBlock.innerHTML = `
        
          <img src="images/webnav_400x400_experiences.webp"  class="hidden-img" alt="">
<img src="images/Secondary-Nav_Portkey-Games_2x.webp"  class="hidden-img" alt="">
<img src="images/webnav_400x400_films_01.webp"  class="hidden-img" alt="">
<img src="images/webnav_400x400_stage_01.webp"  class="hidden-img" alt="">
<img src="images/webnav_400x400_books_01.webp"  class="hidden-img" alt="">
      `;
  };
  discover.addEventListener("click",imageAdder)
  let firstListElem=document.getElementById("first-list-elem")
let firstImgAdder=()=>{
    imgBlock.innerHTML=`
    
    <img src="images/webnav_400x400_News_01.webp"  class="hidden-img" alt="">
                <img src="images/webnav_400x400_Features_01.webp" class="hidden-img2" alt="">
    
    `
}
firstListElem.addEventListener("click",firstImgAdder);
let secondListElem=document.getElementById("second-list-elem")
let secondImgAdder=()=>{
    imgBlock.innerHTML=`
    
   <img src="images/webnav_400x400_puzzles_01.webp"  class="hidden-img" alt="">
<img src="images/Quizzes_Nav_1.webp"  class="hidden-img" alt="">
    
    `
}
secondListElem.addEventListener("click",secondImgAdder);

