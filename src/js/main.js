import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';

const elements = document.querySelectorAll('.btn-group-action');

window.addEventListener('resize', function (e) {
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

// document.querySelectorAll('input[name="toogleCountriesLanguages"]').forEach(radio => {
//   radio.addEventListener('change', function () {
//     const countries = document.getElementById('countries');
//     const languages = document.getElementById('languages');

//     if (this.value === '1') {
//       countries.classList.remove('d-none');
//       languages.classList.add('d-none');
//     } else {
//       languages.classList.remove('d-none');
//       countries.classList.add('d-none');
//     }
//   });
// });

document.querySelectorAll('input[name="toogleCountriesLanguages"]').forEach(radio => {
  radio.addEventListener('change', function () {
    const countries = document.getElementById('countries');
    const languages = document.getElementById('languages');

    if (this.value === '1') {
      countries.classList.remove('d-none');
      languages.classList.add('d-none');
    } else {
      languages.classList.remove('d-none');
      countries.classList.add('d-none');
    }
  });
});
