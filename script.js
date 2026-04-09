const colorPicker = document.querySelector('#color-picker');
const fonte = document.querySelector('#font-select');
const colorArtigos = document.querySelector('#article-color-picker');
const themeToggle = document.querySelector('#theme-toggle');
const body = document.querySelector('body');
const newsArticles = document.querySelector('.news');


// verifica o localstorage com as preferencias do usuario
const loadPreferences = () =>{
}

colorPicker.addEventListener('input', (e) => {
    const color = e.target.value;
    console.log(color)
    document.documentElement.style.setProperty('--primary-color', color);
    localStorage.setItem('primaryColor', color);
});

colorArtigos.addEventListener('input', (e) =>{
    const color = e.target.value;
    newsArticles.forEach(article => {article.style.backgroundColor = color;});
    localStorage.setItem('articleColor', color);

});

fonte.addEventListener('change', (e) =>{
});

themeToggle.addEventListener('click', () =>{
});

