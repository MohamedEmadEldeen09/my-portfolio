


export const manageSideMenuAndButton = (setMenuDisplay)=>{
    if(window.innerWidth <= 830){
        const portfolioContainer = document.getElementById('portfolio-container-id')
        const sideMenu = document.getElementById('main-side-menu')
        if(sideMenu){
            sideMenu.classList.add('display-none')
        }
        if(portfolioContainer){
            portfolioContainer.style.gridTemplateColumns = '1fr'
        }

        return true
    }

    if(window.innerWidth > 830){      
        const portfolioContainer = document.getElementById('portfolio-container-id')
        const sideMenu = document.getElementById('main-side-menu')
        if(sideMenu){
            sideMenu.classList.remove('display-none')
        }
        if(portfolioContainer){
            portfolioContainer.style.gridTemplateColumns = '5% 95%'      
        }     

        return false
    }
}

export const manageDisplayingSideMenu = ()=>{

}

