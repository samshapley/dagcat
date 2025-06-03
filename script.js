// Cyberpunk DAG.Cat Interactive Elements

// Typing animation for terminal
const typedTextElement = document.getElementById('typed-text');
const commands = [
    'airflow dags list',
    'cat deploy --engineers=autonomous',
    'optimize --llm-costs=80%',
    'workflow status: 🐱 PURRING...',
    'engineers.happiness++',
    'scale --mode=cat-like'
];

let currentCommandIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

function typeWriter() {
    if (!typedTextElement) return;
    
    const currentCommand = commands[currentCommandIndex];
    
    if (isDeleting) {
        typedTextElement.textContent = currentCommand.substring(0, currentCharIndex - 1);
        currentCharIndex--;
        
        if (currentCharIndex === 0) {
            isDeleting = false;
            currentCommandIndex = (currentCommandIndex + 1) % commands.length;
        }
    } else {
        typedTextElement.textContent = currentCommand.substring(0, currentCharIndex + 1);
        currentCharIndex++;
        
        if (currentCharIndex === currentCommand.length) {
            isDeleting = true;
            setTimeout(typeWriter, 2000); // Pause before deleting
            return;
        }
    }
    
    const typingSpeed = isDeleting ? 50 : 100;
    setTimeout(typeWriter, typingSpeed);
}

// Matrix rain effect enhancement
function createMatrixRain() {
    const matrixContainer = document.querySelector('.matrix-rain');
    if (!matrixContainer) return;
    
    const characters = ['🐾', '🐱', '>', '<', '/', '\\', '|', '-', '0', '1'];
    const columns = Math.floor(window.innerWidth / 20);
    
    for (let i = 0; i < columns; i++) {
        const drop = document.createElement('div');
        drop.className = 'matrix-drop';
        drop.style.position = 'absolute';
        drop.style.left = i * 20 + 'px';
        drop.style.top = '-20px';
        drop.style.color = '#00ffff';
        drop.style.fontSize = '14px';
        drop.style.fontFamily = 'Share Tech Mono, monospace';
        drop.style.opacity = '0.7';
        drop.textContent = characters[Math.floor(Math.random() * characters.length)];
        
        const fallDuration = Math.random() * 3 + 2;
        drop.style.animation = `matrixFall ${fallDuration}s linear infinite`;
        drop.style.animationDelay = Math.random() * 2 + 's';
        
        matrixContainer.appendChild(drop);
        
        // Remove and recreate drops periodically
        setTimeout(() => {
            if (drop.parentNode) {
                drop.parentNode.removeChild(drop);
            }
        }, (fallDuration + Math.random() * 2) * 1000);
    }
}

// Glitch effect enhancement
function addGlitchEffects() {
    const glitchElements = document.querySelectorAll('.glitch');
    
    glitchElements.forEach(element => {
        setInterval(() => {
            if (Math.random() < 0.1) { // 10% chance every interval
                element.style.animation = 'none';
                setTimeout(() => {
                    element.style.animation = '';
                }, 50);
            }
        }, 2000);
    });
}

// Cyberpunk cursor trail
function createCyberCursor() {
    document.addEventListener('mousemove', (e) => {
        if (Math.random() < 0.3) { // Reduced frequency for performance
            const trail = document.createElement('div');
            trail.className = 'cursor-trail';
            trail.style.position = 'fixed';
            trail.style.left = e.clientX + 'px';
            trail.style.top = e.clientY + 'px';
            trail.style.width = '4px';
            trail.style.height = '4px';
            trail.style.background = '#00ffff';
            trail.style.borderRadius = '50%';
            trail.style.pointerEvents = 'none';
            trail.style.zIndex = '9999';
            trail.style.boxShadow = '0 0 10px #00ffff';
            trail.style.opacity = '0.8';
            
            document.body.appendChild(trail);
            
            // Animate trail
            setTimeout(() => {
                trail.style.transition = 'all 0.5s ease';
                trail.style.opacity = '0';
                trail.style.transform = 'scale(0)';
                
                setTimeout(() => {
                    if (trail.parentNode) {
                        trail.parentNode.removeChild(trail);
                    }
                }, 500);
            }, 10);
        }
    });
}

// Holographic card effects
function enhanceCardEffects() {
    const cards = document.querySelectorAll('.feature-card, .benefit-card, .pricing-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = card.classList.contains('featured') 
                ? 'scale(1.05) translateY(-10px)' 
                : 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = card.classList.contains('featured') 
                ? 'scale(1.05)' 
                : 'translateY(0)';
        });
    });
}

