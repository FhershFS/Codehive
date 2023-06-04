var sliderImages = document.querySelectorAll('.slider-image');
    var currentImageIndex = 0;

    function showImage(index) {
      // Oculta todas las imágenes
      for (var i = 0; i < sliderImages.length; i++) {
        sliderImages[i].classList.remove('active');
      }

      // Muestra la imagen actual
      sliderImages[index].classList.add('active');
    }

    function nextImage() {
      currentImageIndex++;
      if (currentImageIndex >= sliderImages.length) {
        currentImageIndex = 0;
      }
      showImage(currentImageIndex);
    }

    // Cambia a la siguiente imagen cada 3 segundos
    setInterval(nextImage, 3000);