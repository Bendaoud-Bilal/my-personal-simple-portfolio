import routes from "@/consts/routes";
import MediaIcon from "./MediaIcon";

const paths = ["/", "/projects", "/about-me", "/contacts"]

export default (t) => {
    return /*html*/ `
        <header class="header">
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
                    <div class="header__links">
                        ${paths
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
