document.querySelector('#submit').addEventListener('click', function(e) {
    let name = document.querySelector('#name').value;
    let age = document.querySelector('#age').value;
    let work = document.querySelector('#work').value;
    if(name === '' || age === '' || work === '') {
        alert('Please fill in all fields');
        return;
    }else {
        if(isNaN(age)) {
            alert('Please enter number value for age');
            return;
        }
        if(!isNaN(name) || !isNaN(work)) {
            alert('Please enter a string value for name and work');
            return;
        }
        console.log(`name: ${name}, age: ${age}, work: ${work}`);
        if(age >= 18) {
            alert('Registration Completed');
        }else {
            alert('You are under age');
        }
    }
});
