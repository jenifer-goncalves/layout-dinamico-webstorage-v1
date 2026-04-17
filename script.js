const colorPicker = document.querySelector('#color-picker');
const fonte = document.querySelector('#font-select');
const colorArtigos = document.querySelector('#article-color-picker');
const themeToggle = document.querySelector('#theme-toggle');
const body = document.querySelector('body');
const newsArticles = document.querySelector('.news');


// verifica o localstorage com as preferencias do usuario (utilizando if's)
const loadPreferences = () =>{
    // Cor
    const savedColor = localStorage.getItem('primaryColor');
    if (savedColor){
        document.documentElement.style.setProperty('--primary-color', savedColor);
        colorPicker.value = savedColor;
    }

    // Cor dos Artigos 
    const savedArticleColor = localStorage.getItem('articleColor');
    if (savedArticleColor){
        document.documentElement.style.setProperty('--bg-color', savedArticleColor);
        colorArtigos.value = savedArticleColor;
    }

    // Fonte
    const savedFont = localStorage.getItem('font-family');
    if (savedFont){
        body.style.fontFamily = savedFont
        fonte.value = savedFont;
    }

    // Tema
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark'){
        body.classList.add('dark')
        themeToggle.innerHTML = '<span class="material-icons">dark_mode</span>';
    }

}

colorPicker.addEventListener('input', (e) => {
    const color = e.target.value;
    document.documentElement.style.setProperty('--primary-color', color);
    localStorage.setItem('primaryColor', color);
});

colorArtigos.addEventListener('input', (e) => {
    const color = e.target.value;
    console.log(color)
    newsArticles.forEach(article => {article.style.backgroundColor = color;});
    localStorage.setItem('articleColor', color);

});

fonte.addEventListener('change', (e) => {
    const fonte = e.target.value;
    console.log(fonte);
    document.documentElement.style.setProperty('--font-family', fonte);
    localStorage.setItem('fontFamily', fonte);
});

themeToggle.addEventListener('click', () =>{
    const isDark = body.classList.toggle('dark');
   
    themeToggle.textContent = ''; 

    const iconeSpan = document.createElement('span');
    iconeSpan.className = 'material-icons';
    iconeSpan.textContent = isDark ? 'light_mode' : 'dark_mode';

   // Lembra que o appendChild vai colocar no final da lista plmds!!!
    themeToggle.appendChild(iconeSpan);

    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

loadPreferences();