// Digital paw animation
function animateDigitalPaws() {
    const paws = document.querySelectorAll('.digital-paw');
    
    paws.forEach((paw, index) => {
        setInterval(() => {
            paw.style.transform = 'scale(1.2)';
            setTimeout(() => {
                paw.style.transform = 'scale(1)';
            }, 200);
        }, 3000 + (index * 500)); // Staggered animation
    });
}

// Language selector enhancement
function enhanceLanguageSelector() {
    const selector = document.getElementById('language');
    if (selector) {
        selector.addEventListener('change', (e) => {
            // Add cyberpunk flash effect
            selector.style.boxShadow = '0 0 30px #00ffff';
            setTimeout(() => {
                selector.style.boxShadow = '0 0 15px rgba(0, 255, 255, 0.3)';
            }, 200);
            
            console.log(`Language changed to: ${e.target.value}`);
        });
    }
}

// Smooth scrolling for navigation
function addSmoothScrolling() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// CTA button enhancement
function enhanceCTAButtons() {
    const ctaButtons = document.querySelectorAll('.cta-button, .cta-button-main');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Add ripple effect
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.6)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.left = '50%';
            ripple.style.top = '50%';
            ripple.style.width = '100px';
            ripple.style.height = '100px';
            ripple.style.marginLeft = '-50px';
            ripple.style.marginTop = '-50px';
            
            button.style.position = 'relative';
            button.appendChild(ripple);
            
            setTimeout(() => {
                if (ripple.parentNode) {
                    ripple.parentNode.removeChild(ripple);
                }
            }, 600);
        });
    });
}

// Parallax effect for background elements
function addParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        const grid = document.querySelector('.cyberpunk-grid');
        if (grid) {
            grid.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Console easter egg
function addConsoleEasterEgg() {
    console.log(`
    %c
     /\\_____/\\
    /  o   o  \\
   ( ==  ^  == )  Welcome to DAG.Cat! 🐱
    )         (
   (           )
  ( (  )   (  ) )
 (__(__)___(__)__)
    
    %cManage engineers like cats, reduce LLM costs by 80%!
    %cType 'dag.purr()' for a surprise! 
    `, 
    'color: #ff8500; font-family: monospace;',
    'color: #00ffff; font-weight: bold;',
    'color: #39ff14;'
    );
    
    // Add global function for easter egg
    window.dag = {
        purr: () => {
            console.log('%c🐱 PURRRR! Engineers are happy! 🐱', 
                'color: #ff006e; font-size: 20px; font-weight: bold;');
            
            // Create floating cats
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    const cat = document.createElement('div');
                    cat.innerHTML = '🐱';
                    cat.style.position = 'fixed';
                    cat.style.left = Math.random() * window.innerWidth + 'px';
                    cat.style.top = window.innerHeight + 'px';
                    cat.style.fontSize = '30px';
                    cat.style.zIndex = '10000';
                    cat.style.pointerEvents = 'none';
                    cat.style.animation = 'catFloat 3s ease-out forwards';
                    
                    document.body.appendChild(cat);
                    
                    setTimeout(() => {
                        if (cat.parentNode) {
                            cat.parentNode.removeChild(cat);
                        }
                    }, 3000);
                }, i * 200);
            }
        }
    };
}

// Add CSS animations for new effects
function addDynamicStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        @keyframes catFloat {
            to {
                transform: translateY(-100vh);
                opacity: 0;
            }
        }
        
        .cursor-trail {
            animation: trailFade 0.5s ease-out forwards;
        }
        
        @keyframes trailFade {
            to {
                opacity: 0;
                transform: scale(2);
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize all cyberpunk effects
function initCyberpunkEffects() {
    addDynamicStyles();
    typeWriter();
    createMatrixRain();
    addGlitchEffects();
    createCyberCursor();
    enhanceCardEffects();
    animateDigitalPaws();
    enhanceLanguageSelector();
    addSmoothScrolling();
    enhanceCTAButtons();
    addParallaxEffect();
    addConsoleEasterEgg();
    
    // Recreate matrix rain periodically
    setInterval(createMatrixRain, 10000);
    
    console.log('%c✨ Cyberpunk DAG.Cat initialized! ✨', 
        'color: #00ffff; font-weight: bold; font-size: 16px;');
}

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCyberpunkEffects);
} else {
    initCyberpunkEffects();
}

// Handle window resize
window.addEventListener('resize', () => {
    // Recreate matrix rain with new dimensions
    const matrixContainer = document.querySelector('.matrix-rain');
    if (matrixContainer) {
        matrixContainer.innerHTML = '';
        createMatrixRain();
    }
});