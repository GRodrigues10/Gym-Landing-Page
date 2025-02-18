const div1 = document.getElementById('part1');
const div2 = document.getElementById('part2');
const div3 = document.getElementById('part3');

const blur1 = document.getElementById('blur1');
const blur2 = document.getElementById('blur2');
const blur3 = document.getElementById('blur3');

const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

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

document.querySelector(".zap").addEventListener("click", function() {
    window.open("https://wa.me/5521965476339", "_blank");
});
