
export function logoNavbar() {
    const $logo = document.querySelector('.logo')
    const $logo_text = document.querySelector('.logo-text')
    const $nav_links = document.querySelector('.nav-links')
    const $logo_click = document.querySelector('.logo-click')

    $logo_click.addEventListener('click', ()=> {
        $logo.classList.toggle('active')
        $logo_text.classList.toggle('active')
        $nav_links.classList.toggle('active')
        $logo_click.classList.toggle('active')

        if ($logo_click.classList.contains('active')) {
            $logo_click.innerHTML = "<i class='bx bx-redo'></i>"
        } else {
            $logo_click.innerHTML = "<i class='bx bx-tag-alt'></i>"
        }
        
    })

}
