document.addEventListener('DOMContentLoaded', () => {
  // Toggle login container visibility when adminButton is clicked
  document.getElementById('adminButton').addEventListener('click', function() {    
      const loginContainer = document.getElementById('loginContainer');
      
      // Toggle display status of loginContainer
      if (loginContainer.style.display === 'none' || loginContainer.style.display === '') {
          loginContainer.style.display = 'block';
      } else {
          loginContainer.style.display = 'none';
      }
  });

  // Handle form submission for loginForm
  document.getElementById('loginForm').addEventListener('submit', async function(e) {
      e.preventDefault();

      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value.trim();

      if (username === '' || password === '') {
          alert('Username and password are required.');
          return;
      }

      try {
          const response = await fetch('/login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ username, password }),
          });

          if (!response.ok) {
              throw new Error('Network response was not ok.');
          }

          const data = await response.json();

          if (response.ok) {
              alert(data.message); // Display success message or handle as needed
              window.location.href = 'https://www.yesulikplimits.com/admin.html'; // Redirect to admin page on success
          } else {
              alert(data.error); // Display error message from server
          }
      } catch (error) {
          console.error('Login error:', error);
          alert('Login failed. Please try again later.');
      }
  });
});
