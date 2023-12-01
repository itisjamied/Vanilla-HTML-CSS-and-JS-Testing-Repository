document.addEventListener('DOMContentLoaded', () => {
    const diamond = document.getElementById('diamond');
    let isCentered = false;

    diamond.addEventListener('click', function () {
        if (isCentered) {
            // Return to original position on the right
            diamond.style.transform = 'translateY(-50%) scale(1)';
            diamond.style.right = '-10%';
            diamond.style.top = '70%';
        } else {
            // Move to center and scale up
            diamond.style.transform = 'translate(50%, -50%) scale(1.5)';
            diamond.style.right = '50%';
            diamond.style.top = '50%';
        }
        isCentered = !isCentered;
    });



});
