const btn_theme = document.querySelector('#themeDark');
const themeClass = document.querySelectorAll('.target');

btn_theme.addEventListener('change', ()=>{
    themeClass.forEach((e)=>{
        e.classList.toggle('darkmode');
    })
});



