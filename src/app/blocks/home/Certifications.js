export default (t) => {
    return /*html*/`
        <section class="certifications">
            <h2 class="h2">${t.title}</h2>
            <div class="certifications__content">
                <div class="certifications__list">
                    ${t.list.map(cert => /*html*/`
                        <div class="certifications__item">
                            <div class="certifications__header">
                                <h3 class="certifications__name">${cert.name}</h3>
                                <span class="certifications__date">${cert.date}</span>
                            </div>
                            <div class="certifications__issuer">${cert.issuer}</div>
                        </div>
                    `).join("")}
                </div>
            </div>
        </section>
    `
}
