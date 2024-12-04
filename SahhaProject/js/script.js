// JavaScript for Contact Form Validation
document.addEventListener("DOMContentLoaded", function () {
    


    // Add event listener 

    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default 



        // Get  values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Clear previous messages
        formMessage.textContent = "";
        formMessage.style.color = "red";

        if (!name || !email || !message) {
            formMessage.textContent = "Please fill in all fields.";
            return;
        }

        // Validate email 
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            formMessage.textContent = "Please enter a valid email address.";
            return;
        }

        formMessage.style.color = "green";
        formMessage.textContent = "Form submitted successfully!";
        contactForm.reset(); // Optionally clear the form fields
    });
});
