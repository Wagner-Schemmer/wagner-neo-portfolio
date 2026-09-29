// Custom Cursor Logic — only on precise pointers + large screens (where #cursor is visible).
// The native cursor stays visible everywhere else, so it never disappears.
function cursorOK() {
    return window.matchMedia('(pointer: fine) and (min-width: 1024px)').matches;
}
function syncCursorMode() {
    document.documentElement.classList.toggle('custom-cursor', cursorOK());
}
syncCursorMode();
window.addEventListener('resize', syncCursorMode);
// DIAGNÓSTICO TEMPORÁRIO — remover após descobrir o bug
const dbg = document.createElement('div');
dbg.style.cssText = 'position:fixed;left:8px;bottom:8px;z-index:10000;background:#000;color:#0f0;font:12px monospace;padding:6px 10px;border-radius:8px;pointer-events:none';
document.body.appendChild(dbg);
let mx = -1, my = -1;
setInterval(() => {
    dbg.textContent = 'custom:' + document.documentElement.classList.contains('custom-cursor')
        + ' fine:' + window.matchMedia('(pointer: fine)').matches
        + ' w:' + window.innerWidth + ' mouse:' + mx + ',' + my;
}, 500);
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
