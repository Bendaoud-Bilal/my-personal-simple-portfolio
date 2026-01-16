export default (t) => {
    return /*html*/`
        <section class="experience">
            <h2 class="h2">${t.title}</h2>
            <div class="experience__content">
                <div class="experience__list">
                    ${t.list.map(exp => /*html*/`
                        <div class="experience__item">
                            <div class="experience__header">
                                <h3 class="experience__company">${exp.company}</h3>
                                <span class="experience__period">${exp.period}</span>
                            </div>
                            <div class="experience__position">${exp.position}</div>
                            <div class="experience__location">${exp.location}</div>
                            <p class="experience__description">${exp.description}</p>
                        </div>
                    `).join("")}
                </div>
            </div>
        </section>
    `
}
