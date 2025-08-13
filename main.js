// Toggle dark mode
const toggleButton = document.getElementById('toggle');
toggleButton.addEventListener('click', () => {console.log('button clicked!');
 document.body.classList.toggle('dark')
})
// Scroll to top button
const scrollTopButton = document.getElementById('scroll-top');
scrollTopButton.addEventListener('click', () => {
 window.scrollTo(0, 0);
});
// Animate elements on scroll
window.addEventListener('scroll', () => {
 const elements = document.querySelectorAll('.animate');
 elements.forEach((element) => {
  const rect = element.getBoundingClientRect();
  if (rect.top < window.innerHeight) {
   element.classList.add('animated');
  }
 });
});
// Countdown timer
const countdownElement = document.getElementById('countdown');
let count = 10;
setInterval(() => {
 countdownElement.textContent = `Countdown: ${count}`;
 count--;
 if (count < 0) {
  count = 10;
 }
}, 1000);
// Responsive navigation menu
const navButton = document.getElementById('nav-button');
const navMenu = document.getElementById('nav-menu');
navButton.addEventListener('click', () => {
 navMenu.classList.toggle('active');
});
// Add HTML elements for above JavaScript
// You already have this in your HTML file, just adding here for reference
// <button id="toggle">Toggle Dark Mode</button>
// <button id="scroll-top">Scroll to Top</button>
// <div class="animate">This will animate</div>
// <p id="countdown">Countdown will display here</p>
// <button id="nav-button">Menu</button>
// <ul id="nav-menu">
//  <li><a href="#">Home</a></li>
//  <li><a href="#">About</a></li>
//  <li><a href="#">Contact</a></li>
// </ul>