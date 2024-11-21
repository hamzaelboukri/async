
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


async function showContentAfterDelay() {
    
    await delay(3000);

  
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.display = 'none';

    
    const nav = document.querySelector('nav');
    const center = document.querySelector('.center');
    nav.style.display = 'aline-block';
    center.style.display = 'aline-block';
}


document.addEventListener('DOMContentLoaded', showContentAfterDelay);
