const button = document.getElementById('login-btn');
const show = document.getElementById('login-register');
const container = document.getElementById('container');
const register = document.getElementById('register');
const login = document.getElementById('login');
const close2 = document.getElementById('close');
const close1 = document.getElementById('close1');
const voteNow = document.getElementById('voteNow');



voteNow.addEventListener('click',(e)=>{

    show.classList.toggle("active");
});
close2.addEventListener('click',(e)=>{

    show.classList.toggle("active");
});
close1.addEventListener('click',(e)=>{

    show.classList.toggle("active");
});
button.addEventListener('click',(e)=>{

    show.classList.toggle("active");
});

register.addEventListener('click',(e)=>{

    container.classList.toggle("active");
});
login.addEventListener('click',(e)=>{

    container.classList.toggle("active");
});

const form = document.getElementById('form');
const name1 = document.getElementById('name');
const username = document.getElementById('username');
const email = document.getElementById('email');
const pNum = document.getElementById('pNum');
const password = document.getElementById('password');
const confirmPass = document.getElementById('confirmPass');






form.addEventListener('submit',(e)=>{
    e.preventDefault();

    checkUserInputs();
});

function checkUserInputs(){

    const nameValue = name1.value.trim(); 
    const usernameValue = username.value.trim(); 
    const emailValue = email.value.trim(); 
    const pnumValue = pNum.value.trim(); 
    const passValue = password.value.trim(); 
    const confpassValue = confirmPass.value.trim(); 

    if(nameValue ===''){
        setErrorfor(name1, 'Name Cannot be Empty');
        return false;
    }
    else{
       setSuccessfor(name1);
    }

    if(usernameValue ===''){
        setErrorfor(username, 'Username Cannot be Empty');
        return false;
    }
    else{
       setSuccessfor(username);
    }

    if(emailValue ===''){
        setErrorfor(email, 'Email Cannot be Empty');
        return false;
    }
    else if (!isEmail(emailValue)) {
		setErrorfor(email, 'Not a valid email');
        return false;
	} 
    else{
       setSuccessfor(email);
    }

    if(pnumValue ===''){
        setErrorfor(pNum, 'Phone Number Cannot be Empty');
        return false;
    }
    else{
       setSuccessfor(pNum);
    }
      
    if(passValue ===''){
        setErrorfor(password, 'Password Cannot be Empty');
        return false;
    }
    else{
       setSuccessfor(password);
    }

    if(confpassValue ===''){
        setErrorfor(confirmPass, 'Confirm your Password');
        return false;
    }
    else if(passValue !== confpassValue) {
		setErrorfor(confirmPass, 'Passwords does not match');
        return false;
    }
    else{
       setSuccessfor(confirmPass);
    }
}


function setErrorfor(input, message){
    const formControl = input.parentElement;
    const errorMessage = formControl.querySelector(".errorMessage");

    errorMessage.innerText = message;

    formControl.classList = 'regis-form-control error';
}


       
function setSuccessfor(input){
    const formControl = input.parentElement;        

    formControl.className = 'regis-form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

const ball = document.getElementById('ball');
const id = document.getElementById('id');
const section = document.getElementById('header');
const options = document.getElementById('options');
const section1 = document.getElementById('section1');
const flogo = document.getElementById('f-logo');
const body  = document.getElementById('body');
const infocompany  = document.getElementById('info-company');
const fbutton  = document.getElementById('feedback-Button');



ball.addEventListener('click',(e)=>{

    body.classList.toggle("dark");
    section.classList.toggle("dark");
    options.classList.toggle("dark");
    id.classList.toggle("dark");
    section1.classList.toggle('dark');
    flogo.classList.toggle("dark");
    voteNow.classList.toggle("dark");
    infocompany.classList.toggle("dark");
    fbutton.classList.toggle("dark");    
});