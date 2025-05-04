document.addEventListener('DOMContentLoaded', function() {
  // The sprite element already exists in the HTML with CSS animation
  // This script just adds a subtle hover effect for more dynamism
  
  const characterSprite = document.querySelector('.character-sprite');
  
  if (characterSprite) {
    // Add a subtle floating animation effect
    gsap.to(characterSprite, {
      y: "+=5",
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
    
    // Handle responsive behavior
    function adjustSpritePosition() {
      if (window.innerWidth <= 480) {
        characterSprite.style.right = '40px';
      } else if (window.innerWidth <= 768) {
        characterSprite.style.right = '50px';
      } else {
        characterSprite.style.right = '60px';
      }
    }
    
    // Initial position adjustment
    adjustSpritePosition();
    
    // Adjust position when window is resized
    window.addEventListener('resize', adjustSpritePosition);
  }
}); 