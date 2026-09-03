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

// ДОБАВИТЬ ВАРИАНТЫ ТЕКСТОВ СООБЩЕНИЙ
document.addEventListener('DOMContentLoaded', function () {
  const variantsContainer = document.getElementById('variants');
  const addButton = document.getElementById('addVariantBtn');
  let variantCounter = 0; // Счетчик для динамических полей
  let isFirstFieldCreated = false; // Флаг для отслеживания первого созданного поля

  // Функция для создания элемента варианта
  function createVariantElement() {
    variantCounter++;
    const newId = `variant_${variantCounter}`;

    // Создаем строку
    const rowDiv = document.createElement('div');
    rowDiv.className = 'row mb-3';

    // Колонка с textarea
    const textareaCol = document.createElement('div');
    textareaCol.className = 'offset-md-4 col  col-md col-xl-6';

    // Создаем textarea
    const textarea = document.createElement('textarea');
    textarea.className = 'form-control form-control-sm';
    textarea.id = newId;
    textarea.rows = 2;
    textarea.name = '';
    // textarea.placeholder = `Вариант ${variantCounter}`;

    textareaCol.appendChild(textarea);

    // Колонка с кнопкой удаления
    const buttonCol = document.createElement('div');
    buttonCol.className = 'col-auto';

    const deleteBtn = document.createElement('a');
    deleteBtn.href = '#';
    deleteBtn.className = 'btn btn-outline-danger btn-sm remove-variant';
    deleteBtn.title = 'Удалить вариант';
    deleteBtn.innerHTML = '<i class="bi bi-x-lg"></i>';

    // Обработчик удаления
    deleteBtn.addEventListener('click', function (e) {
      e.preventDefault();
      const rowToRemove = this.closest('.row');
      if (rowToRemove) {
        rowToRemove.remove();
      }
    });

    buttonCol.appendChild(deleteBtn);

    // Собираем строку
    rowDiv.appendChild(textareaCol);
    rowDiv.appendChild(buttonCol);

    return rowDiv;
  }

  // Обработчик кнопки "Добавить"
  addButton.addEventListener('click', function (e) {
    e.preventDefault();

    // Создаем новый вариант
    const newVariant = createVariantElement();
    variantsContainer.appendChild(newVariant);

    // Если это первое созданное поле, добавляем кнопку удаления к нему
    if (!isFirstFieldCreated) {
      isFirstFieldCreated = true;
    }
  });

  // Делегирование событий для удаления (на случай, если понадобится)
  variantsContainer.addEventListener('click', function (e) {
    const target = e.target.closest('.remove-variant');
    if (target) {
      e.preventDefault();
      const rowToRemove = target.closest('.row');
      if (rowToRemove) {
        rowToRemove.remove();
      }
    }
  });
});
