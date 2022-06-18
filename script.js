// form validation
let formElement = document.getElementById('registration');

formElement.addEventListener('submit', function(event) {
    event.preventDefault();
    let errors = {};
    // console.log(event.target);
    let form = event.target;

    //username
    // let username = document.querySelector('[name = "username"]').value;
    let username = document.getElementById('user').value;

    if (username.length < 5 || username == "") {
        errors.username = 'Username can not be empty and  must be more then 5 characters';
    }

    //password
    // let password = document.querySelector('[name = "password"]').value;
    let password = document.getElementById('passw').value;
    let password2 = document.getElementById('passw2').value;

    if (password != password2 || password == "") {
        errors.password2 = 'Password can not be empty and Passwords do not match';
    }

    //radio 
    let gender = false;

    form.querySelectorAll('[name = "gender"]').forEach(element => {
        if (element.checked) {
            gender = true;
        }
    });
        if (!gender) {
            errors.gender = 'Please select your gender';
        }


    //chekcbox
    let agree = document.getElementById('agree').checked;
    if (!agree) {
        errors.agree = 'You must agree our terms and conditions';
    }

    form.querySelectorAll('.error-text').forEach(element => {
        element.textContent = '';
    })

    // ერორების გამჩენა ვიზუალურად ჩვენს ვებ გვერდზე
    for (let item in errors) {
        console.log(item);

        let errorSpan = document.getElementById('error_' + item);
        if (errorSpan) {
            errorSpan.textContent = errors[item];
        }

    }

    if (Object.keys(errors).length == 0) {
        form.submit();
    }
    console.log(errors);
})


// show hide password
let passwordShow = document.getElementById('showpassword');
let toggleIcon = document.getElementById('toggleIcon');

showHidePassword = () => {
    if (passwordShow.type == 'password') {
        passwordShow.setAttribute('type', 'text');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        toggleIcon.classList.remove('fa-eye-slash');
        passwordShow.setAttribute('type', 'password');
    }
}

toggleIcon.addEventListener('click', showHidePassword);



// email regex
function validation() {
    let formEmail = document.getElementById('form-wraper');
    let email = document.getElementById('myemail').value;
    let emailInput = document.getElementById('myemail');
    let spanEmail = document.getElementById('email-text');

    let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email.match(pattern)) {
        formEmail.classList.add('valid');
        formEmail.classList.remove('invalid');
        spanEmail.innerHTML = 'Your Email is Valid';
        // alert('')
        spanEmail.style.color = 'green';
        emailInput.style.borderColor = 'green';
    } else {
       
        formEmail.classList.remove('valid');
        formEmail.classList.add('invalid');
        spanEmail.innerHTML = 'Please enter valid email address';
        spanEmail.style.color = 'red';
        emailInput.style.borderColor = 'red';
    }

    if (email == '') {
        formEmail.classList.remove('valid');
        formEmail.classList.remove('invalid');
        spanEmail.innerHTML = '';
    }

}


// localstorage & sessionstorage
let counterUser = sessionStorage.getItem('counter');
let newValue;

if (!counterUser) {
    newValue = 1;
} else {
    newValue = parseInt(counterUser) + 1;
}

sessionStorage.setItem('counter',newValue);
document.getElementById('counter').textContent = sessionStorage.getItem('counter');



// cookies practice

document.getElementById('cookiesLogin').addEventListener('submit', function(event) {
    event.preventDefault();

    let checkboxCookies = document.getElementById('save');

    if (checkboxCookies.checked) {
        let usernameCookies = document.getElementById('usernamecookies').value;
        Cookies.set('usernameSave',usernameCookies);
    } else {
        Cookies.remove('usernameSave');
    }

    event.target.submit();
})

let savedUsernameCookiesValue = Cookies.get('usernameSave');

if (savedUsernameCookiesValue) {
    document.getElementById('usernamecookies').value = savedUsernameCookiesValue;
    document.getElementById('save').checked = true;
}



// this
let user = {
    name: 'giorgi',

    printName: function() {
        console.log(this.name);  
    }
}
let user2 = {
    name: 'irakli',
}
let printName2 = user.printName.bind(user);

printName2();




