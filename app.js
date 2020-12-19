const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbarlinks');
    const navlink = document.querySelectorAll('.navlink');

    burger.addEventListener('click', () => {
    
        //Toggle Nav
            nav.classList.toggle('navactive');
  

        //Animate Links
            navlink.forEach((link) => {

                if(link.style.animation){
                    link.style.animation = '';
                } else {
                    link.style.animation = 'navlinkfade .5s ease forwards ${index / 7 + 1}s';
                }
            });
    
    
    });

}

navSlide();