var login = document.getElementById('login');
var wrongUsername = document.getElementById('wrong-name');
var wrongPassword = document.getElementById('wrong-password');

login.addEventListener('submit', function(e){
    e.preventDefault();

    if (e.target.name.value == 'admin' && e.target.password.value == 'admin'){
        e.target.name.value = '';        
        window.location.href = '../iReport/UI/templates/allreports.html'
    } else if (e.target.name.value == 'user' && e.target.password.value == 'user'){
        e.target.name.value = '';
        window.location.href = '../iReport/UI/templates/userreports.html';
    }

    if (e.target.name.value == '' || e.target.password.value == ''){
        wrongUsername.style.display = 'block';
        wrongUsername.innerText = 'Provide Username and Password';
    } else if (e.target.name.value != 'admin' || e.target.password.value != 'admin'){
        wrongUsername.style.display = 'block';
        wrongUsername.innerText = 'wrong username or password';
    }

    if (e.target.name.value == '' || e.target.password.value == ''){
        wrongPassword.style.display = 'block';
        wrongPassword.innerText = 'Provide Username and Password';
    } else if (e.target.name.value != 'user' || e.target.password.value != 'user'){
        wrongPassword.style.display = 'block';
        wrongPassword.innerText = 'wrong username or password';
    }

   
});


var a = document.getElementById("locate");

function Location() {
    if(navigator.geolocation){
        navigator.geolocation.watchPosition(showreportPosition);
    }
    else {
        a.innerText = "geolocation not supported by browser";
    }
}

function showreportPosition(position) {
    a.innerText="Lat:" + position.coords.latitude + "Long:" + position.coords.longitude;
    alert("geolocation is set");
}

function Remove(){
    alert("report deleted");
}