var content = [
    {
        img : 'img/alphanse-img.jpeg',
        reviews :'A review is an evaluation of a publication, product, service, or company or a critical take on current affairs in literature, politics or culture.',
        name : 'Alphanse'
    },
    {
        img : 'img/chithirai-img.jpeg',
        reviews : 'A user review refers to a review written by a user or consumer of a product or service based on the author own experience as a user of the reviewed product.',
        name : 'Chithirai'
    },
    {
        img : 'img/mari-pic.jpeg',
        reviews : 'Popular sources for consumer reviews are e-commerce sites like Amazon.com and Zappos and social media sites like Tripadvisor and Yel.',
        name : 'Mari Selvam'
    }
]
var random;
var leftArrow = document.querySelector('.left-btn');
leftArrow.addEventListener('click',() =>{
// var random = Math.floor(Math.random() * content.length);
// console.log(random);
var currentReview = (content[random].img);
var para = document.querySelector('.p');
para.textContent = (content[random].reviews);
});

var rightArrow = document.querySelector('.right-btn');
rightArrow.addEventListener('click',() =>{
random = Math.floor(Math.random() * content.length);
var name = document.querySelector('h2');
name.textContent = (content[random].name);
var currentPic = (content[random].img);
var pic = document.querySelector('.pic');
pic.setAttribute('src',currentPic);
var currentReview = document.querySelector('.p');
currentReview.textContent = (content[random].reviews);
});
