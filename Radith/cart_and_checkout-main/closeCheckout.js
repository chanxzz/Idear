document.addEventListener('DOMContentLoaded', function() {
  // Listen for click event on the open-popup button
  document.getElementById('checkout-btn').addEventListener('click', function() {
      // Check if all required fields are filled
      const form = document.getElementById('checkout-form');
      if (form.checkValidity()) {
          // Hide the checkout box
          document.querySelector('.checkoutLayout').style.display = 'none';
          
          // Show the success popup
          document.querySelector('.popup').style.display = 'block';
      } else {
          // Display message to fill all fields
          alert('Please fill in all required fields.');
      }
  });

  // Listen for click event on the close-btn button of the success popup
  document.querySelector('.popup .close-btn').addEventListener('click', function() {
      // Hide the success popup
      document.querySelector('.popup').style.display = 'none';
      
      // Reset the form
      document.getElementById('checkout-form').reset();
      
      // Show the checkout box again
      document.querySelector('.checkoutLayout').style.display = 'block';
  });
});
