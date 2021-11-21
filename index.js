const themeToggle =  document.getElementById('toggle')
const body = document.body;

const changeTheme = (e) => {
       if(e.target.checked) {
            body.classList.add("dark");
       } else  body.classList.remove("dark");
}

themeToggle.addEventListener('change', changeTheme)