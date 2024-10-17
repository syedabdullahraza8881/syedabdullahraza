document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Basic client-side validation (can be extended as needed)
        if (name === "" || email === "" || message === "") {
            formMessage.textContent = "All fields are required.";
            formMessage.style.color = "red";
            return;
        }

        // Simulate form submission (replace this with actual submission logic)
        formMessage.textContent = "Thank you, " + name + ". Your message has been sent.";
        formMessage.style.color = "green";

        // Clear form fields after submission
        contactForm.reset();
    });
});


