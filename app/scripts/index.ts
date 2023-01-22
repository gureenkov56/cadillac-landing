import Features from "./features.js";

const features = new Features(document.getElementById('imgBlock'), {
    listElementsAndImgUrl: [
        {
            img: './images/img/back.webp',
            el: document.getElementById('stab'),
        },
        {
            img: './images/img/in.webp',
            el: document.getElementById('safety'),
        },
        {
            img: './images/img/media.webp',
            el: document.getElementById('media'),
        },
        {
            img: './images/img/radiator.webp',
            el: document.getElementById('camera'),
        },
        {
            img: './images/img/seat.webp',
            el: document.getElementById('nav'),
        },
        {
            img: './images/img/white.webp',
            el: document.getElementById('climat'),
        },
    ],
});

features.create();
