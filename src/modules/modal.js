const modal = () => {

    const modal = document.querySelector('.modal-callback')//');
    const modalOverlay = document.querySelector('.modal-overlay');
    const buttonServices = document.querySelector('.button-services');
    const buttons = document.querySelectorAll('.callback-btn');
    const els = document.querySelectorAll('.services-section .element ');
    const closeBtn = modal.querySelector('.modal-close');

    const closeModal = () => {
        modal.style.display = 'none';
        modalOverlay.style.display = 'none';
    }
    const openModal = () => {
        modal.style.display = 'block';
        modalOverlay.style.display = 'block';
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    els.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (e.target.closest('.img-wrapper')) {
                openModal();
            }
        });
    });
    buttonServices.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);

}

module.exports = modal;