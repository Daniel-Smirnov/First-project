function preloader() {
    $(() => {

        setInterval(() => {
            let p = $('.preloader');
    
            p.css('opacity', 0);

            setInterval(
                () => p.remove(),
                parseInt(p.css('--duration')) * 1000
                );
                
        
            
        }, 1000);
    });
}

setInterval(() => preloader(), 600);


const jokeEl = document.getElementById('joke');
const get_joke = document.getElementById('get_joke');

get_joke.addEventListener('click', gennerateJoke);

gennerateJoke();

async function gennerateJoke() {
   const jokeRes = await fetch('https://icanhazdadjoke.com/', {
       headers: {
           'Accept': 'application/json'
       }
   });

   const joke = await jokeRes.json();


   jokeEl.innerHTML = joke.joke;
}


