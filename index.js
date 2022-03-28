let pwCheck = function() {
if (document.getElementById('password').value !== document.getElementById('password_confirm').value) {
    document.getElementById('password').classList.add('error');
    document.getElementById('password_confirm').classList.add('error');
} else {
    document.getElementById('password').classList.remove('error');
    document.getElementById('password_confirm').classList.remove('error');
}
}