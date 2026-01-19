import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Initialize animations after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Integrate GSAP with Lenis smooth scroll
  const lenis = window.lenis;

  if (lenis) {
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }

  // Fade-up animation for elements
  const fadeUpElements = document.querySelectorAll('.fade-up');
  fadeUpElements.forEach((element) => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 60,
      duration: 1,
      ease: 'power3.out',
    });
  });

  // Parallax effect for images
  const parallaxImages = document.querySelectorAll('.parallax-img');
  parallaxImages.forEach((img) => {
    gsap.to(img, {
      scrollTrigger: {
        trigger: img,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
      y: -50,
      ease: 'none',
    });
  });

  // Staggered animation for service items
  const serviceItems = document.querySelectorAll('.service-item');
  if (serviceItems.length > 0) {
    gsap.from(serviceItems, {
      scrollTrigger: {
        trigger: '.services-section',
        start: 'top 70%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out',
    });
  }

  // Scale-in animation for project cards
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      scale: 0.9,
      duration: 0.6,
      ease: 'power2.out',
    });
  });
});
