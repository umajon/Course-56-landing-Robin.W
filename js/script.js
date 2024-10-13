
document.querySelector('.burger-menu').addEventListener('click', function () {
    document.querySelector('.nav-links').classList.toggle('active');
});

function showImages(country) {
    // Сначала убрать класс 'active' у всех кнопок
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Добавить класс 'active' для нажатой кнопки
    const activeButton = document.querySelector(`.btn[onclick="showImages('${country}')"]`);
    activeButton.classList.add('active');

    // Скрыть все картинки сначала
    const images = document.querySelectorAll('.image');
    images.forEach(img => img.classList.remove('active'));

    // Показать картинки выбранной страны
    const selectedImages = document.querySelectorAll(`.${country}`);
    selectedImages.forEach(img => img.classList.add('active'));
}

// По умолчанию показать картинки для Italy
document.addEventListener('DOMContentLoaded', () => {
    showImages('italy');
});