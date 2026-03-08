import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  // TODO: додай потрібні опції для підпису
});

function createGalleryMarkup(images) {
  // TODO:
  // 1. Перебрати масив images через map()
  // 2. Із кожного об'єкта взяти:
  //    - webformatURL
  //    - largeImageURL
  //    - tags
  //    - likes
  //    - views
  //    - comments
  //    - downloads
  // 3. Повернути рядок з HTML-розміткою
  // 4. Не забути join('')

  void images;
  return '';
}

export function createGallery(images) {
  // TODO:
  // 1. Створити markup через createGalleryMarkup(images)
  // 2. Додати markup в gallery
  // 3. Викликати lightbox.refresh()

  void images;
  void gallery;
  void lightbox;
}

export function clearGallery() {
  // TODO: очистити вміст gallery

  void gallery;
}

export function showLoader() {
  // TODO: показати loader

  void loader;
}

export function hideLoader() {
  // TODO: сховати loader

  void loader;
}
