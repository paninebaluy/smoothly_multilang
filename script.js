const ruHeader = document.getElementById("header-ru");
const enHeader = document.getElementById("header-en");
const ruMain = document.getElementById("root-ru");
const enMain = document.getElementById("root-en");

const switchToRussian = () => {
    [enHeader, enMain].forEach(element => {
        element.classList.add("hidden");
    });
    [ruHeader, ruMain].forEach(element => {
        element.classList.remove("hidden");
    });
}

const switchToEnglish = () => {
    [ruHeader, ruMain].forEach(element => {
        element.classList.add("hidden");
    });
    [enHeader, enMain].forEach(element => {
        element.classList.remove("hidden");
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const lang = window.navigator.language||navigator.browserLanguage;
    if (lang.includes("ru-RU")) {
        switchToRussian();
    } else {
        switchToEnglish();
        //window.location.href = window.location.href.replace(".html", "-en.html");
    }
});

document.querySelectorAll(".header__button").forEach(element => {
    element.addEventListener("click", (event) => {
        if (element.textContent.includes("RU")) {
            switchToRussian();
        } else {
            switchToEnglish();
        }
    });
});

console.log(window.location.href);