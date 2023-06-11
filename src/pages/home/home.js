import "./home.css";
import addMenu from "../menu/menu.js";
import menuBackgroundImagePath from "../../assets/images/krusty-krab-inside.png";

function addHome() {
    const container = document.createElement("div");
    container.className = "home";

    const paragraph = document.createElement("h1");
    paragraph.className = "home__title";
    paragraph.innerHTML = "Come aboard the Krusty Krab";

    const contentDiv = document.getElementById("content");
    const menuLink = document.getElementById("menu-link");
    const homeLink = document.getElementById("home-link");
    const contactLink = document.getElementById("contact-link");
    const menuBackgroundImage = document.createElement("img");
    menuBackgroundImage.src = menuBackgroundImagePath;
    menuBackgroundImage.className = "background-image";
    const navbar = document.getElementById("navbar");

    const button = document.createElement("button");
    button.textContent = "Order Now";
    button.className = "home__button";
    button.addEventListener("click", () => {
        contentDiv.textContent = "";
        menuLink.className = "navbar__nav__item navbar__nav__item--active";
        homeLink.className = contactLink.className = "navbar__nav__item";
        contentDiv.append(menuBackgroundImage);
        contentDiv.append(navbar);
        addMenu();
    });

    container.append(paragraph, button);
    contentDiv.append(container);
}

export default addHome;
