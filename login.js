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
      const response = await fetch('https://yesulikplimb.wwanyizah.workers.dev/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
    
      if (!response.ok) {
        const text = await response.text();
        console.log('Response status:', response.status);
        console.log('Response text:', text);
        alert(`Login failed: ${text}`);
        return;
      }
    
      const data = await response.json();
      alert(data.message);
      window.location.href = 'https://www.yesulikplimits.com/admin.html';
    } catch (error) {
      console.error('Login error:', error); // Log error to console
      alert('Network error: Unable to reach the server. Please check your connection and try again later.');
    }
  });
});
