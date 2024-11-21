
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


async function afterDelay() {
    
    await delay(2000);

  
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.display = 'none';

    
 
}


document.addEventListener('DOMContentLoaded', afterDelay);

const box= document.querySelectorAll('.moviers')
const options={
   
    root : null, //view port
rootMargin:'100px 0px' 

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

    await delay(2000);
    const res = await fetch('json.json'); 

    const data = await res.json();
    return data;

}

document.querySelectorAll('.show-details').forEach((button, index) => {
    button.addEventListener('click', async function () {
        const movies = await getdata();
        const movie = movies[index]; 

       
        const newPage =
         `
            <html>
            <head>
                <title>${movie.name} - Details</title>
                <style>
  body {
    font-family: 'Roboto', Arial, sans-serif;
    text-align: center;
    margin: 0;
    padding: 0;
    background-color: #1e293b; 
    color: #f1f5f9; 
    line-height: 1.6;
}


h1 {
    font-size: 2.5rem;
    margin-top: 20px;
    color: #38bdf8; 
    text-transform: uppercase;
    letter-spacing: 2px;
}

img {
    width: 300px;
    height: auto;
    margin: 20px auto;
    border-radius: 15px;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3); 
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

img:hover {
    transform: scale(1.1); 
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.5); 
}


.description {
    margin-top: 20px;
    font-size: 18px;
    color: #94a3b8; 
    padding: 10px 20px;
    background-color: #334155; 
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    display: inline-block;
    text-align: left;
    max-width: 600px;
    line-height: 1.8;
}

/
button {
    background-color: #38bdf8; 
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 12px 20px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 20px;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

button:hover {
    background-color: #0284c7; 
    transform: scale(1.1); 
}
/* الفوتر */
footer {
    margin-top: 30px;
    font-size: 14px;
    color: #94a3b8;
    padding: 10px;
    background-color: #0f172a; /
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
