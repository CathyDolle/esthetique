// Default cat

let url = window.location.href
let urlTag = url.substring(url.lastIndexOf("#")+1)

window.onload = function(){
  if (url.lastIndexOf("#") != -1) {
    $("#services-container").load("include/"+ urlTag +".html");
    buttons.forEach((button) => {
      if (button.getAttribute('data-service') == urlTag) {
        button.classList.add('active')
      }
    })
    buttonsMobile.forEach((buttonMob) => {
      if (buttonMob.getAttribute('data-service') == urlTag) {
        buttonMob.classList.add('active')
      }
    })
  } else {
    $("#services-container").load("include/corps.html");
    buttons[0].classList.add('active')
    buttonsMobile[0].classList.add('active')
  }

}

// Filter services
let buttons = document.querySelectorAll('.desktop li a.link-no-deco')
let buttonsMobile = document.querySelectorAll('.mobile li a.link-no-deco')
let mobSection = document.querySelector('.mobileSection')
let servContainer = document.querySelector('.container')
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttons.forEach(button => {
      button.classList.remove('active')
    })
    button.classList.add('active')
    mobSection.innerText = button.innerText
    overlay.style.display == "block" ? (tlOverlay.reverse(), hamburger.classList.toggle('is-active')) : ""

    TweenMax.set('#services-container', {opacity:0})
    $("#services-container").load("include/"+button.getAttribute('data-service')+".html");
    TweenMax.to('#services-container', 0.6, {opacity:1})
  })
  // button.addEventListener('mouseover', () => {
  //   !button.classList.contains('active') ? button.style.fontWeight = "300" : ""
  // })
  // button.addEventListener('mouseout', () => {
  //   !button.classList.contains('active') ? button.style.fontWeight = "200" : ""
  // })
})
buttonsMobile.forEach((button) => {
  button.addEventListener('click', () => {
    buttonsMobile.forEach(button => {
      button.classList.remove('active')
    })
    button.classList.add('active')
    mobSection.innerText = button.innerText
    overlay.style.display == "block" ? (tlOverlay.reverse(), hamburger.classList.toggle('is-active')) : ""

    TweenMax.set('#services-container', {opacity:0})
    $("#services-container").load("include/"+button.getAttribute('data-service')+".html");
    TweenMax.to('#services-container', 0.6, {opacity:1})
  })
  button.addEventListener('mouseover', () => {
    !button.classList.contains('active') ? button.style.fontWeight = "300" : ""
  })
  button.addEventListener('mouseout', () => {
    !button.classList.contains('active') ? button.style.fontWeight = "200" : ""
  })
})

// mobile menu animation
let overlay = document.querySelector('.overlay')
let hamburger = document.querySelector('.hamburger')
let tlOverlay = new TimelineMax({paused:true})
tlOverlay.set(overlay, {display:"block"})
tlOverlay.to(overlay, 0.3, {ease:"easeInOut", opacity:1})
tlOverlay.from(buttonsMobile, 0.6, {ease:"easeInOut", opacity:0})
hamburger.addEventListener('click', (e) => {
  hamburger.classList.toggle('is-active')
  hamburger.classList.contains('is-active') ? tlOverlay.play() : tlOverlay.reverse()
})


let scrollTopDom = document.querySelector('.scrollToTop')
scrollTopDom.addEventListener('click', () => {
  let scroll = new SmoothScroll()
  scroll.animateScroll(0)
})

window.addEventListener('scroll', (event) => {
  scrollY > (window.innerHeight)*0.5
  ? scrollTopDom.classList.add('active')
  : scrollTopDom.classList.remove('active')
})
