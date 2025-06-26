document.querySelectorAll('.carousel').forEach(carousel => {
  const track = carousel.querySelector('.carousel-track');
  const images = track.querySelectorAll('img');
  let index = 0;

  const showSlide = () => {
    track.style.transform = `translateX(-${index * 100}%)`;
  };

  carousel.querySelector('.prev').addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    showSlide();
  });

  carousel.querySelector('.next').addEventListener('click', () => {
    index = (index + 1) % images.length;
    showSlide();
  });
});
