// Wait for the DOM to fully load before executing the script

document.addEventListener('DOMContentLoaded', function() {
    // Cache the elements to avoid querying the DOM multiple times
    const navbar = document.getElementById("navbar");
    const myBtn = document.getElementById("myBtn");

    // Function to handle scroll events
    function scrollFunction() {
        // Check the scroll position of the document body or document element
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            // If the scroll position is greater than 20px, show the navbar and the button
            navbar.style.top = "0";
            myBtn.classList.add('visible');
            myBtn.classList.remove('hidden');
        } else {
            // If the scroll position is less than or equal to 20px, hide the navbar and the button
            navbar.style.top = "-50px";
            myBtn.classList.add('hidden');
            myBtn.classList.remove('visible');
        }
    }

    // Register the scroll function to the window's scroll event using addEventListener
    window.addEventListener('scroll', scrollFunction);

    // Function to scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    }

    // Add event listener to the button to scroll to the top when clicked
    myBtn.addEventListener('click', topFunction);
});

// --------------------------------------------------------------------------------------------------------------------------------------------
//Word auto-typing effect
document.addEventListener('DOMContentLoaded', function () {
  let options = {
    strings: ["I am an Artificial Intelligence Software Engineer.", "Welcome to my website!", "I am OPEN to any job in the tech industry.", "Enjoy your stay!"],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true,
      showCursor: false, // Disable Typed.js cursor to use custom one
        onStringTyped: function (pos, self) {
          // Adjust the margin-left of #typed-output to simulate typing
        let outputWidth = document.getElementById('typed-output').offsetWidth;
          // document.getElementById('typed-output').style.marginLeft = (outputWidth + -5) + 'px';
    }
  };
  let typed = new Typed("#typed-output", options);

  // Initialize the margin for the first time
  document.getElementById('typed-output').style.marginLeft = '0px';
});
// ------------------------------------------------------------------------------------------------------------------------------------------------------
// EmailJS integration

//---------------------------------------------------------------------------------------------------------------------------------------------------
// Email validation and form submission

let isEmailValid = false;
$(document).ready(function () {
  $('#contactForm').submit(function (event) {
      event.preventDefault(); // Prevent the form from submitting normally
      // Collect form data
      let templateParams = {
          name: $('#name').val(),
          email: $('#email').val(),
          message: $('#message').val()
      };

      function validateEmail(email) {
          // Regular expression for validating an email address
          const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          return re.test(email);
      }

      function validate() {

          if (validateEmail(templateParams.email)) {
              isEmailValid = true;
          } else {
              $('#notification').html('<div class="alert alert-success" id="invalidE">Invalid email address.</div>').fadeIn();
              setTimeout(function () {
                  $('#notification .alert').fadeOut();
              }, 3000);
          }
      }

      validate();

      /*
        Send the email using EmailJS
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
       */

      if (isEmailValid) {
          emailjs.send("OT1KsAT/phYCpbxfoPj2qQ==", "template_io7g5w4",
              {
                  to_name: "Wisdom Anyizah",
                  from_name: templateParams.name,
                  message: "Sender Email: " + templateParams.email + ":\n\n﹃ " + templateParams.message + " ﹄",
                  reply_to: templateParams.email,
              })
              .then(function (response) {
                  $('#notification').html('<div class="alert alert-success">Thank you! Your message has been sent.</div>').fadeIn();
                  // Auto hide after 3 seconds
                  setTimeout(function () {
                      $('#notification .alert').fadeOut();
                  }, 3000); // 3000 milliseconds = 3 seconds
                  $('#contactForm')[0].reset();
                  isEmailValid = false;
              }, function (error) {
                  $('#notification').html('<div class="alert alert-danger">Error! Unable to send message.</div>').fadeIn();
                  // Auto hide after 3 seconds
                  setTimeout(function () {
                      $('#notification .alert').fadeOut();
                  }, 3000); // 3000 milliseconds = 3 seconds

              });
      }
  });
});
document.addEventListener("DOMContentLoaded", function () {
    const image = document.getElementById('zoom-out');
    const caption = document.getElementById('caption');
    
    console.log('Image element:', image);   // Check if image element is found
    console.log('Caption element:', caption); // Check if caption element is found

    // Add event listeners only if elements are found
    if (image && caption) {
        console.log('Both elements found, adding event listeners.');
        image.addEventListener('mouseover', function () {
            console.log('Mouse over image');
            caption.style.visibility = 'visible';
        });

        image.addEventListener('mouseout', function () {
            console.log('Mouse out of image');
            caption.style.visibility = 'hidden';
        });
    } else {
        console.error("One or both elements not found.");
    }
});


// ------------------------------------------------------------------------------------------------------------------------------------------------------
// Word counter and contrastant checker (500 as maximum word count)

document.addEventListener('DOMContentLoaded', function () {
  const textarea = document.getElementById('message');
  const form = document.getElementById('contactForm');
  const charCount = document.getElementById('char-count');
  const wordCount = document.getElementById('word-count');
  const maxWords = 500;

  function updateCounts() {
      const text = textarea.value;
      const charCountNum = text.length;
      const words = text.trim().split(/\s+/).filter(word => word.length > 0);
      const wordCountNum = words.length;

      charCount.textContent = `${charCountNum} characters`;
      wordCount.textContent = `${wordCountNum}/${maxWords} words`;

      if (wordCountNum > maxWords) {
          wordCount.style.color = 'red';
      } else {
          wordCount.style.color = '';
      }
  }

  textarea.addEventListener('input', function () {
      const words = this.value.trim().split(/\s+/).filter(word => word.length > 0);
      if (words.length > maxWords) {
          // Limit the words to the maximum allowed
          this.value = words.slice(0, maxWords).join(' ') + ' ';
      }
      if (this.value === '') {
          this.rows = 3; // Reset to 3 rows if textarea is empty
          this.style.height = 'auto';
      } else {
          this.style.height = 'auto'; // Reset the height
          this.style.height = this.scrollHeight + 'px'; // Set the height to the scrollHeight
      }
      updateCounts(); // Update character and word count
  });

  // Initial adjustment for any pre-filled content
  if (textarea.value === '') {
      textarea.rows = 3;
  } else {
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
  }
  updateCounts(); // Initial character and word count

  form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the default form submission

      // Simulate successful message sending
      
      setTimeout(() => {
          // Clear the textarea
          if(isEmailValid){
          textarea.value = '';
          
          // Reset the height to match 3 rows
          textarea.style.height = 'auto';
          textarea.rows = 3;
          }
          // Update character and word count
          updateCounts();

          // Optionally, refocus the textarea
          textarea.focus();
      }, 500); // Simulate a delay for message sending
    
  });
});
// ------------------------------------------------------------------------------------------------------------------------------------------------------
// Admin login and redirection