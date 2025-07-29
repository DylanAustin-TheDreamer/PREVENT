document.getElementById('subscribeForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from actually submitting
    
    // Check if email is valid
    const emailInput = document.getElementById('email');
    if (emailInput.checkValidity()) {
        // Show the modal
        const modal = new bootstrap.Modal(document.getElementById('subscribeModal'));
        modal.show();
        emailInput.value = '';
    }
});