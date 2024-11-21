
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


async function showContentAfterDelay() {
    
    await delay(2000);

  
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.display = 'none';

    
    const nav = document.querySelector('nav');
    const center = document.querySelector('.center');
    nav.style.display = 'aline-block';
    center.style.display = 'aline-block';
}


document.addEventListener('DOMContentLoaded', showContentAfterDelay);

const box= document.querySelectorAll('.moviers')
const options={
   
    root : null, //view port
rootMargin:'100px ' 

}


const observe = new IntersectionObserver((entries)=> 

{
  
    entries.forEach(el => {
el.target.classList.toggle('slide',el.isIntersecting)



    })

},options)


box.forEach(box=>
{
    observe.observe(box)
})

// Load JSON data
async function getdata() {
    const res = await fetch('json.json'); 
    const data = await res.json();
    return data;
}

document.querySelectorAll('.show-details').forEach((button, index) => {
    button.addEventListener('click', async function () {
        const movies = await getdata();
        const movie = movies[index]; 

       
        const newPage = `
            <html>
            <head>
                <title>${movie.name} - Details</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        text-align: center;
                        margin: 20px;
                        background-color: #f4f4f4;
                    }
                    img {
                        width: 300px;
                        height: auto;
                        margin-top: 20px;
                    }
                    .description {
                        margin-top: 20px;
                        font-size: 18px;
                        color: #333;
                    }
                </style>
            </head>
            <body>
                <h1>${movie.name}</h1>
                <img src="./imag/imag${index + 1}.jpg" alt="Movie Image">
                <div class="description">
                    <p>${movie.description}</p>
                    <p><strong>Characters:</strong> ${movie.Characters.join(", ")}</p>
                </div>
            </body>
            </html>
        `;

        
        const newWindow = window.open();
        newWindow.document.write(newPage);
        newWindow.document.close();
    });
});
