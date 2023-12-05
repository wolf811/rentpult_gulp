import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';

// $(document).ready(function() {
//   console.log('components');
//   $(window).resize(function(){
//     let windowWidth = $('body').innerWidth();
//     if(windowWidth <= 768){$(".btn-group-action").removeClass('btn-group').addClass('btn-group-vertical');}
//     else{$(".btn-group-action").removeClass('btn-group-vertical').addClass('btn-group');}
//   });
// });

const debounce = (callback, delay) => {
  let timeout = null;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(callback, delay, ...args);
  };
};

// const elements = document.querySelectorAll('.btn-group-action');
const el = document.querySelectorAll('.btn-group-action');
const debouncedResize = debounce(
  () => {
    if (window.innerWidth <= 768) {
      // 0...768
      el.classList.replace('btn-group', 'btn-group-vertical');
      // for (let el of elements) {
      //   element.classList.add('btn-group-vertical');
      //   element.classList.remove('btn-group');
      // }
    } else {
      // 769...Inf
      el.classList.replace('btn-group-vertical', 'btn-group');
      // for (let el of elements) {
      //   element.classList.remove('btn-group-vertical');
      //   element.classList.add('btn-group');
      // }
    }
  },
  50
);

window.addEventListener('resize', debouncedResize);

// const el = document.querySelectorAll('.btn-group-action');

// if (window.matchMedia("(max-width: 768px)").matches) {
//   el.classList.replace('btn-group', 'btn-group-vertical');
// } else {
//   el.classList.replace('btn-group-vertical', 'btn-group');
// }
