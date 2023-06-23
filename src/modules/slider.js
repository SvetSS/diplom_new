const slider = () => {
    const sliderBlock = document.querySelector('.top-slider');
    const slides = sliderBlock.querySelectorAll('.item ');
    const tables = sliderBlock.querySelectorAll('.table ');

    let dotsList = document.createElement("ul");

    let currentSlide = 0;
    let interval;

    sliderBlock.append(dotsList);

    const nextSlide = (elems, index) => {
        elems[index].style.display = '';
    };
    const nextElement = (elems, index, strClass) => {
        elems[index].classList.add(strClass);
    };
    const prevSlide = (elems, index) => {
        elems[index].style.display = 'none';
    };
    const prevElement = (elems, index, strClass) => {
        elems[index].classList.remove(strClass);
    };


    dotsList.classList.add('slick-dots');

    slides.forEach((item, idx) => {
        const dot = document.createElement("li");
        dot.classList.add('dot');
        if (idx === 0) {
            dot.classList.add('slick-active');
        }

        dotsList.append(dot);
    });

    tables.forEach((item, idx) => {
        if (idx === 0) {
            item.classList.add('active');
        }
    });

    const dots = dotsList.querySelectorAll('.dot');
    const autoSlide = () => {
        prevSlide(slides, currentSlide);
        prevElement(dots, currentSlide, 'slick-active');
        prevElement(tables, currentSlide, 'active');
        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        nextSlide(slides, currentSlide);
        nextElement(dots, currentSlide, 'slick-active');
        nextElement(tables, currentSlide, 'active');
    };

    const startSlide = (timer = 3000) => {
        interval = setInterval(autoSlide, timer);
    };


    sliderBlock.addEventListener('click', e => {
        e.preventDefault();
        if (!e.target.matches('.dot')) {
            return;
        }

        prevSlide(slides, currentSlide, 'portfolio-item-active');
        prevElement(dots, currentSlide, 'slick-active');
        prevElement(tables, currentSlide, 'active');
        if (e.target.classList.contains('dot')) {
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    currentSlide = index;
                }
            });
        }


        nextSlide(slides, currentSlide, 'portfolio-item-active');
        nextElement(dots, currentSlide, 'slick-active');
        nextElement(tables, currentSlide, 'active');
    });


    startSlide();

};

module.exports = slider;
