'use strict';
const copyButton = document.querySelector('#copy-email');
const copyStatus = document.querySelector('#copy-status');
copyButton?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('snobel1@umd.edu');
    copyButton.textContent = 'Copied';
    copyStatus.textContent = 'Email copied to your clipboard.';
  } catch {
    copyStatus.textContent = 'Select and copy the email address above.';
  }
});
if ('IntersectionObserver' in window) {
  const navigation = [...document.querySelectorAll('nav a')];
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      navigation.forEach(link => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }
  }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
  document.querySelectorAll('main > section[id]').forEach(section => observer.observe(section));
}
