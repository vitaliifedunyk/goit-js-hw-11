import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  // TODO:
  // 1. Заборонити стандартну поведінку форми
  // 2. Отримати значення поля пошуку
  // 3. Прибрати зайві пробіли через trim()
  // 4. Якщо рядок порожній:
  //    - показати iziToast
  //    - зупинити виконання
  // 5. Очистити попередню галерею
  // 6. Показати loader
  // 7. Викликати getImagesByQuery(query)
  // 8. У then():
  //    - перевірити data.hits.length
  //    - якщо 0, показати iziToast
  //    - якщо є дані, викликати createGallery(...)
  // 9. У catch():
  //    - опрацювати помилку
  //    - показати iziToast
  // 10. У finally():
  //     - сховати loader
  //     - скинути форму

  void event;
  void iziToast;
  void getImagesByQuery;
  void createGallery;
  void clearGallery;
  void showLoader;
  void hideLoader;
}
