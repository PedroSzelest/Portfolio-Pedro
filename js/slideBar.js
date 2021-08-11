export function img() {
    const $next = document.querySelector('.next')
    const $back = document.querySelector('.back')
    const $img = document.querySelector('.img-scroll')

    $next.addEventListener('click', ()=> {
        switch ($img.getAttribute('src')) {
            case './imgs/img to portfolio.jpg' :
                $img.src = './imgs/snake img.png'
                $img.classList.replace('active2', 'active1')
                break;

            case './imgs/snake img.png' :
                $img.src = './imgs/tic tac toe img.png'
                $img.classList.replace('active1', 'active2')
                break;
            
            case './imgs/tic tac toe img.png' :
                $img.src = './imgs/3dcube.png'
                $img.classList.replace('active2', 'active1')
                break;
            
            case './imgs/3dcube.png' :
                $img.src = './imgs/img to portfolio.jpg'
                $img.classList.replace('active1', 'active2')
                break;
            
            default: 
                return;
        }
    })

    $back.addEventListener('click', ()=> {
        switch ($img.getAttribute('src')) {
            case './imgs/img to portfolio.jpg' :
                $img.src = './imgs/3dcube.png'
                $img.classList.replace('active2', 'active1')
                break;

            case './imgs/3dcube.png' :
                $img.src = './imgs/tic tac toe img.png'
                $img.classList.replace('active1', 'active2')
                break;
            
            case './imgs/tic tac toe img.png' :
                $img.src = './imgs/snake img.png'
                $img.classList.replace('active2', 'active1')
                break;
            
            case './imgs/snake img.png' :
                $img.src = './imgs/img to portfolio.jpg'
                $img.classList.replace('active1', 'active2')
                break;
            
            default: 
                return;
        }
    })
}