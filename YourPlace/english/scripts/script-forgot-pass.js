document.getElementById('forgot-pass').addEventListener('click', function(event) {
    event.preventDefault();
    
    var newPassword = document.getElementById('new-password').value;
    var repeatPassword = document.getElementById('repeat-password').value;
    
    if (newPassword === repeatPassword) {
        window.location.href = 'login.html';
    } else {
        alert("Passwords do not match. Please re-enter.");
        document.getElementById('new-password').value = '';
        document.getElementById('repeat-password').value = '';
    }
});
