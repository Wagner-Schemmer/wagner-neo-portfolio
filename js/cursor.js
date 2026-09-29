// Custom Cursor — decorative ring follower. Native cursor ALWAYS visible.
// (The old logic hid the native pointer and some PCs failed to paint the
// replacement, leaving no cursor at all. Never again.)
function syncCursorMode() {}
function cursorOK() { return false; }
syncCursorMode();
window.addEventListener('resize', syncCursorMode);
let mx = -1, my = -1;
const cursor = document.getElementById('cursor');
const hoverElements = document.querySelectorAll('.cursor-hover, a, button, input, textarea');

document.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
    cursor.style.opacity = '1';
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
        cursor.style.border = '2px solid black';
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.width = '28px';
        cursor.style.height = '28px';
        cursor.style.backgroundColor = '#fff';
        cursor.style.border = '2px solid black';
    });
});
