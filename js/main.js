const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

const containerImg = document.querySelector('.container-img');

images.forEach(sezioni => {
    console.log(sezioni);
    containerImg.innerHTML += `<div class="hidden"><img src="${sezioni['url']}" />
    <div class="titolo"><h1">${sezioni['title']}</h1><p>${sezioni['description']}</p></div>
    </div>`
    
});


//tasti next + prev
let visibile = 0;

const hidden = document.querySelectorAll('.hidden');

hidden[visibile].classList.add('show');

const right = document.querySelector('.right');
const left = document.querySelector('.left');

right.addEventListener('click',function(){
    next();
}
);

left.addEventListener('click', function(){
    prev();
}
);


//autoplay + btn play, pause
let play = document.querySelector('.play');

let pause = document.querySelector('.pause');

let clock = setInterval(next,3000);


play.addEventListener('click',
function() { 
    clock = setInterval(function() {
        next();
    },3000);
});


pause.addEventListener('click',
function(){
    clearInterval(clock);
});




//function
function next(){
    hidden[visibile].classList.remove('show')
    if(visibile == images.length - 1){
        visibile = 0;
    } else{
        visibile++;
    }
    hidden[visibile].classList.add('show')
}

function prev(){

    hidden[visibile].classList.remove('show')
    if(visibile == 0){
        visibile = images.length - 1;
    } else{
        visibile--;
    }
    hidden[visibile].classList.add('show')
}