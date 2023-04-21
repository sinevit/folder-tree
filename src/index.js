import "normalize.css";
import './assets/styles/main.scss';


const btnsTree = document.querySelectorAll('.folder__btn');


[...btnsTree].map(btn => {
    btn.addEventListener('click', (e) => {
        const currentBtn = e.target;
        currentBtn.classList.toggle("folder__btn_active");
        currentBtn.classList.contains("folder__btn_active")
            ? displayBlock(currentBtn, 'active')
            : displayBlock(currentBtn, 'disactive')
    })
})

function displayBlock(btn, action) {
    const nodes = btn.parentNode.childNodes
    switch (action) {
        case 'active': 
            [...nodes].map(el => {
                if (el.classList && el.classList.contains('folder__content')) {
                    el.classList.remove('visible')
                }
                if (el.classList && el.classList.contains('folder__description')) {
                    el.querySelector('.folder__span').classList.remove('folder__span_active');
                }
            })
            
            break
        
        case 'disactive': 
            [...nodes].map(el => {
                if (el.classList && el.classList.contains('folder__content')) {
                    el.classList.add('visible')
                }
                if (el.classList && el.classList.contains('folder__description')) {
                    el.querySelector('.folder__span').classList.add('folder__span_active');
                }
            })
     
            break
    }
}