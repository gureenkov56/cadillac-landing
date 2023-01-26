import Features from "./features.js";

window.addEventListener('DOMContentLoaded', () => {

    /************
     * Features *
     ************/
    const features = new Features(document.getElementById('imgBlock')!, {
        listElementsAndImgUrl: [
            {
                img: './images/img/back.webp',
                el: document.getElementById('stab')!,
            },
            {
                img: './images/img/in.webp',
                el: document.getElementById('safety')!,
            },
            {
                img: './images/img/media.webp',
                el: document.getElementById('media')!,
            },
            {
                img: './images/img/radiator.webp',
                el: document.getElementById('camera')!,
            },
            {
                img: './images/img/seat.webp',
                el: document.getElementById('nav')!,
            },
            {
                img: './images/img/white.webp',
                el: document.getElementById('climat')!,
            },
        ],
    });

    features.create();

    const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.value = localStorage.getItem(input.id) || "";
        addActiveClassToLabel(input);

        input.addEventListener('input', () => {
            addActiveClassToLabel(input);
            localStorage.setItem(input.id, input.value);
        });
    })

    function addActiveClassToLabel(input: HTMLInputElement): void {
        if (input.value.length) {
            input.parentElement?.querySelector('label')?.classList.add('active');
        } else {
            input.parentElement?.querySelector('label')?.classList.remove('active');
        }
    }

    /**********
     * Scroll *
     **********/

    const scrollToDetails: HTMLElement = document.getElementById('scrollToDetails')!;
    const secondBlock: HTMLElement = document.getElementById('secondBlock')!;

    if (scrollToDetails && secondBlock) {
        scrollToDetails.addEventListener('click', () => {
            secondBlock.scrollIntoView({ behavior: 'smooth' })
        })
    }
})
