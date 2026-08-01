// تغيير لون شريط التنقل عند التمرير

window.addEventListener("scroll", function () {

const header = document.querySelector("header");

if(window.scrollY > 50){

header.style.boxShadow = "0 8px 25px rgba(0,0,0,.25)";

}else{

header.style.boxShadow = "0 5px 20px rgba(0,0,0,.2)";

}

});

// ظهور العناصر أثناء النزول

const cards = document.querySelectorAll(".card,.feature-card");

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition=".7s";

observer.observe(card);

});
