gsap.registerPlugin(ScrollTrigger);

let speed = 100;
let height = document.querySelector("svg").getBBox().height;

gsap.set("#h2-1", { opacity: 0 });
gsap.set("#bg_grad", { attr: { cy: "-50" } });

const mm = gsap.matchMedia();
mm.add("(max-width: 1922px)", () => {
    gsap.set(["#cloudStart-L", "#cloudStart-R"], { x: 10, opacity: 1 });
});

// Add performance optimization
ScrollTrigger.config({ limitCallbacks: true });
gsap.config({ nullTargetWarn: false });

/*  SCENE 1 */
let scene1 = gsap.timeline();
ScrollTrigger.create({
    animation: scene1,
    trigger: ".scrollElement",
    start: "top top",
    end: "45% 100%",
    scrub: 3
});

// hills animation
scene1.to("#h1-1", { y: 3 * speed, x: 1 * speed, scale: 0.9, ease: "power1.in" }, 0);
scene1.to("#h1-2", { y: 2.6 * speed, x: -0.6 * speed, ease: "power1.in" }, 0);
scene1.to("#h1-3", { y: 1.7 * speed, x: 1.2 * speed }, 0.03);
scene1.to("#h1-4", { y: 3 * speed, x: 1 * speed }, 0.03);
scene1.to("#h1-5", { y: 2 * speed, x: 1 * speed }, 0.03);
scene1.to("#h1-6", { y: 2.3 * speed, x: -2.5 * speed }, 0);
scene1.to("#h1-7", { y: 5 * speed, x: 1.6 * speed }, 0);
scene1.to("#h1-8", { y: 3.5 * speed, x: 0.2 * speed }, 0);
scene1.to("#h1-9", { y: 3.5 * speed, x: -0.2 * speed }, 0);
scene1.to("#cloudsBig-L", { y: 4.5 * speed, x: -0.2 * speed }, 0);
scene1.to("#cloudsBig-R", { y: 4.5 * speed, x: -0.2 * speed }, 0);
scene1.to("#cloudStart-L", { x: -300 }, 0);
scene1.to("#cloudStart-R", { x: 300 }, 0);

//animate text
scene1.to("#info", { y: 8 * speed }, 0);

/*   Bird   */
gsap.fromTo(
    "#bird",
    { opacity: 1 },
    {
        y: -250,
        x: 800,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".scrollElement",
            start: "15% top",
            end: "60% 100%",
            scrub: 4,
            onEnter: function () {
                gsap.to("#bird", { scaleX: 1, rotation: 0 });
            },
            onLeave: function () {
                gsap.to("#bird", { scaleX: -1, rotation: -15 });
            }
        }
    }
);

/* Clouds  */
let clouds = gsap.timeline();
ScrollTrigger.create({
    animation: clouds,
    trigger: ".scrollElement",
    start: "top top",
    end: "70% 100%",
    scrub: 1
});

clouds.to("#cloud1", { x: 500 }, 0);
clouds.to("#cloud2", { x: 1000 }, 0);
clouds.to("#cloud3", { x: -1000 }, 0);
clouds.to("#cloud4", { x: -700, y: 25 }, 0);

/* Sun motion Animation  */
let sun = gsap.timeline();
ScrollTrigger.create({
    animation: sun,
    trigger: ".scrollElement",
    start: "1% top",
    end: "2150 100%",
    scrub: 2
});

//sun motion
sun.fromTo("#bg_grad", { attr: { cy: "-50" } }, { attr: { cy: "330" } }, 0);
//bg change
sun.to("#bg_grad stop:nth-child(2)", { attr: { offset: "0.15" } }, 0);
sun.to("#bg_grad stop:nth-child(3)", { attr: { offset: "0.18" } }, 0);
sun.to("#bg_grad stop:nth-child(4)", { attr: { offset: "0.25" } }, 0);
sun.to("#bg_grad stop:nth-child(5)", { attr: { offset: "0.46" } }, 0);
sun.to("#bg_grad stop:nth-child(6)", { attr: { "stop-color": "#FF9171" } }, 0);

