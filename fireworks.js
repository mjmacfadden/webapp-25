// Fireworks celebration animation
const canvas = document.getElementById("canvas");
if (!canvas) {
    console.error("Canvas element not found");
} else {
    const ctx = canvas.getContext("2d");

    // Initial setup to match screen size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fireworks = [];
    const particles = [];
    let animationFrameId = null;
    let fireworksStartTime = 0;

    class Firework {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = canvas.height;
            // Target is between 1/4 and 1/2 of the screen height
            this.targetY = Math.random() * (canvas.height / 2) + (canvas.height / 4); 
            this.speed = 3;
            this.color = `hsl(${Math.random() * 360}, 100%, 50%)`; 
        }

        update() {
            this.y -= this.speed;
            if (this.y <= this.targetY) {
                this.explode();
                return true; // Mark for removal
            }
            this.draw();
            return false;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }

        explode() {
            // Creates 30 particles on explosion
            for (let i = 0; i < 30; i++) {
                particles.push(new Particle(this.x, this.y, this.color));
            }
        }
    }

    class Particle {
        constructor(x, y, color) {
            this.x = x;
            this.y = y;
            this.speed = Math.random() * 4 + 1;
            this.angle = Math.random() * Math.PI * 2;
            this.color = color;
            this.alpha = 1;
            this.gravity = 0.05; // Added gravity effect
            this.velocity = {
                x: Math.cos(this.angle) * this.speed,
                y: Math.sin(this.angle) * this.speed
            };
        }

        update() {
            this.velocity.y += this.gravity;
            
            this.x += this.velocity.x;
            this.y += this.velocity.y;
            
            this.alpha -= 0.02; // Fade the particle out
            
            this.draw();
            return this.alpha <= 0; // Mark for removal
        }

        draw() {
            ctx.globalAlpha = this.alpha;
            ctx.beginPath();
            ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.globalAlpha = 1; // Reset alpha for other drawings
        }
    }

    function animate() {
        // Use clearRect() to clear the canvas with a transparent fill
        ctx.clearRect(0, 0, canvas.width, canvas.height); 

        // Randomly launch a new firework (only within the first 4 seconds)
        const elapsedTime = Date.now() - fireworksStartTime;
        if (Math.random() < 0.03 && elapsedTime < 4000) {
            fireworks.push(new Firework());
        }

        // Update and clean up fireworks
        for (let i = fireworks.length - 1; i >= 0; i--) {
            if (fireworks[i].update()) {
                fireworks.splice(i, 1);
            }
        }

        // Update and clean up particles
        for (let i = particles.length - 1; i >= 0; i--) {
            if (particles[i].update()) {
                particles.splice(i, 1);
            }
        }

        console.log(`Fireworks: ${fireworks.length}, Particles: ${particles.length}`);

        // Stop animation if no fireworks or particles left
        if (fireworks.length === 0 && particles.length === 0) {
            console.log("Stopping fireworks animation");
            canvas.style.display = 'none';
            animationFrameId = null;
            return;
        }

        animationFrameId = requestAnimationFrame(animate);
    }

    // Expose function to start fireworks
    window.startFireworks = function() {
        console.log("Starting fireworks!");
        console.log(`Canvas element:`, canvas);
        console.log(`Canvas display before:`, canvas.style.display);
        console.log(`Canvas size: ${canvas.width}x${canvas.height}`);
        
        canvas.style.display = 'block';
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        console.log(`Canvas display after:`, canvas.style.display);
        console.log(`Canvas size after: ${canvas.width}x${canvas.height}`);
        
        // Record the start time for 4-second limit
        fireworksStartTime = Date.now();
        
        // Clear previous fireworks
        fireworks.length = 0;
        particles.length = 0;
        
        // Cancel any existing animation
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
        
        // Prime with some initial fireworks
        for (let i = 0; i < 3; i++) {
            fireworks.push(new Firework());
        }
        console.log(`Initial fireworks launched: ${fireworks.length}`);
        
        animate();
    };

    // Handle window resizing
    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}
