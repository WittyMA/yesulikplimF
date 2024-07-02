document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
        },
        views: {
            listDay: { buttonText: 'list day' },
            listWeek: { buttonText: 'list week' }
        },
        initialView: 'listWeek',
        navLinks: true,
        businessHours: true,
        editable: true,
        selectable: true,
        dayMaxEvents: true,
        selectMirror: true,
        nowIndicator: true,
        events: loadEvents(),
        eventClick: function(info) {
            if (isAdmin()) {
                if (confirm('Are you sure you want to delete this event?')) {
                    deleteEvent(info.event);
                }
            } else {
                alert('You do not have permission to delete this event.');
            }
        },
        select: function(arg) {
            let title = prompt('Event Title:');
            if (title) {
                calendar.addEvent({
                    title: title,
                    start: arg.start,
                    end: arg.end,
                    allDay: arg.allDay
                });
                saveEvents(calendar.getEvents());
            }
            calendar.unselect();
        }
    });

    calendar.render();

    // Function to get current time
    function displayTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US');
        document.getElementById('time').innerHTML = `<p>${timeString}</p>`;
    }

    // Call the function initially to display time
    displayTime();

    // Update time every second
    setInterval(displayTime, 1000);

    // Handle scroll behavior to show/hide calendar and time
    let lastScrollTop = 0;
    const threshold = 5; // Adjust as needed

    window.addEventListener("scroll", function() {
        let st = window.scrollY || document.documentElement.scrollTop;

        if (Math.abs(lastScrollTop - st) <= threshold)
            return;

        if (st > lastScrollTop) {
            // Scroll down
            document.getElementById('calendar').classList.add('hidden');
            document.getElementById('time').classList.add('hidden');
        } else {
            // Scroll up
            document.getElementById('calendar').classList.remove('hidden');
            document.getElementById('time').classList.remove('hidden');
        }

        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }, false);

    // Event form submission handling
    document.addEventListener('DOMContentLoaded', function() {
        var eventForm = document.getElementById('eventForm');
        if (eventForm) {
            eventForm.addEventListener('submit', function(e) {
                e.preventDefault();
                // Handle form submission logic
                var title = document.getElementById('title').value;
                var start = document.getElementById('start').value;
                var end = document.getElementById('end').value;
                var allDay = document.getElementById('allDay').checked;
    
                // Example: Adding event to calendar or processing form data
                console.log('Event Form Submitted:', title, start, end, allDay);
    
                // Clear the form
                eventForm.reset();
            });
        } else {
            console.error('eventForm not found');
        }
    
        // Other script logic...
    });
    
    // Function to save events to localStorage
    function saveEvents(events) {
        const eventsArray = events.map(event => ({
            title: event.title,
            start: event.start.toISOString(),
            end: event.end ? event.end.toISOString() : null,
            allDay: event.allDay
        }));
        localStorage.setItem('calendarEvents', JSON.stringify(eventsArray));
    }

    // Function to load events from localStorage
    function loadEvents() {
        var events = localStorage.getItem('calendarEvents');
        if (events) {
            events = JSON.parse(events);
            return events.map(event => ({
                title: event.title,
                start: event.start,
                end: event.end,
                allDay: event.allDay
            }));
        }
        return [];
    }

    // Function to check if the user is an admin
    function isAdmin() {
        // Replace with your actual admin check logic
        return localStorage.getItem('userRole') === 'admin';
    }

    // Function to delete event
    function deleteEvent(event) {
        if (!isAdmin()) {
            alert('You do not have permission to delete this event.');
            return;
        }

        event.remove();
        saveEvents(calendar.getEvents());
    }

});

// Handle logout functionality
document.addEventListener('DOMContentLoaded', function() {
    const logoutButton = document.getElementById('logoutButton'); // Get the logout button element
  
    if (logoutButton) { // Check if the logout button exists
      logoutButton.addEventListener('click', async function() {
        try {
          const response = await fetch('https://yesulikplimb.wittymayits.workers.dev/logout', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json' // Set content type to JSON
            }
          });
  
          const data = await response.json(); // Parse response as JSON
  
          if (data.message === 'Logged out successfully') { // Check if logout was successful
            alert('You have been logged out.'); // Alert user of successful logout
            localStorage.removeItem('userRole'); // Remove user role from local storage
            window.location.href = '/'; // Redirect user to homepage
          } else {
            alert('Logout failed. Please try again later.'); // Alert user of logout failure
          }
        } catch (error) {
          console.error('Logout error:', error); // Log error to console
          alert('Logout failed. Please try again later.'); // Alert user of logout failure
        }
      });
    } else {
      console.error('Logout button not found'); // Log error if logout button is not found
    }
  });
  