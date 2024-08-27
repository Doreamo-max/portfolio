// script.js

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const form = event.target;
    const formData = new FormData(form);
    
    // Example: Simple client-side validation
    let valid = true;
    formData.forEach((value, key) => {
        if (!value) {
            valid = false;
            document.getElementById('response-message').textContent = 'Please fill out all fields.';
        }
    });

    if (!valid) return;

    // Simulate form submission
    document.getElementById('response-message').textContent = 'Thank you for your message!';

    // Uncomment the following lines if you have server-side processing
    /*
    fetch('your-server-endpoint', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('response-message').textContent = 'Thank you for your message!';
    })
    .catch(error => {
        document.getElementById('response-message').textContent = 'Something went wrong. Please try again.';
    });
    */
});
