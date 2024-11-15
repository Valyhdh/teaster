const mainPage = document.querySelector(".mainer-page");

    const ordercallDb = document.querySelectorAll(".ordercall-db");
    const ordercallDisb = document.querySelector(".ordercall-db");
    const ordercallDn = document.querySelectorAll(".ordercall-dn");
    const ordercallDisn = document.querySelector(".ordercall-dn");
    const ordercall = document.querySelector('.ordercall');
    const ordercallOverlay = document.querySelectorAll('.ordercall');
    

    const feedbackDb = document.querySelectorAll(".feedback-db");
    const feedbackDisb = document.querySelector(".feedback-db");
    const feedbackDn = document.querySelectorAll(".feedback-dn");
    const feedbackDisn = document.querySelector(".feedback-dn");
    const feedback = document.querySelector('.feedback');
    const feedbackOverlay = document.querySelectorAll('.feedback');


    const asideDb = document.querySelectorAll(".aside-db");
    const asideDisb = document.querySelector(".aside-db");
    const asideDn = document.querySelectorAll(".aside-dn");
    const asideDisn = document.querySelector(".aside-dn");
    const aside = document.querySelector('.aside');
    const asideOverlay = document.querySelectorAll('.aside');




    ordercallDb.forEach(button => {
        button.addEventListener('click', function (eventOc) {
            eventOc._isClickOc;
            ordercall.classList.toggle('modal--show');
        })
    });

    mainPage.addEventListener('click', function (eventOc) {
        if (eventOc._isClickOc ||
            eventOc.target.classList.contains('ordercall-db') ||
            eventOc.target.classList.contains('ordercall') ||
            eventOc.target.classList.contains('ordercall__element')
        ) return


        ordercallOverlay.forEach(ordercall => {
            ordercall.classList.remove('modal--show')
        })
    });




    feedbackDb.forEach(button => {
        button.addEventListener('click', function (eventFb) {
            eventFb._isClickFb;
            feedback.classList.toggle('modal--show');
        })
    });

    mainPage.addEventListener('click', function (eventFb) {
        if (eventFb._isClickFb ||
            eventFb.target.classList.contains('feedback-db') ||
            eventFb.target.classList.contains('feedback') ||
            eventFb.target.classList.contains('feedback__element') 
        ) return

        feedbackOverlay.forEach(feedback => {
            feedback.classList.remove('modal--show')
        })
    });



    asideDb.forEach(button => {
        button.addEventListener('click', function (eventAside) {
            eventAside._isClickAside;
            aside.classList.toggle('aside--show');
        })
    });

    mainPage.addEventListener('click', function (eventAside) {
        if (eventAside._isClickAside  ||
            eventAside.target.classList.contains('burger-db')  ||
            eventAside.target.classList.contains('aside')  ||
            eventAside.target.classList.contains('aside__element') 
        ) return
        

        asideOverlay.forEach(feedback => {
            feedback.classList.remove('aside--show')
        })
    });



    asideDisn.addEventListener('click', function () {
        aside.classList.remove('aside--show');
    });

    feedbackDisn.addEventListener('click', function () {
        feedback.classList.remove('modal--show');
    });

    ordercallDisn.addEventListener('click', function () {
        ordercall.classList.remove('modal--show');
    });

    