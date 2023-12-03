document.addEventListener("DOMContentLoaded", function() {
    // Product Inquiry Form
    const productInquiryForm = document.getElementById("productInquiryForm");
    productInquiryForm.addEventListener("submit", function(event) {
        event.preventDefault();
        handleProductInquiry();
    });

    // Career Inquiry Form
    const careerInquiryForm = document.getElementById("careerInquiryForm");
    careerInquiryForm.addEventListener("submit", function(event) {
        event.preventDefault();
        handleCareerInquiry();
    });

    function handleProductInquiry() {
        const productName = document.getElementById("productName").value;
        const quantity = document.getElementById("quantity").value;
        const message = document.getElementById("message").value;

        // You can perform additional validation here

        // For now, let's log the data to the console
        console.log("Product Inquiry Submitted");
        console.log("Product Name:", productName);
        console.log("Quantity:", quantity);
        console.log("Message:", message);

        // You may want to send this data to the server for further processing
    }

    function handleCareerInquiry() {
        const fullName = document.getElementById("fullName").value;
        const email = document.getElementById("email").value;
        const resume = document.getElementById("resume").value; // This will contain the file name, not the file itself
        const coverLetter = document.getElementById("coverLetter").value;

        // You can perform additional validation here

        // For now, let's log the data to the console
        console.log("Career Inquiry Submitted");
        console.log("Full Name:", fullName);
        console.log("Email:", email);
        console.log("Resume:", resume);
        console.log("Cover Letter:", coverLetter);

        // You may want to send this data to the server for further processing
    }
});
