const errorElement = document.getElementById('error');
const notifyBtn = document.getElementById('button');
const inputElement = document.getElementById('email');
notifyBtn.addEventListener('click', () => {
    const inputValue = document.getElementById('email').value;
    console.log("hello");
    const isValid = emailIsValid(inputValue);
    if(!isValid) {
        errorElement.style.display = "block";
        inputElement.classList.toggle('invalid');
    } else {
        errorElement.style.display = "none";
        inputElement.classList.toggle('invalid')
    }
})


function emailIsValid(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (emailRegex.test(email)) {
        return true; 
    } else {
        return false; 
    }
}