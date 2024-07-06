// Define loginUser function for fetching login endpoint
async function loginUser(username, password) {
  const url = 'https://wittyma.yesulikplimits.com/';
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error(`Failed to login: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
}

// Event listener for DOMContentLoaded
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
      const data = await loginUser(username, password);

      // Check the response data for success or failure
      if (data.message === 'Logged in successfully') {
        alert(data.message);
        window.location.href = 'https://www.yesulikplimits.com/admin.html'; // Redirect to admin page on successful login
      } else {
        alert(data.error); // Display error message from server
      }
    } catch (error) {
      console.error('Login error:', error); // Log error to console
      alert('Login failed: Please check your credentials and try again.'); // Alert user about login failure
    }
  });
});
