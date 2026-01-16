export default (t) => {
    return /*html*/`
        <section class="languages">
            <h2 class="h2">${t.title}</h2>
            <div class="languages__content">
                <div class="languages__list">
                    ${t.list.map(lang => /*html*/`
                        <div class="languages__item">
                            <span class="languages__name">${lang.language}</span>
                            <span class="languages__level">${lang.level}</span>
                        </div>
                    `).join("")}
                </div>
            </div>
        </section>
    `
}
