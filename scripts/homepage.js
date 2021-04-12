
let photos = document.querySelectorAll('.photo img')

photos.forEach((photo) => {
  photo.addEventListener('mouseover', () => {
    TweenMax.to(photo, 0.2, {scale:1.05},'sync')
  })
  photo.addEventListener('mouseout', () => {
    TweenMax.to(photo, 0.2, {scale:1},'sync')
  })
})


window.onload = () => {
  TweenMax.to('.first-screen .desc', 0.6, {opacity:1, ease:"easeInOut", x:"15vw"})
}
