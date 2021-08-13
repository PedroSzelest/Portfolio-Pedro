export function words() {
    const $container = document.querySelector('.header-container-presentation')
    const $text = document.querySelector('.header-presentation')

    const changingWords = (time, work)=> {
        return new Promise((resolve)=> {
            if (true) {
                setTimeout(()=> {
                    resolve(work())
                }, time)
            }
        })
    }

    changingWords(6000, ()=> {
        $text.classList.toggle('active')
        $text.textContent = 'Hello, my name is Pedro Szelest'
        $text.style.color = 'rgb(241, 236, 195)'
    })
    
    .then(()=> {
        return changingWords(6000, ()=> {
            $text.classList.toggle('active')
            $text.textContent = 'I am a Web Designer'
            $text.style.color = 'rgb(124, 131, 253)'
        })
    })
    .then(()=> {
        return changingWords(6000, ()=> {
            $text.classList.toggle('active')
            $text.textContent = 'Welcome to my portfolio'
            $text.style.color = 'rgb(243, 139, 160)'
        })
    })

    .then(()=> {
        return changingWords(6000, ()=> {
            $text.classList.toggle('active')
            $text.textContent = 'And enjoy my works and projects'
            $text.style.color = 'rgb(181, 234, 234)'
        })
    })

    setInterval(()=> {
        changingWords(6000, ()=> {
            $text.classList.toggle('active')
            $text.textContent = 'Hello, my name is Pedro Szelest'
            $text.style.color = 'rgb(241, 236, 195)'
        })
        
        
        .then(()=> {
            return changingWords(6000, ()=> {
                $text.classList.toggle('active')
                $text.textContent = 'I am a Web Designer'
                $text.style.color = 'rgb(124, 131, 253)'
            })
        })
        .then(()=> {
            return changingWords(6000, ()=> {
                $text.classList.toggle('active')
                $text.textContent = 'Welcome to my portfolio'
                $text.style.color = 'rgb(243, 139, 160)'
            })
        })
    
        .then(()=> {
            return changingWords(6000, ()=> {
                $text.classList.toggle('active')
                $text.textContent = 'And enjoy my works and projects'
                $text.style.color = 'rgb(181, 234, 234)'
            })
        })
    },24000)
}