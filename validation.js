const inputs = document.querySelectorAll('input');

// regex patterns
const patterns = {
        telephone: '/^\d{11}$/',
        username: '/^[a-z]{5, 12}$/i',
        email: '//',
        slug: '//',
        url: '//',
        password: '//'
};

// validation function
function validate(field, regex){
    var valid = regex.test(field.value);
    var hasValidClass = field.classList.contains('valid');
    if(valid){
        if(!hasValidClass){
            field.classList.add('valid');
        }
    } else {
        if(hasValidClass)){
            field.classList.remove('valid');
        }
    }
}

// attach keyup events to inputs
inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
            validate(e.target, patterns[e.target.attr('name')]);
    });
});
