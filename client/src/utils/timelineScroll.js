// Function to handle timeline scrolling and progress indication
function initTimelineScroll() {
  const timelineItems = document.querySelectorAll('.timeline-item');
  const progressDots = document.querySelectorAll('.timeline-progress-dot');
  
  if (!timelineItems.length || !progressDots.length) return;

  // Update active progress dot based on scroll position
  function updateProgress() {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    
    timelineItems.forEach((item, index) => {
      const itemTop = item.offsetTop;
      const itemHeight = item.offsetHeight;
      
      // Check if this item is in the viewport
      if (scrollPosition >= itemTop && scrollPosition < itemTop + itemHeight) {
        // Remove active class from all dots
        progressDots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current dot
        if (progressDots[index]) {
          progressDots[index].classList.add('active');
        }
      }
    });
  }
  
  // Scroll to timeline item when clicking on progress dot
  progressDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      if (timelineItems[index]) {
        const itemTop = timelineItems[index].offsetTop;
        
        window.scrollTo({
          top: itemTop - 100, // Offset to account for fixed header
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Add scroll event listener
  window.addEventListener('scroll', updateProgress);
  
  // Initialize on page load
  updateProgress();
}

// Function to animate timeline items on scroll
function animateTimelineOnScroll() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.timeline-content').forEach(item => {
    observer.observe(item);
  });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initTimelineScroll();
  animateTimelineOnScroll();
});

// Re-initialize when the page content updates (for Astro transitions)
document.addEventListener('astro:page-load', () => {
  initTimelineScroll();
  animateTimelineOnScroll();
});

export { initTimelineScroll, animateTimelineOnScroll };