/*   SCENE 2  */
let scene2 = gsap.timeline();
ScrollTrigger.create({
    animation: scene2,
    trigger: ".scrollElement",
    start: "15% top",
    end: "40% 100%",
    scrub: 3
});

scene2.fromTo("#h2-1", { y: 500, opacity: 0 }, { y: 0, opacity: 1 }, 0);
scene2.fromTo("#h2-2", { y: 500 }, { y: 0 }, 0.1);
scene2.fromTo("#h2-3", { y: 700 }, { y: 0 }, 0.1);
scene2.fromTo("#h2-4", { y: 700 }, { y: 0 }, 0.2);
scene2.fromTo("#h2-5", { y: 800 }, { y: 0 }, 0.3);
scene2.fromTo("#h2-6", { y: 900 }, { y: 0 }, 0.3);

/* Bats */
gsap.set("#bats", { transformOrigin: "50% 50%" });
gsap.fromTo(
    "#bats",
    { opacity: 1, y: 400, scale: 0 },
    {
        y: 20,
        scale: 0.8,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".scrollElement",
            start: "40% top",
            end: "70% 100%",
            scrub: 3,
            onEnter: function () {
                gsap.utils.toArray("#bats path").forEach((item, i) => {
                    gsap.to(item, {
                        scaleX: 0.5,
                        yoyo: true,
                        repeat: 9,
                        transformOrigin: "50% 50%",
                        duration: 0.15,
                        delay: 0.7 + i / 10
                    });
                });
                gsap.set("#bats", { opacity: 1 });
            },
            onLeave: function () {
                //gsap.to("#bats", { opacity: 0, delay: 2 });
            }
        }
    }
);

/* Sun increase */
let sun2 = gsap.timeline();
ScrollTrigger.create({
    animation: sun2,
    trigger: ".scrollElement",
    start: "2000 top",
    end: "5000 100%",
    scrub: 2
});

sun2.to("#sun", { attr: { offset: "1.4" } }, 0);
sun2.to("#bg_grad stop:nth-child(2)", { attr: { offset: "0.7" } }, 0);
sun2.to("#sun", { attr: { "stop-color": "#ffff00" } }, 0);
sun2.to("#lg4 stop:nth-child(1)", { attr: { "stop-color": "#623951" } }, 0);
sun2.to("#lg4 stop:nth-child(2)", { attr: { "stop-color": "#261F36" } }, 0);
sun2.to("#bg_grad stop:nth-child(6)", { attr: { "stop-color": "#45224A" } }, 0);

/* Transition (from Scene2 to Scene3) */
gsap.set("#scene3", { y: height - 40, visibility: "visible" });
let sceneTransition = gsap.timeline();
ScrollTrigger.create({
    animation: sceneTransition,
    trigger: ".scrollElement",
    start: "60% top",
    end: "bottom 100%",
    scrub: 3
});

sceneTransition.to("#h2-1", { y: -height - 100, scale: 1.5, transformOrigin: "50% 50%" }, 0);
sceneTransition.to("#bg_grad", { attr: { cy: "-80" } }, 0.0);
sceneTransition.to("#bg2", { y: 0 }, 0);

/* Scene 3 */
let scene3 = gsap.timeline();
ScrollTrigger.create({
    animation: scene3,
    trigger: ".scrollElement",
    start: "70% 50%",
    end: "bottom 100%",
    scrub: 3
});

//Hills motion
scene3.fromTo("#h3-1", { y: 300 }, { y: -550 }, 0);
scene3.fromTo("#h3-2", { y: 800 }, { y: -550 }, 0.03);
scene3.fromTo("#h3-3", { y: 600 }, { y: -550 }, 0.06);
scene3.fromTo("#h3-4", { y: 800 }, { y: -550 }, 0.09);
scene3.fromTo("#h3-5", { y: 1000 }, { y: -550 }, 0.12);

