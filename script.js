const aside = document.querySelector('.aside');
const ordercall = document.querySelector('.ordercall');
const feedback = document.querySelector('.feedback');

const asideDb = document.querySelectorAll(".aside-db");
const ordercallDb = document.querySelectorAll(".ordercall-db");
const feedbackDb = document.querySelectorAll(".feedback-db");

const ordercallDbAside = document.querySelectorAll(".aside__info-item.ordercall-db");
const feedbackDbAside = document.querySelectorAll(".aside__info-item.feedback-db");

const feedbackDisn = document.querySelector(".feedback-dn");
const ordercallDisn = document.querySelector(".ordercall-dn");
const asideDisn = document.querySelector(".aside-dn");

const mainPage = document.querySelector(".main__header");

mainPage.addEventListener('click', (e) => {
    const outsideAside = e.composedPath().includes(aside);
    const outsideOrdercall = e.composedPath().includes(ordercall);
    const outsideFeedback = e.composedPath().includes(feedback);


    if (!outsideAside) {
        aside.classList.remove('aside--show');
    };

    if (!outsideOrdercall) {
        ordercall.classList.remove('modal--show');
    };

    if (!outsideFeedback) {
        feedback.classList.remove('modal--show');
    };

});


asideDb.forEach(button => {
    button.addEventListener('click', function (eventAside) {
        eventAside._isClickAside;
        aside.classList.toggle('aside--show');
    })
});

ordercallDb.forEach(button => {
    button.addEventListener('click', function (eventOc) {
        eventOc._isClickOc;
        ordercall.classList.toggle('modal--show');
        
        if(ordercall.classList.contains('modal--show')) {
            feedback.classList.remove('modal--show');
            aside.classList.remove('aside--show');
        };
        
    })
});

feedbackDb.forEach(button => {
    button.addEventListener('click', function (eventFb) {
        eventFb._isClickFb;
        feedback.classList.toggle('modal--show');

        if(feedback.classList.contains('modal--show')) {
            ordercall.classList.remove('modal--show');
            aside.classList.remove('aside--show');
        };

        
    })
});


asideDisn.addEventListener('click', function () {
    aside.classList.remove('aside--show');
});

ordercallDisn.addEventListener('click', function () {
    ordercall.classList.remove('modal--show');
});

feedbackDisn.addEventListener('click', function () {
    feedback.classList.remove('modal--show');
});