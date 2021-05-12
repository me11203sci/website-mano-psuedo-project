var slideshowImages = ['../images/placeHolderImages/callingToReserveSomeDigits.jpg', '../images/placeHolderImages/checkTheseDigits.png', '../images/placeHolderImages/aSpecialTypeOfBruhMomement.jpg'];
var slideshowIndex = Math.round(Math.random()*(slideshowImages.length-1));

nextSlide();

function nextSlide()
{
  document.getElementById('title-slideshow-image').src=slideshowImages[slideshowIndex];
  (slideshowIndex != slideshowImages.length-1)? slideshowIndex++: slideshowIndex = Math.round(Math.random()*(slideshowImages.length-1));
  setTimeout(nextSlide, 4000);
}