//stars
scene3.fromTo("#stars", { opacity: 0 }, { opacity: 0.5, y: -500 }, 0);

// Scroll Back text
scene3.fromTo("#text2", { opacity: 0 }, { opacity: 0.7, y: -710 }, 0.3);

//gradient value change
scene3.to("#bg2-grad", { attr: { cy: 600 } }, 0);
scene3.to("#bg2-grad", { attr: { r: 500 } }, 0);

/*   falling star   */
gsap.set("#fstar", { y: -400 });
let fstarTL = gsap.timeline();
ScrollTrigger.create({
    animation: fstarTL,
    trigger: ".scrollElement",
    start: "4200 top",
    end: "6000 bottom",
    scrub: 2,
    onEnter: function () {
        gsap.set("#fstar", { opacity: 1 });
    },
    onLeave: function () {
        gsap.set("#fstar", { opacity: 0 });
    }
});
fstarTL.to("#fstar", { x: -700, y: -250, ease: "power2.out" }, 0);

gsap.utils.toArray("#stars path").forEach((star, i) => {
  gsap.fromTo(star, 
    { opacity: 0.3 }, 
    { opacity: 1, duration: 0.3, repeat: -1, yoyo: true, delay: i * 0.2 }
  );
});


//reset scrollbar position after refresh
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

function screenToSVG(svg, x, y) {
     var pt = svg.createSVGPoint();
     pt.x = x;
     pt.y = y;
     var cursorPt = pt.matrixTransform(svg.getScreenCTM().inverse());
     return { x: Math.floor(cursorPt.x), y: Math.floor(cursorPt.y) }
}

