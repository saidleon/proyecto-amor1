// ===== CONFIGURAR CANVAS =====
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// ===== ESTRELLAS =====
let stars = [];
for (let i = 0; i < 200; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speed: Math.random() * 0.5
    });
}

let mouseX = canvas.width / 2;
let mouseY = canvas.height / 2;

window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";
    stars.forEach(star => {

        let dx = (mouseX - star.x) * 0.0005;
        let dy = (mouseY - star.y) * 0.0005;

        star.x += dx;
        star.y += star.speed + dy;

        if (star.y > canvas.height) {
            star.y = 0;
            star.x = Math.random() * canvas.width;
        }

        ctx.fillRect(star.x, star.y, star.size, star.size);
    });

    requestAnimationFrame(drawStars);
}

drawStars();


// ===== EFECTO SCROLL =====
window.addEventListener("touchmove", (e) => {
    mouseX = e.touches[0].clientX;
    mouseY = e.touches[0].clientY;
});    const elementos = document.querySelectorAll(".reveal");
    elementos.forEach(el => {
        const top = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 100) {
            el.classList.add("active");
        }
    });


// ===== EFECTO MAQUINA DE ESCRIBIR =====
const textoCarta = `
Mi amor… 💌

Desde aquel 24 de diciembre en que nuestras vidas se unieron,
entendí que el mejor regalo no estaba debajo de un árbol,
sino frente a mí… eras tú. 🎄❤️

Gracias por cada sonrisa que ilumina mis días,
por cada abrazo que me da paz,
y por cada momento que construimos juntos.

Y si volviera a empezar mi vida,
te elegiría a ti…
una y mil veces más. 💞
`;

let index = 0;
function escribirCarta() {
    if (index < textoCarta.length) {
        document.getElementById("carta").innerHTML += textoCarta.charAt(index);
        index++;
        setTimeout(escribirCarta, 35);
    }
}

setTimeout(escribirCarta, 100);


// ===== FUEGOS ARTIFICIALES =====
let fireworks = [];

function createFirework() {
    fireworks.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height / 2,
        radius: 1,
        alpha: 1
    });
}

function drawFireworks() {
    fireworks.forEach((fw, index) => {
        ctx.beginPath();
        ctx.arc(fw.x, fw.y, fw.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 105, 180, ${fw.alpha})`;
        ctx.fill();

        fw.radius += 2;
        fw.alpha -= 0.02;

        if (fw.alpha <= 0) {
            fireworks.splice(index, 1);
        }
    });
}

setInterval(() => {
    createFirework();
}, 800);


// ===== MENSAJE FINAL =====
setTimeout(() => {
    const mensaje = document.createElement("h1");
    mensaje.innerText = "Te Amo Yaritza 💖";
    mensaje.style.position = "absolute";
    mensaje.style.top = "50%";
    mensaje.style.left = "50%";
    mensaje.style.transform = "translate(-50%, -50%)";
    mensaje.style.color = "#ff69b4";
    mensaje.style.fontSize = "3rem";
    mensaje.style.textShadow = "0 0 20px pink";
    mensaje.style.animation = "latido 1s infinite";
    document.body.appendChild(mensaje);
}, 12000);


// ===== ANIMACIÓN GENERAL =====
function animate() {
    drawStars();
    drawFireworks();
    requestAnimationFrame(animate);
}

animate();