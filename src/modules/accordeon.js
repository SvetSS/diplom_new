const accordeon = () => {

    const accordeonBlock = document.querySelector('.accordeon');
    const accordeons = accordeonBlock.querySelectorAll('.element ');
    const elementContents = accordeonBlock.querySelectorAll('.element-content ');

    accordeonBlock.addEventListener('click', e => {
        e.preventDefault();

        if (e.target.classList.contains('element title') || e.target.closest('.element')) {
            const tabBtn = e.target.closest('.element');
            accordeons.forEach((item, index) => {
                if (item === tabBtn) {
                    console.log('ggg');
                    accordeons[index].classList.add('active');
                    elementContents[index].style.display = 'block';
                } else {
                    item.classList.remove('active');
                    elementContents[index].style.display = 'none';
                }
            });
        }

    });


    //startSlide();

};

module.exports = accordeon;
