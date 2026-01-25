import routes from "@/consts/routes";
import MediaIcon from "./MediaIcon";

const allPaths = ["/", "/projects", "/about-me", "/contacts"]
const leftPaths = ["/", "/projects"]
const rightPaths = ["/about-me", "/contacts"]

export default (t, pageName = "") => {
    const isHomePage = pageName === "home";
    
    return /*html*/ `
        <header class="header ${isHomePage ? 'header--split' : ''}">
            <input class="hamburger" type="checkbox" aria-label="Menu" />

            <div class="media-header">
                <span class="media-header__line"></span>
                <div class="media-header__links">
                    ${["github", "email"]
                        .map((name) => MediaIcon({ name }))
                        .join("")}
                </div>
            </div>


            <div class="container">

                <div class="header__inner">
                    <a class="logo" href="/">
                        <img class="logo__img" src="/images/logo.svg" alt="Bilal Bendaoud logo">
                        <span class="logo__name">Bilal</span>
                    </a>
                    ${isHomePage ? `
                    <div class="header__links header__links--left">
                        ${leftPaths
                            .map(
                                (path) => /*html*/ `
                                <a href="${path}" class="header__link ${
                                    window.location.pathname === path
                                        ? "header__link_active"
                                        : ""
                                }">${t[routes[path].name]}</a>
                            `
                            )
                            .join("")}
                    </div>
                    <div class="header__spacer"></div>
                    <div class="header__links header__links--right">
                        ${rightPaths
                            .map(
                                (path) => /*html*/ `
                                <a href="${path}" class="header__link ${
                                    window.location.pathname === path
                                        ? "header__link_active"
                                        : ""
                                }">${t[routes[path].name]}</a>
                            `
                            )
                            .join("")}
                    </div>
                    ` : `
                    <div class="header__links">
                        ${allPaths
                            .map(
                                (path) => /*html*/ `
                                <a href="${path}" class="header__link ${
                                    window.location.pathname === path
                                        ? "header__link_active"
                                        : ""
                                }">${t[routes[path].name]}</a>
                            `
                            )
                            .join("")}
                    </div>
                    `}
                    <div class="dropdown">
                        <span class="dropdown__label">en</span>

                        <div class="dropdown__list">
                            <div class="dropdown__option">fr</div>
                            <div class="dropdown__option">ar</div>
                        </div>
                    </div>

                </div>
            </div>
            

        </header>
    `;
};
