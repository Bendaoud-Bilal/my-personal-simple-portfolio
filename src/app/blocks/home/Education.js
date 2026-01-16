export default (t) => {
    return /*html*/`
        <section class="education">
            <h2 class="h2">${t.title}</h2>
            <div class="education__content">
                <div class="education__list">
                    ${t.list.map(edu => /*html*/`
                        <div class="education__item">
                            <div class="education__header">
                                <h3 class="education__institution">${edu.institution}</h3>
                                <span class="education__period">${edu.period}</span>
                            </div>
                            <div class="education__degree">${edu.degree}</div>
                            <div class="education__location">${edu.location}</div>
                            <div class="education__grade">${edu.grade}</div>
                        </div>
                    `).join("")}
                </div>
            </div>
        </section>
    `
}
