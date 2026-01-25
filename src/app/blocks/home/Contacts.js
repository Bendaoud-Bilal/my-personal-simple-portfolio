import media from "@/consts/media";

const contacts = [
    {
        name: "email",
        text: media.emailRaw,
    },
    {
        name: "github",
        text: media.githubRaw,
    },
    {
        name: "facebook",
        text: "Facebook",
    },
    {
        name: "instagram",
        text: "@bilalbendaoud",
    },
    {
        name: "telegram",
        text: media.telegramRaw,
    },
    {
        name: "whatsapp",
        text: "+213551243673",
    },
    {
        name: "viber",
        text: "+213551243673",
    },
    {
        name: "discord",
        text: media.discordRaw,
    }
];

export default (t) => {
    return /*html*/ `
        <sections class="contacts" id="contacts">
            <h2 class="h2">${t.title}</h2>
            <div class="contacts__content">
                <p class="contacts__description">${t.text}</p>
                <div class="contacts__media">
                    <h3 class="contacts__title">${t.media}</h3>
                    <div class="contacts__list">
                        ${contacts
                            .map(
                                (contact) => /*html*/ `
                            <a class="contact" href="${media[contact.name]}">
                                <img src="/images/icons/${
                                    contact.name
                                }.svg" alt="">
                                <div class="contact__name">${contact.text}</div>
                            </a>
                        `
                            )
                            .join("")}
                    </div>
                </div>
            </div>

        </sections>
    `;
};
