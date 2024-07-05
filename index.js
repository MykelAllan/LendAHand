window.addEventListener('DOMContentLoaded', () => {
    const homePage = document.getElementById('home-page'),
        landPage = document.getElementById('landing-page'),
        notifPage = document.getElementById('notif-page');

    const navBtns = Array.from(document.getElementsByClassName('btn-page'));

    navBtns.forEach(navBtn => {
        navBtn.addEventListener('click', () => openDifferentPage(navBtn));
    })

    function openDifferentPage(navBtn) {
        switch (navBtn.textContent)  {
            case "Home Page" :
                console.log("opening land page")
                homePage.style.display = 'flex';
                landPage.style.display = 'none';
                notifPage.style.display = 'none';
                break;
            case "Land Page" :
                homePage.style.display = 'none';
                landPage.style.display = 'flex';
                notifPage.style.display = 'none';
                break;
            case "Notification Page" :
                homePage.style.display = 'none';
                landPage.style.display = 'none';
                notifPage.style.display = 'flex';
                break;

        }
        
        
    }
    

    
})