var signup = document.getElementById('signup');

signup.addEventListener('submit',function(p){
    p.preventDefault();
    if (p.target.fname.value != '' && p.target.password.value != ''&& p.target.lname.value && p.target.username.value && p.target.dispatchEvent.value
        && p.target.email.value !=''&& p.target.phone.value !=''&& p.target.confirm.value !=''){
        p.target.fname.value = '';
        p.target.lname.value = '';
        p.target.username.value = '';
        p.target.date.value = '';
        p.target.email.value = '';
        p.target.phone.value = '';
        p.target.password.value = '';
        p.target.confirm.value = '';        
        window.location.href = '/index.html';
}
});