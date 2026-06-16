const canvas = document.createElement("canvas");
document.getElementById("particles").appendChild(canvas);

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.size = Math.random() * 3 + 1;

        this.vx = (Math.random() - 0.5) * 0.7;
        this.vy = (Math.random() - 0.5) * 0.7;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;

        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

        ctx.fillStyle = "#00f5ff";

        ctx.shadowBlur = 20;
        ctx.shadowColor = "#00f5ff";

        ctx.fill();
    }
}

for (let i = 0; i < 180; i++) {
    particles.push(new Particle());
}

function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => {
        particle.update();
        particle.draw();
    });

    requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});


/* CUSTOM CURSOR */

const cursor = document.querySelector(".cursor");
const cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    cursor2.style.left = e.clientX + "px";
    cursor2.style.top = e.clientY + "px";
});

document.querySelectorAll("a").forEach(link => {

    link.addEventListener("mouseenter", () => {
        cursor.classList.add("hover");
    });

    link.addEventListener("mouseleave", () => {
        cursor.classList.remove("hover");
    });

});
const text = "Powered By Electronics. Defined By Innovation.";

let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 80);
    }
}

window.addEventListener("load", typeWriter);