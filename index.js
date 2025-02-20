const div1 = document.getElementById('part1');
const div2 = document.getElementById('part2');
const div3 = document.getElementById('part3');

const blur1 = document.getElementById('blur1');
const blur2 = document.getElementById('blur2');
const blur3 = document.getElementById('blur3');

const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

// Hover para div1
div1.addEventListener('mouseover', () => {
    text1.classList.remove('invisible');
    text1.classList.add('visible');
    blur1.style.backgroundColor = 'rgba(0, 0, 0, 0.558)';
});

div1.addEventListener('mouseout', () => {
    text1.classList.remove('visible');
    text1.classList.add('invisible');
    blur1.style.backgroundColor = 'transparent';
});

// Hover para div2
div2.addEventListener('mouseover', () => {
    text2.classList.remove('invisible');
    text2.classList.add('visible');
    blur2.style.backgroundColor = 'rgba(0, 0, 0, 0.558)';
});

div2.addEventListener('mouseout', () => {
    text2.classList.remove('visible');
    text2.classList.add('invisible');
    blur2.style.backgroundColor = 'transparent';
});

// Hover para div3
div3.addEventListener('mouseover', () => {
    text3.classList.remove('invisible');
    text3.classList.add('visible');
    blur3.style.backgroundColor = 'rgba(0, 0, 0, 0.558)';
});

div3.addEventListener('mouseout', () => {
    text3.classList.remove('visible');
    text3.classList.add('invisible');
    blur3.style.backgroundColor = 'transparent';
});

// Redirecionamento para WhatsApp
document.querySelector(".zap").addEventListener("click", function() {
    window.open("https://wa.me/5521965476339", "_blank");
});

// Observador de visibilidade de elementos na tela
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".part, #title");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
            }
        });
    }, { threshold: 0.3 });

    elements.forEach((el) => observer.observe(el));
});


document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector('.about'); // Seleciona a seção "Sobre Nós"

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate"); // Adiciona a classe que dispara a animação
            }
        });
    }, { threshold: 0.3 }); // Vai ativar a animação quando 30% da seção estiver visível

    observer.observe(aboutSection); // Observa a seção "Sobre Nós"
});


document.addEventListener("DOMContentLoaded", function () {
    const contactSection = document.querySelector('.contact'); // Seleciona a seção "Fale Conosco"

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate"); // Adiciona a classe que dispara a animação
            }
        });
    }, { threshold: 0.3 }); // Vai ativar a animação quando 30% da seção estiver visível

    observer.observe(contactSection); // Observa a seção "Fale Conosco"
});

document.querySelectorAll('.part').forEach(part => {
    part.addEventListener('click', (e) => {
        e.stopPropagation(); // Previne o evento de se propagar para o contêiner pai
        const textElement = e.currentTarget.querySelector('p');
        textElement.classList.toggle('visible');
    });
});

document.querySelector('.parts').addEventListener('click', (e) => {
    // Aqui você pode adicionar alguma lógica, caso precise interagir com o contêiner.
});

