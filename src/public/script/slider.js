(function () {
    const sliders = [...document.querySelectorAll('.slider_body')];
    const arrowNext = document.querySelector('#next');
    const arrowBefore = document.querySelector('#before');
    let valeu;

    arrowNext.addEventListener('click', () => changePosition(1));
    arrowBefore.addEventListener('click', () => changePosition(-1));


    function changePosition(change){
        const currentElement = Number(document.querySelector('.slider_body--show').dataset.id);

        valeu = currentElement;
        valeu += change;
        
        if(valeu === 0 || valeu == sliders.length+1){
            valeu = valeu === 0 ? sliders.length : 1;
        }

        sliders[currentElement -1].classList.toggle('slider_body--show')
        sliders[valeu -1].classList.toggle('slider_body--show')
    }


})()