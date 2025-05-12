const text = "Portfolio"; 
const typingEffect = document.getElementById("typing-effect");
let index = 0;

function typeWriter() {
    if (index < text.length) {
        typingEffect.textContent += text[index]; 
        index++;
        setTimeout(typeWriter, 150); 
    } else {
        setTimeout(eraseText, 1000); 
    }
}

function eraseText() {
    if (index > 0) {
        typingEffect.textContent = text.substring(0, index - 1);
        index--;
        setTimeout(eraseText, 100);
    } else {
        setTimeout(typeWriter, 500); 
    }
}

typeWriter();


const container = document.getElementById("main-content");
const container2 = document.getElementById("main-content2");
const linkHalUtama = document.getElementById("halUtama");
const linkAbout = document.getElementById("about");

document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("load", () => {
        container.classList.add("barumasuk");
        container2.classList.add("barumasuk");
    });
});

linkHalUtama.addEventListener("click", (e) => {
    e.preventDefault(); 
    container.classList.add("pindah");
    container2.classList.add("pindah");
    setTimeout(() => {
        window.location.href = "index.html";
    }, 500);
});

linkAbout.addEventListener("click", (e) => {
    e.preventDefault(); 
    container.classList.add("pindah");
    container2.classList.add("pindah");
    setTimeout(() => {
        window.location.href = "about/about.html";
    }, 500);
});