const defaultLocale = "en"
const rtlLocales = ["ar"]
const validLocales = ["en", "fr", "ar"]


function setLocaleHander() {
    const options = document.querySelectorAll(".dropdown__option");
    const label = document.querySelector(".dropdown__label");
    
    // Reset to default if stored locale is invalid
    if (localStorage.locale && !validLocales.includes(localStorage.locale)) {
        localStorage.locale = defaultLocale;
    }
    
    const currentLocale = localStorage.locale ?? defaultLocale;

    // Apply RTL direction for Arabic
    if (rtlLocales.includes(currentLocale)) {
        document.documentElement.setAttribute("dir", "rtl");
        document.documentElement.setAttribute("lang", currentLocale);
    } else {
        document.documentElement.setAttribute("dir", "ltr");
        document.documentElement.setAttribute("lang", currentLocale);
    }

    options.forEach((option) => {
        if (option.innerHTML === localStorage.locale) 
            [label.innerHTML, option.innerHTML] = [localStorage.locale, label.innerHTML]

        option.addEventListener("click", () => {
            localStorage.locale = option.innerHTML;

            window.location.reload();
        });
    });
}

async function getLocale() {
    // Reset to default if stored locale is invalid
    if (localStorage.locale && !validLocales.includes(localStorage.locale)) {
        localStorage.locale = defaultLocale;
    }
    
    const locale = localStorage.locale ?? defaultLocale

    return fetch(`/locales/${locale}.json`).then(res => res.json())
}

export default setLocaleHander;
export { getLocale }
