(function() {
    
    // Global variables.
    var container = document.getElementById('content'),
        steps = container.getElementsByClassName('steps'),
        step1 = document.querySelector('#step1'),
        step2 = document.querySelector('#step2'),
        step3 = document.querySelector('#step3'),
        confirm = document.getElementById('confirm'),
        confirmBtn = confirm.querySelector('.btn');
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

        if (step3.classList.contains('is-hidden')) {
            confirm.classList.add('is-hidden');
        } else {
            confirm.classList.remove('is-hidden');
        }

        checkout.classList.add('is-hidden');
        if (checkout.classList.contains('is-hidden')) {
            complete.classList.add('is-hidden');
        } else {
            complete.classList.remove('is-hidden');
        }
    }
    window.onload = function() {
        hideAllSteps();
    }

    // Adds step based .
    function increaseStep() {
        scontinue.addEventListener('click', function() {
            
        });
    }

    // Decreases step based on .
    function decreaseStep() {
        back.addEventListener('click', function() {
            
        });
    }

    // Shows steps based on value denoted.
    function changeStep() {


        if (!step3.classList.contains('is-hidden')) {
            confirm.classList.remove('is-hidden');
        } else {
            confirm.classList.add('is-hidden');
        }
        if (!checkout.classList.contains('is-hidden')) {
            complete.classList.remove('is-hidden');
        } else {
            complete.classList.add('is-hidden');
        }
    }

    // Show checkout section if Continue to Checkout button is clicked.
    function showCheckout() {
        confirmBtn.addEventListener('click', function() {
            if (checkout.classList.contains('is-hidden')) {
                checkout.classList.remove('is-hidden');
            }
        });
    }
    showCheckout();

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