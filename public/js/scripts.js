window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".step-forms");
const progressSteps = document.querySelectorAll(".progress-step");

let username = document.getElementById('username')
let position = document.getElementById('position')
let pass = document.getElementById('pass')
let pass2 = document.getElementById('pass2')
let facebook = document.getElementById('facebook')
let twitter = document.getElementById('twitter')
let linked = document.getElementById('linked')
let dribble = document.getElementById('dribble')
let dob = document.getElementById('dob')
let nid = document.getElementById('nid')
let actnum = document.getElementById('actnum')
let sid = document.getElementById('sid')


let formStepsNum = 0;

nextBtns.forEach((btn) => {
btn.addEventListener("click", () => {
formStepsNum++;
updateFormSteps();
updateProgressbar();

});
});

prevBtns.forEach((btn) => {
btn.addEventListener("click", () => {
formStepsNum--;
updateFormSteps();
updateProgressbar();

});
});

function updateFormSteps() {
formSteps.forEach((formStep) => {
formStep.classList.contains("step-forms-active") &&
formStep.classList.remove("step-forms-active");
});

formSteps[formStepsNum].classList.add("step-forms-active");
}

function updateProgressbar() {
progressSteps.forEach((progressStep, idx) => {
if (idx < formStepsNum + 1) { progressStep.classList.add("progress-step-active"); } else { progressStep.classList.remove("progress-step-active"); } }); progressSteps.forEach((progressStep, idx)=> {
    if (idx < formStepsNum) { progressStep.classList.add("progress-step-check"); } else { progressStep.classList.remove("progress-step-check"); } }); const progressActive=document.querySelectorAll(".progress-step-active"); progress.style.width=((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%" ; } document.getElementById("submit-form").addEventListener("click", function () { 
        
        let formData = {
            username: username.value,
            position: position.value,
            pass: pass.value,
            pass2: pass2.value,
            facebook: facebook.value,
            twitter: twitter.value,
            linked: linked.value,
            dribble: dribble.value,
            dob: dob.value,
            nid: nid.value,
            actnum: actnum.value,
            sid: sid.value

        }

        let xhr = new XMLHttpRequest();
        xhr.open('POST', '/');
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.onload = function(){
            if(xhr.responseText == 'success'){
                console.log('message sent successfully')
            }else{
                console.log('something went wrong')
            }
        }
        xhr.send(JSON.stringify(formData))
        console.log(JSON.stringify(formData))



        progressSteps.forEach((progressStep, idx)=> {
        if (idx <= formStepsNum) { 
            progressStep.classList.add("progress-step-check"); } 
            else { 
                progressStep.classList.remove("progress-step-check"); } }); 
                var forms=document.getElementById("forms"); forms.classList.remove("form"); 
                forms.innerHTML='<div class="welcome"><div class="content"><svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg><h2>Thanks for signup!</h2><span>We will contact you soon!</span><div></div>' ; });