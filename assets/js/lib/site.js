var steps = document.querySelectorAll('.steps'),
    step1 = document.querySelector('#step1'),
    step2 = document.querySelector('#step2'),
    step3 = document.querySelector('#step3'),
    step4 = document.querySelector('#step4'),
    confirm = document.querySelector('#confirm'),
    checkout = document.querySelector('#checkout')
    complete = document.querySelector('#complete');

var fcontinue = document.querySelector('#continue'),
    next = fcontinue.querySelector('.next'),
    back = fcontinue.querySelector('.back'),
    scontinue = fcontinue.querySelector('.continue'),
    exit = fcontinue.querySelector('.exit');

function hideAllSteps() {
    steps.forEach(el => el.classList.add('is-hidden'));

    if (step1.classList.contains('is-hidden')) {
        step1.classList.toggle('is-hidden');
    }

    checkout.classList.add('is-hidden');
    complete.classList.add('is-hidden');

    if (step4.classList.contains('is-hidden')) {
        confirm.classList.toggle('is-hidden');
    }
}
window.onload = function() {
    //hideAllSteps();
}

function showNextStep() {
    next.onclick = function() {
        step2.classList.toggle('is-hidden');
    }
}
//showNextStep();