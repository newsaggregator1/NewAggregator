function check() {
    const pass = document.getElementById('pass');
    const mail = document.getElementById('email');
    if (pass.value == 0 || mail.value == 0) {
        document.getElementById("error").innerHTML = "please ensure that all fields filled in with data!";
        return false;
    }
}
function check_1() {
    const mail_1  = document.getElementById('email1');
    if ( mail_1.value ==0 ) {
        document.getElementById("error1").innerHTML = "please ensure that all fields filled in with data!";
        return false;
    }
}
function showpass() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
