
async function getpost(){
    const myjoke = await fetch('https://official-joke-api.appspot.com/random_joke');
    const response = await myjoke.json();
    console.log(response);
}

getpost();