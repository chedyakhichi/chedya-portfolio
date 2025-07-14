function hamburg(){
    const navbar = document.querySelector('.dropdown');
    navbar.style.transform = 'translateY(0px)';
}

function cancel(){
    const navbar = document.querySelector('.dropdown');
    navbar.style.transform = 'translateY(-500px)';
}

const texts = [
    "JUNIOR SOFTWARE ENGINEER",
    "Full Stack DEVELOPER"
];

let speed = 100;

const textElements = document.querySelector('.typewriter-text');

let textIndex = 0;
let characterIndex = 0;

function typeWriter(){
    if(characterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter, speed);
    }
    else{
        setTimeout(eraseText, 1000);
    }
}

function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        characterIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

window.onload = typeWriter;




function showExperience(id, element) {
      console.log("Switched to:", id); // TEMP TEST
  const items = document.querySelectorAll('.exp-list li');
  const contents = document.querySelectorAll('.exp-content');

  items.forEach(li => li.classList.remove('active'));
  contents.forEach(div => div.classList.add('hidden'));

  document.getElementById(id).classList.remove('hidden');
  element.classList.add('active');
}

function showPDF(pdfPath) {
  const frame = document.getElementById('cv-frame');
  frame.src = pdfPath;
}


AOS.init({
  offset: 100,
  duration: 1000,
  easing: 'ease-in-out',
  once: true
});

// Smooth scroll to section if "Check out my work" button clicked
document.querySelectorAll('a[href="#projects"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector('#projects').scrollIntoView({ behavior: "smooth" });
  });
});




 
