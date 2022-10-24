// Create const and variable
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
// Here get array that`s way use .lengh to get number count of slides
const slidesCount = mainSlide.querySelectorAll('div').length
const container = document.querySelector('.container')

let activeSlideIndex = 0

// Slides correction connect
sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

// Clickable buttons settings event
upButton.addEventListener('click', () => {
    changeSlide('up')
})

downButton.addEventListener('click', () => {
    changeSlide('down')
})

// Scroll settings with keyboard arrows
document.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp') {
        changeSlide('up')
    } else if (event.key === 'ArrowDown') {
        changeSlide('down')
    }
})

// Scroll settings with mouse wheel
document.addEventListener('wheel', event => {
    if (event.deltaY < 0) {
        changeSlide('up')
    }
    else if (event.deltaY > 0) {
        changeSlide('down')
    }
})

// Settings of slides direction
function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }
    }
    // Settings animation
    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}