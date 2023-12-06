import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';

const elements = document.querySelectorAll('.btn-group-action');

window.addEventListener('resize', function(e) {
  // e.preventDefault();
  if (window.innerWidth <= 768) {
    for (let el of elements) {
      el.classList.replace('btn-group', 'btn-group-vertical');
      // el.classList.add('btn-group-vertical');
      // el.classList.remove('btn-group');
    }

  } else {
    for (let el of elements) {
      el.classList.replace('btn-group-vertical', 'btn-group');
      // el.classList.remove('btn-group-vertical');
      // el.classList.add('btn-group');
    }
  }
});

