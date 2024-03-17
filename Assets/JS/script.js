document.querySelector('.sub-menu').classList.remove('open');
document.querySelector('#hamburger-icon').addEventListener('click', function() {
    var submenu = document.querySelector('.sub-menu');
    var hamburgerIcon = document.querySelector('#hamburger-icon');
    submenu.classList.toggle('open');
    if (submenu.classList.contains('open')) {
        hamburgerIcon.classList.remove('fa-bars');
        hamburgerIcon.classList.add('fa-times');
    } else {
        hamburgerIcon.classList.remove('fa-times');
        hamburgerIcon.classList.add('fa-bars');
    }
});

window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleResize);

function handleScroll() {
  var scrollPosition = window.scrollY;
  var brownElement = document.querySelector('.brown');

  if (scrollPosition > getTriggerPoint()) {
    brownElement.style.position = 'absolute';
    brownElement.style.top = getTriggerPoint() + 'px';
    brownElement.style.left = calculateLeftPosition() + 'px';
  } else {
    // Let CSS handle fixed positioning and sticky behavior
    brownElement.style.position = '';
    brownElement.style.top = '';
    brownElement.style.left = '';
  }
}

function handleResize() {
  // Recalculate trigger point and left position on resize
  handleScroll();
}

function getTriggerPoint() {
  return 2115; // Get viewport height
}

function calculateLeftPosition() {
  // Consider using percentages or viewport width for responsive positioning
  const brownWidth = document.querySelector('.brown').offsetWidth;
  const availableSpace = document.documentElement.clientWidth - brownWidth;
  const offset = availableSpace / 2; // Center the container horizontally
  return offset + 'px';
}

