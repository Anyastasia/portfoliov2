const scrollDownButton = document.getElementById('scroll-down-btn')

scrollDownButton.addEventListener('click', ()=> {
    const aboutContainer = document.getElementById('about')

    aboutContainer.scrollIntoView()    
})