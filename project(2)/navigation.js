// Event listener for the "Sign up here" link on the login page
document.getElementById('goToSignup')?.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'Signup.html'; // Redirect to signup page
});

// Event listener for the "Log in here" link on the signup page
document.getElementById('goToLogin')?.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'Login.html'; // Redirect to login page
});


// Event listener for the "Login" button on the login page
document.getElementById('loginBtn')?.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'homepage.html'; // Redirect to homepage
});



// Event listener for the "Homepage" link on the homepage
document.getElementById('goToHome')?.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'Home.html'; // Redirect to homepage
});

// Social media links
document.getElementById('facebookBtn')?.addEventListener('click', function() {
    window.open('https://www.facebook.com/', '_blank'); // Opens Facebook
});

document.getElementById('twitterBtn')?.addEventListener('click', function() {
    window.open('https://www.twitter.com/', '_blank'); // Opens Twitter
});

document.getElementById('telegramBtn')?.addEventListener('click', function() {
    window.open('https://web.telegram.org/', '_blank'); // Opens Telegram
});
