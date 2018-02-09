const inputs = document.querySelectorAll('input');

// regex patterns
const patterns = {
        telephone: /^\d{11}$/,
        slug: /^[a-z0-9-]+$/,
        username: /^[a-z]{5,12}$/i,
        email: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,12})$/,
        password: /^[a-z0-9_-]{8,20}$/
};

// validation function
function validate(field, regex){
    var valid = regex.test(field.value.trim());
    console.log(field.value);
    console.log(regex);
    var hasValidClass = field.classList.contains('valid');
    if(valid){
        if(!hasValidClass){
            field.classList.add('valid');
        }
    } else {
        if(hasValidClass){
            field.classList.remove('valid');
        }
    }
}

// attach keyup events to inputs
inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
            //console.log(patterns[e.target.attributes.name.value]);
            validate(e.target, patterns[e.target.attributes.name.value]);
    });
});
