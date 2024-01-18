let cup1 = document.querySelector('.cup1');
let cup2 = document.querySelector('.cup2');
let water1 = document.querySelector('.water1');
let water2 = document.querySelector('.water2');
let water3 = document.querySelector('.water3');
let water = document.querySelector('.water');


cup2.addEventListener('click', () => {
    cup1.appendChild(water3);
});
cup2.addEventListener('dblclick', () => {
    cup1.appendChild(water2);
});
cup2.addEventListener('mouseover', () => {
    cup1.appendChild(water1);
});

cup1.addEventListener('click', () => {
    let r = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    let g = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    let b = Math.floor(Math.random() * (255 - 0 + 1)) + 0;

    water1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    water2.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    water3.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

});
