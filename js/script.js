// =========================
// LOADER
// =========================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {
        
        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 800);

    }

});

// =========================
// BEGIN READING BUTTON
// =========================

const beginBtn = document.getElementById("beginBtn");

if (beginBtn) {

    beginBtn.addEventListener("click", () => {

        document.getElementById("story").scrollIntoView({

            behavior: "smooth"

        });

    });

}
// =========================
// READING PROGRESS BAR
// =========================

window.addEventListener("scroll", () => {

    const winScroll =
        document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (winScroll / height) * 100;

    document.getElementById("progressBar").style.width =
        progress + "%";

});

// =========================
// SCROLL ANIMATIONS
// =========================

const hiddenElements =
    document.querySelectorAll(".chapter");

const observer =
    new IntersectionObserver((entries)=>{

        entries.forEach((entry)=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    });

hiddenElements.forEach((el)=>{

    el.classList.add("hidden");

    observer.observe(el);

});

// ======================
// ACTIVE NAVIGATION
// ======================

const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        if (window.scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

// ======================
// TOP BUTTON
// ======================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// =====================
// MOBILE MENU
// =====================

const menuToggle =
document.getElementById("menuToggle");

const navMenu =
document.getElementById("navMenu");

if (menuToggle && navMenu) {
    
    menuToggle.onclick=()=>{

        navMenu.classList.toggle("show");

    };

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("show");

        });

    });

}

//======================
// MUSIC
//======================

const music =
document.getElementById("bgMusic");

console.log(music);

const musicBtn =
document.getElementById("musicBtn");

console.log(musicBtn);

musicBtn.onclick=()=>{

if(music.paused){

music.play().catch(error => {
    console.log(error);
});

musicBtn.innerHTML="❚❚";

}else{

music.pause();

musicBtn.innerHTML="♫";

}

};