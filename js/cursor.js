// Custom Cursor Logic — only on precise pointers + large screens (where #cursor is visible).
// The native cursor stays visible everywhere else, so it never disappears.
if (window.matchMedia('(pointer: fine) and (min-width: 1024px)').matches) {
    document.documentElement.classList.add('custom-cursor');
}
const cursor = document.getElementById('cursor');
const hoverElements = document.querySelectorAll('.cursor-hover, a, button, input, textarea');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursor.style.transform = `translate(-50%, -50%)`;
});

// Add hover effect to cursor
hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.width = '60px';
        cursor.style.height = '60px';
        cursor.style.backgroundColor = '#FBFF48'; // Neo Yellow
        cursor.style.mixBlendMode = 'normal';
        cursor.style.border = '2px solid black';
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.width = '24px';
        cursor.style.height = '24px';
        cursor.style.backgroundColor = '#fff';
        cursor.style.mixBlendMode = 'difference';
        cursor.style.border = 'none';
    });
});