/* Pixelated Works Popup Interaction */
document.addEventListener('DOMContentLoaded', function() {
  // Add keyframe animations dynamically
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    @keyframes scanlines {
      0% { background-position: 0 0; }
      100% { background-position: 0 6px; }
    }
    
    @keyframes crt-flicker {
      0% { opacity: 0.97; }
      5% { opacity: 0.93; }
      10% { opacity: 0.95; }
      15% { opacity: 0.94; }
      20% { opacity: 0.92; }
      25% { opacity: 0.95; }
      30% { opacity: 0.93; }
      35% { opacity: 0.95; }
      40% { opacity: 0.97; }
      45% { opacity: 0.94; }
      50% { opacity: 0.95; }
      55% { opacity: 0.95; }
      60% { opacity: 0.94; }
      65% { opacity: 0.93; }
      70% { opacity: 0.95; }
      75% { opacity: 0.93; }
      80% { opacity: 0.94; }
      85% { opacity: 0.95; }
      90% { opacity: 0.94; }
      95% { opacity: 0.92; }
      100% { opacity: 0.97; }
    }
    
    @keyframes paper-flip {
      0% { transform: rotateY(90deg) scale(0.7); opacity: 0; }
      50% { transform: rotateY(15deg) scale(1.05); opacity: 0.9; }
      100% { transform: rotateY(0) scale(1); opacity: 1; }
    }
    
    @keyframes paper-fold {
      0% { transform: rotateY(0) scale(1); opacity: 1; }
      50% { transform: rotateY(15deg) scale(0.95); opacity: 0.9; }
      100% { transform: rotateY(90deg) scale(0.7); opacity: 0; }
    }
  `;
  document.head.appendChild(styleElement);

  const worksButton = document.querySelector('.btn_works');
  const worksPopup = document.getElementById('worksPopup');
  const closeButton = document.querySelector('.window-control.close');
  let isPopupVisible = false;
  let isStickyOpen = false;

  // Preload the pixel font to prevent flickering
  if (!document.querySelector('link[href*="Press+Start+2P"]')) {
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.href = 'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap';
    preloadLink.as = 'style';
    preloadLink.onload = function() {
      this.onload = null;
      this.rel = 'stylesheet';
    };
    document.head.appendChild(preloadLink);
    
    // Fallback for browsers that don't support preload
    const styleLink = document.createElement('link');
    styleLink.rel = 'stylesheet';
    styleLink.href = 'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap';
    document.head.appendChild(styleLink);
  }

  // Position popup above button function with perfect alignment
  function positionPopup() {
    if (!worksButton) return;
    
    const buttonRect = worksButton.getBoundingClientRect();
    const popupWidth = 380;
    const viewportWidth = window.innerWidth;
    
    // Calculate position relative to button - centered on button
    let leftPosition = buttonRect.left + (buttonRect.width / 2) - (popupWidth / 2);
    // Ensure the popup doesn't overflow the left edge
    leftPosition = Math.max(leftPosition, 10);
    // Ensure the popup doesn't overflow the right edge
    leftPosition = Math.min(leftPosition, viewportWidth - popupWidth - 10);
    
    // Apply the position
    worksPopup.style.left = leftPosition + 'px';
    worksPopup.style.transform = 'scale(0.95)';
    
    // Set bottom position - perfect alignment with top of button
    const bottomOffset = window.innerHeight - buttonRect.top + 5;
    worksPopup.style.bottom = bottomOffset + 'px';
    
    // Create a subtle connection between popup and button
    if (isPopupVisible && typeof gsap !== 'undefined') {
      gsap.set('.btn_works', { boxShadow: '0 -25px 32px -15px rgba(255, 145, 113, 0.4)' });
    } else {
      gsap.set('.btn_works', { clearProps: 'boxShadow' });
    }
  }

  // Load GSAP if not already available
  if (typeof gsap === 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    script.onload = initAnimations;
    document.head.appendChild(script);
  } else {
    initAnimations();
  }
  
  function initAnimations() {
    // Initial positioning
    positionPopup();
    
    // Add subtle animations to projects when popup opens
    const projects = worksPopup.querySelectorAll('.project');
    projects.forEach((project, index) => {
      gsap.set(project, { opacity: 0, y: 20 });
    });
    
    // Update position on scroll and resize with debouncing
    let scrollTimeout, resizeTimeout;
    window.addEventListener('scroll', function() {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(positionPopup, 10);
    });
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(positionPopup, 50);
    });
    
    // Setup popup click functionality
    worksButton.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      if (!isPopupVisible) {
        showPopup(true); // Show popup and make it sticky
      } else if (isStickyOpen) {
        hidePopup(); // Hide popup if already sticky
      } else {
        // Make non-sticky popup sticky
        isStickyOpen = true;
        worksPopup.classList.add('sticky-open');
      }
    });

    // Handle hover interaction 
    worksButton.addEventListener('mouseenter', function() {
      if (!isStickyOpen) {
        showPopup(false);
      }
    });

    worksButton.addEventListener('mouseleave', function() {
      if (!isStickyOpen && isPopupVisible) {
        setTimeout(() => {
          // Small delay to check if user moved to the popup
          if (!isStickyOpen && isPopupVisible && !worksPopup.matches(':hover')) {
            hidePopup();
          }
        }, 200);
      }
    });

    worksPopup.addEventListener('mouseenter', function() {
      if (isPopupVisible && !isStickyOpen) {
        // Keep open while hovering
      }
    });

    worksPopup.addEventListener('mouseleave', function() {
      if (isPopupVisible && !isStickyOpen) {
        setTimeout(() => hidePopup(), 300);
      }
    });

    // Close button interaction
    closeButton.addEventListener('click', function() {
      hidePopup();
    });

    // Add smooth scroll momentum to popup content
    const popupContent = worksPopup.querySelector('.works-popup-content');
    if (popupContent) {
      popupContent.addEventListener('scroll', () => {
        // Prevent scroll jank
        if (typeof gsap !== 'undefined') {
          gsap.ticker.lagSmoothing(0);
        }
      });
    }

    // Keyboard accessibility
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && isPopupVisible) {
        hidePopup();
      }
      
      if (e.key === 'Tab' && isPopupVisible) {
        const focusableElements = worksPopup.querySelectorAll('a, button, [tabindex="0"]');
        if (focusableElements.length > 0) {
          e.preventDefault();
          focusableElements[0].focus();
        }
      }
    });

    // Click outside to close
    document.addEventListener('click', function(e) {
      if (isPopupVisible && !worksPopup.contains(e.target) && e.target !== worksButton) {
        hidePopup();
      }
    });
  }
  
  // Toggle popup visibility with animations
  function showPopup(makeSticky) {
    // Make popup visible
    worksPopup.style.visibility = 'visible';
    worksPopup.style.pointerEvents = 'auto';
    
    // Apply sticky class if needed
    if (makeSticky) {
      isStickyOpen = true;
      worksPopup.classList.add('sticky-open');
    } else {
      worksPopup.classList.remove('sticky-open');
    }
    
    isPopupVisible = true;
    
    // Apply positioning
    positionPopup();
    
    // Use GSAP for smoother animations if available
    if (typeof gsap !== 'undefined') {
      // Animated opening effect
      gsap.fromTo(worksPopup, 
        {opacity: 0, rotationY: 20, transformOrigin: "50% 50% -50px", scale: 0.95},
        {opacity: 1, rotationY: 0, scale: 1, duration: 0.4, ease: "back.out(1.5)"}
      );
      
      // Staggered reveal for each project
      const projects = worksPopup.querySelectorAll('.project');
      gsap.to(projects, {
        opacity: 1, 
        y: 0, 
        duration: 0.4,
        stagger: 0.1,
        delay: 0.2,
        ease: "power3.out"
      });
      
      // Add subtle light flare animation to popup
      gsap.fromTo(worksPopup, 
        {backgroundPosition: "0% 50%"},
        {backgroundPosition: "100% 50%", duration: 2, ease: "sine.inOut", repeat: -1, yoyo: true}
      );
    } else {
      // Fallback to CSS transitions
      worksPopup.classList.add('active');
      
      // Add animation class for projects
      const projects = worksPopup.querySelectorAll('.project');
      projects.forEach((project, i) => {
        setTimeout(() => {
          project.style.opacity = 1;
          project.style.transform = 'translateY(0)';
        }, 100 + (i * 100));
      });
    }
  }
  
  function hidePopup() {
    // Remove sticky state
    isStickyOpen = false;
    worksPopup.classList.remove('sticky-open');
    
    // Use GSAP for smoother animations if available
    if (typeof gsap !== 'undefined') {
      // Animate projects out first
      const projects = worksPopup.querySelectorAll('.project');
      gsap.to(projects, {
        opacity: 0,
        y: -10,
        duration: 0.2,
        stagger: 0.05,
        ease: "power2.in"
      });
      
      // Then collapse the popup
      gsap.to(worksPopup, {
        opacity: 0, 
        rotationY: 15,
        transformOrigin: "50% 50% -50px",
        scale: 0.95,
        duration: 0.3, 
        ease: "power2.in",
        delay: 0.1,
        onComplete: () => {
          worksPopup.style.visibility = 'hidden';
          worksPopup.style.pointerEvents = 'none';
          isPopupVisible = false;
          
          // Clear the button shadow effect
          gsap.set('.btn_works', { clearProps: 'boxShadow' });
        }
      });
    } else {
      // Fallback to CSS transitions
      worksPopup.classList.remove('active');
      // Need to use setTimeout for the visibility to change after animation completes
      setTimeout(() => {
        worksPopup.style.visibility = 'hidden';
        worksPopup.style.pointerEvents = 'none';
        isPopupVisible = false;
      }, 250); // Match the transition duration
    }
  }
});
