// scripts/script.js

document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    const loginIDInput = document.getElementById('loginID');
    const passwordInput = document.getElementById('Password');

    loginBtn.addEventListener('click', () => {
        const loginID = loginIDInput.value.trim();
        const password = passwordInput.value.trim();

        // Simple form validation
        if (!loginID || !password) {
            alert('Please enter both Login ID and Password.');
            return;
        }

        // Dummy login logic — replace this with real authentication
        if (loginID === loginID && password === password) {
            alert('Login successful!');
            // Redirect to course list or dashboard
            window.location.href = 'index.html';
        } else {
            alert('Invalid login credentials. Please try again.');
        }
    });

    cancelBtn.addEventListener('click', () => {
        loginIDInput.value = '';
        passwordInput.value = '';
    });
});
