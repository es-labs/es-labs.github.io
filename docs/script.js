// Smooth Anchor Scrolling
document.getElementById('toTop').onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' })

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('toTop').style.display = 'block'
  } else {
    document.getElementById('toTop').style.display = 'none'
  }
}

async function fetchHTML(fileName, elIdStr) {
  const res = await fetch(fileName)
  const txt = await res.text()
	const parser = new DOMParser()
	const doc = parser.parseFromString(txt, 'text/html')
  document.querySelector(elIdStr).insertAdjacentElement('afterend', doc.body.firstChild)
}

// When the user scrolls down 20px from the top of the document, show the scroll up button
window.onscroll = function () {
  scrollFunction();
};

document.addEventListener('DOMContentLoaded', async () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }
  // await fetchHTML('services.html', '#portfolio') // order is important
  // await fetchHTML('skills.html', '#services')
  // await fetchHTML('work.html', '#skills')
})
