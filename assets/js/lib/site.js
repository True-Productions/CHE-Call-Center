(function(){
    
    // Global variables.
    var container = document.getElementById('content'),
        steps = container.getElementsByClassName('steps'),
        step1 = document.querySelector('#step1'),
        step2 = document.querySelector('#step2'),
        step3 = document.querySelector('#step3'),
        confirm = document.querySelector('#confirm'),
        checkout = document.querySelector('#checkout')
        complete = document.querySelector('#complete');

    var fcontinue = document.querySelector('#continue'),
        back = fcontinue.querySelector('.back'),
        scontinue = fcontinue.querySelector('.continue'),
        exit = fcontinue.querySelector('.exit');

    // Hide all steps except step 1.
    function hideAllSteps() {
        step2.classList.add('is-hidden');
        step3.classList.add('is-hidden');

        checkout.classList.add('is-hidden');
        if (checkout.classList.contains('is-hidden')) {
            complete.classList.add('is-hidden');
        }

        if (step3.classList.contains('is-hidden')) {
            confirm.classList.add('is-hidden');
        }
    }
    window.onload = function() {
        hideAllSteps();
    }

    // Show next step when click on Save & Continue button.
    function showNextStep() {
        scontinue.addEventListener('click', function() {
            for (var i = 0; i < steps.length - 1; i++) {
                if (steps[i].classList.contains('is-hidden')) {
                    steps[i].classList.remove('is-hidden');
                    steps[i + 1].classList.remove('is-hidden');
                }
            }

            if (!checkout.classList.contains('is-hidden')) {
                complete.classList.remove('is-hidden');
            }
    
            if (!step3.classList.contains('is-hidden')) {
                confirm.classList.remove('is-hidden');
            }
        });
    }
    showNextStep();

    // Goes back to previous step and hides current step open.
    function goBackStep() {
        back.addEventListener('click', function() {
            for (var i = 0; i < steps.length - 1; i++) {
                if (!steps[i].classList.contains('is-hidden')) {
                    steps[i].classList.add('is-hidden');
                    steps[i + 1].classList.add('is-hidden');
                }
            }

            if (checkout.classList.contains('is-hidden')) {
                complete.classList.add('is-hidden');
            }
    
            if (step3.classList.contains('is-hidden')) {
                confirm.classList.add('is-hidden');
            }
        });
    }
    goBackStep();

    // Save info saved in input fields and exit the screen.
    function saveExit() {
        exit.onclick = function() {
            alert('Do you want to exit?');
        }
    }
    saveExit();

    // Adds a passenger in step 1.
    function addPassenger() {

    }

})();