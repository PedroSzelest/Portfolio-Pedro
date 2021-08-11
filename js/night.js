export function night() {
    const GRID_SIZE = 300
    const $night = document.getElementById('night')

    function randomGridPosition() {
        return {
            x: Math.floor(Math.random() * GRID_SIZE) + 1,
            y: Math.floor(Math.random() * GRID_SIZE) + 1
        }
    }

    const createStars = (time, work) => {
        return new Promise((resolve, reject) => {
            if (true) {
                setTimeout(()=> {
                    resolve(work())
                }, time)
            } else {
                return reject()
            }
        })
    }

    createStars(250, ()=> {
        const  $fragment = document.createDocumentFragment()

        for(let i = 0; i < 200; i++) {
            const starPosition = randomGridPosition()

            const starElement = document.createElement('div')
            starElement.style.gridRowStart = starPosition.y
            starElement.style.gridColumnStart = starPosition.x
            starElement.classList.add('star')
            starElement.classList.add('blink')
            $fragment.appendChild(starElement)
        }

        $night.appendChild($fragment)

    })

    .then(()=> {
        return createStars(250, ()=> {
            const  $fragment = document.createDocumentFragment()

            for(let i = 0; i < 200; i++) {
                const starPosition = randomGridPosition()
    
                const starElement = document.createElement('div')
                starElement.style.gridRowStart = starPosition.y
                starElement.style.gridColumnStart = starPosition.x
                starElement.classList.add('star')
                starElement.classList.add('blink')
                $fragment.appendChild(starElement)
            }
    
            $night.appendChild($fragment)
        })
    })

    .then(()=> {
        return createStars(250, ()=> {
            const  $fragment = document.createDocumentFragment()

            for(let i = 0; i < 200; i++) {
                const starPosition = randomGridPosition()
    
                const starElement = document.createElement('div')
                starElement.style.gridRowStart = starPosition.y
                starElement.style.gridColumnStart = starPosition.x
                starElement.classList.add('star')
                starElement.classList.add('blink')
                $fragment.appendChild(starElement)
            }
    
            $night.appendChild($fragment)
        })
    })

    .then(()=> {
        return createStars(250, ()=> {
            const $fragment = document.createDocumentFragment()

            for(let i= 0; i < 200; i++) {
                const starPosition = randomGridPosition()

                const starElement = document.createElement('div')
                starElement.style.gridRowStart = starPosition.y
                starElement.style.gridColumnStart = starPosition.x
                starElement.classList.add('star')
                starElement.classList.add('blink')
                $fragment.appendChild(starElement)
            }

            $night.appendChild($fragment)
        })
    })

}