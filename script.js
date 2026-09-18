const cur = document.getElementById('cur'), ring = document.getElementById('ring');
document.addEventListener('mousemove', e => { cur.style.left = e.clientX + 'px'; cur.style.top = e.clientY + 'px'; setTimeout(() => { ring.style.left = e.clientX + 'px'; ring.style.top = e.clientY + 'px' }, 80) });
document.querySelectorAll('a,button,.sc,.pc').forEach(el => {
    el.addEventListener('mouseenter', () => { cur.style.width = '20px'; cur.style.height = '20px'; ring.style.width = '56px'; ring.style.height = '56px'; ring.style.opacity = '.8' });
    el.addEventListener('mouseleave', () => { cur.style.width = '12px'; cur.style.height = '12px'; ring.style.width = '36px'; ring.style.height = '36px'; ring.style.opacity = '.5' })
});
const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } }), { threshold: .1 });
document.querySelectorAll('.reveal,.sc').forEach(el => obs.observe(el));
document.querySelectorAll('.pg,.sg,.clinks').forEach(p => [...p.children].forEach((c, i) => c.style.transitionDelay = (i * .1) + 's'));