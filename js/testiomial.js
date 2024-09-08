
            function handleForm(event) {
                event.preventDefault(); // Prevent the default form submission
    
                // Get the form data
                const name = document.querySelector('input[name="name"]').value;
                const email = document.querySelector('input[name="email"]').value;
                const company = document.querySelector('input[name="company"]').value;
                const testimonial = document.querySelector('textarea[name="testimonial"]').value;
    
                // Construct WhatsApp URL
                const whatsappNumber = '2348109651773'; // Replace with your WhatsApp number
                const whatsappMessage = encodeURIComponent(`
Hi, I am ${name}. 
Email: ${email}. 
Company ${company}. 
Testimony: 
${testimonial}`);
    
                // Redirect to WhatsApp
                window.location.href = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
            }
