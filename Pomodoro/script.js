// Get the icons and content elements
const timerIcon = document.getElementById('timer-icon');
const shortBreakIcon = document.getElementById('short-break-icon');
const longBreakIcon = document.getElementById('long-break-icon');

const timerContent = document.getElementById('timer-content');
const shortBreakContent = document.getElementById('short-break-content');
const longBreakContent = document.getElementById('long-break-content');

// Set the initial active icon and content
timerIcon.classList.add('active');
timerContent.classList.add('show');

// Add click event listeners to icons
timerIcon.addEventListener('click', function() {
  // Remove active class from all icons
  document.body.style.backgroundColor= '#DA2A47';
  timerIcon.classList.remove('active');
  shortBreakIcon.classList.remove('active');
  longBreakIcon.classList.remove('active');
  
  // Hide all content
  timerContent.classList.remove('show');
  shortBreakContent.classList.remove('show');
  longBreakContent.classList.remove('show');
  
  // Add active class to timer icon and show timer content
  timerIcon.classList.add('active');
  timerContent.classList.add('show');
});

shortBreakIcon.addEventListener('click', function() {
document.body.style.backgroundColor='#069AA8';
  // Remove active class from all icons
  timerIcon.classList.remove('active');
  shortBreakIcon.classList.remove('active');
  longBreakIcon.classList.remove('active');
  
  // Hide all content
  timerContent.classList.remove('show');
  shortBreakContent.classList.remove('show');
  longBreakContent.classList.remove('show');
  
  // Add active class to short break icon and show short break content
  shortBreakIcon.classList.add('active');
  shortBreakContent.classList.add('show');
});

longBreakIcon.addEventListener('click', function() {
  // Remove active class from all icons
  document.body.style.backgroundColor= '#014D6D';

  timerIcon.classList.remove('active');
  shortBreakIcon.classList.remove('active');
  longBreakIcon.classList.remove('active');
  
  // Hide all content
  timerContent.classList.remove('show');
  shortBreakContent.classList.remove('show');
  longBreakContent.classList.remove('show');
  
  // Add active class to long break icon and show long break content
  longBreakIcon.classList.add('active');
  longBreakContent.classList.add('show');
});
