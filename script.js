document.addEventListener("DOMContentLoaded", function() {
    let words = document.querySelectorAll(".word");
    let currentWordIndex = 0;
    let maxWordIndex = words.length - 1;

    
    function typeWriterEffect(word, index) {
        let letters = word.textContent.split("");
        word.textContent = "";
        letters.forEach((letter, i) => {
            setTimeout(() => {
                let span = document.createElement("span");
                span.textContent = letter;
                span.className = "letter";
                word.appendChild(span);
            }, i * 80);
        });
    }

    
    function transitionToNextWord() {
        let currentWord = words[currentWordIndex];
        let nextWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
        let nextWord = words[nextWordIndex];

        currentWord.style.opacity = "0"; 
        currentWord.querySelectorAll(".letter").forEach(letter => {
            letter.classList.remove("out", "in"); 
        });

        setTimeout(() => {
            nextWord.style.opacity = "1"; 
            typeWriterEffect(nextWord); 

            
            currentWordIndex = nextWordIndex;

            
            setTimeout(transitionToNextWord, 3000); 
        }, 500); 
    }

    transitionToNextWord();
});

// Circle skills//
const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;

    for(let i =0; i < dots; i++){
        points +=`<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }

    elem.innerHTML=points;

    const pointsMarked = elem.querySelectorAll('.points');
    for(let i = 0; i<percent; i++){
        pointsMarked[i].classList.add('marked');
    }
})


// mix it up portfolio ////
var mixer = mixitup('.portfolio-gallery');

// active menu///
let menuLi = document.querySelectorAll('header ul li a');
let sections = document.querySelectorAll('section');

function activeMenu() {
    let len = sections.length;
    while (--len && window.scrollY + 97 < sections[len].offsetTop);
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);

// Sticky navbar/////
const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.scrollY > 50)
})

// toggle icon navbar///
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}

window.onscroll = ()=>{
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
}

// parallax////
const observer = new IntersectionObserver((enteries)=>{
    enteries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        }
        else{
            entry.target.classList.remove("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observer.observe(el));


// expand/collapse
document.getElementById("toggle-btn").addEventListener("click", function () {
    const aboutText = document.getElementById("about-text");
    const toggleBtn = document.getElementById("toggle-btn");
  
    if (aboutText.classList.contains("collapsed")) {
      aboutText.classList.remove("collapsed");
      aboutText.classList.add("expanded");
      toggleBtn.textContent = "Read Less...";
    } else {
      aboutText.classList.remove("expanded");
      aboutText.classList.add("collapsed");
      toggleBtn.textContent = "Read More...";
    }
  });
  

  // send message
  document.getElementById("whatsapp-form").addEventListener("submit", function (e) {
    e.preventDefault(); 

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const address = document.getElementById("address").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check if phone has exactly 10 digits
    if (!/^\d{10}$/.test(phone)) {
        alert("Phone number must be exactly 10 digits.");
        return;
    }

    const whatsappNumber = "916284716671"; 
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nAddress: ${address}\nPhone: ${phone}\nMessage: ${message}`
    )}`;

    window.open(whatsappURL, "_blank");
  });
