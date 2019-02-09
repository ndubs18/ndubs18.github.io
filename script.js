const aboutLink = document.getElementById('modallinkWork');
const workLinkTwo = document.getElementById('modallinkAbout');
const aboutLinkTwo = document.getElementById('aboutLinkTwo');

const hamWork = document.getElementById('hamworkLink');
const hamAbout = document.getElementById('aboutworkLink');

const modalWork = document.getElementById('modal-workExperience');
const modalEd = document.getElementById('modal-aboutMe');
const modalEdExit = document.getElementById('btnExit1');
const modalWorkExit = document.getElementById('btnExit2');

const modal = document.getElementsByClassName('modal');

//Link clicks and the modal opens


modallinkWork.addEventListener('click', () => modalWork.style.display = 'block');
modallinkAbout.addEventListener('click', () => modalEd.style.display = 'block');


hamWork.addEventListener('click', () => modalWork.style.display = 'block');
hamAbout.addEventListener('click', () => modalEd.style.display = 'block');

worklinkTwo.addEventListener('click', () => modalWork.style.display = 'block');
aboutlinkTwo.addEventListener('click', () => modalEd.style.display = 'block');

modalWorkExit.addEventListener('click', () => modalWork.style.display = 'none');
modalEdExit.addEventListener('click', () => modalEd.style.display = 'none');

//Event delegation style
window.addEventListener('click', e => {
    if(e.target == modalWork) { //make sure to use == instead of = !important
        modalWork.style.display = 'none';
    }

    if(e.target == modalEd) {
        modalEd.style.display = 'none';
    }
})



$(window).scroll(function() {
    if ($(document).scrollTop() > 685 && $(window).width() > 600 ) {
        $('.header-links').css("display", "none");
        $('.header__top').css("display", "flex", "position", "fixed" );
    }

    else if ($(window).width() < 600){

        $('.header-links').css("display", "none");
        $('.header__top').css("display", "none");

    }

    else {

        $('.header-links').css("display", "flex");
        $('.header__top').css("display", "none");

    }



});






// var controller = new ScrollMagic.Controller();

// create a scene
// new ScrollMagic.Scene({
//         duration: 100,    // the scene should last for a scroll distance of 100px
//         offset: 50    // start this scene after scrolling for 50px
//     })
//     .setPin("#my-sticky-element") // pins the element for the the scene's duration
//     .addTo(controller); // assign the scene to the controller




