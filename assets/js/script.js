document.getElementById('subscribeForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from actually submitting
    
    // Check if email is valid
    const emailInput = document.getElementById('email');
    if (emailInput.checkValidity()) {
        // Show the modal
        const modal = new bootstrap.Modal(document.getElementById('subscribeModal'));
        modal.show();
    }
    if(modal.show()){
        emailInput.value = ''; // Clear the input field after showing the modal

        //this little bit of code was actually my own theory considering I haven't learned JS yet.
        //Then co-pilot suggested .value = '' with a comment saying "Clear the input field after showing the modal"
        //I understood that little bit of code.
    }
});