window.addEventListener('load', function() {
  const imgs = document.querySelectorAll('.hero-images img');
  let current = 0;

  setInterval(() => {
    imgs[current].classList.remove('active');
    current = (current + 1) % imgs.length;
    imgs[current].classList.add('active');
  }, 5000);
});

document.addEventListener("DOMContentLoaded", () => {
    const containers = document.querySelectorAll(".parallax-window");
    const menu = document.querySelector(".menu");
    const menuScreen = document.querySelector(".menu-screen");

    menu.addEventListener("click", () => {
        menuScreen.classList.toggle("active");
        menu.classList.toggle("active");
    });

    containers.forEach(container => {
        const inner = container.querySelector(".parallax-inner");

        let targetY = 0;
        let currentY = 0;

        function update() {
            currentY += (targetY - currentY) * 0.1;
            inner.style.transform = `translateY(${currentY}px)`;
            requestAnimationFrame(update);
        }

        window.addEventListener("scroll", () => {
            const rect = container.getBoundingClientRect();
            const scrollFraction = rect.top / window.innerHeight;
            targetY = scrollFraction * 120; // adjust strength here
        });

        update();
    });
});

