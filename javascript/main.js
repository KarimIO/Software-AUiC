function returnToLogin() {
    $("#registerForm").stop().slideDown(200);
    $("#forgotForm").stop().slideUp(200);
}

function forgotPassword() {
    $("#registerForm").stop().slideUp(200);
    $("#forgotForm").stop().slideDown(200);
}

function recoverRequest() {
    $("#registerForm").stop().slideDown(200);
    $("#forgotForm").stop().slideUp(200);
    $("#recoverRequest").stop().fadeIn(200);
}