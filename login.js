document.addEventListener('DOMContentLoaded', () => {
  // Toggle login container visibility when adminButton is clicked
  document.getElementById('adminButton').addEventListener('click', function() {
    var loginContainer = document.getElementById('loginContainer');
    
    // Check current display status of loginContainer
    if (loginContainer.style.display === 'none' || loginContainer.style.display === '') {
      loginContainer.style.display = 'block'; // If hidden or not set, show it
    } else {
      loginContainer.style.display = 'none'; // If visible, hide it
    }
  });

  // Handle form submission for loginForm
  document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault(); // Prevent default form submission

    var username = document.getElementById('username').value.trim(); // Get and trim username value
    var password = document.getElementById('password').value.trim(); // Get and trim password value

    if (username === '' || password === '') {
      alert('Username and password are required.'); // Alert if username or password is empty
      return;
    }

    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Set content type to JSON
        },
        body: JSON.stringify({ username, password }), // Send username and password in request body
        credentials: 'include', // Include credentials in the request
      });

      const data = await response.json(); // Parse response as JSON

      if (!response.ok) {
        alert(data.error || 'Login failed. Please try again later.'); // Alert error message if response is not ok
        return;
      }

      alert(data.message); // Alert success message
      window.location.href = 'https://www.yesulikplimits.com/admin.html'; // Redirect to admin page on success
    } catch (error) {
      console.error('Login error:', error); // Log error to console
      alert('Login failed. Please try again later.'); // Alert generic error message
    }
  });
});
