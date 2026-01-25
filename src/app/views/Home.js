import Hero from "@/blocks/home/Hero.js";
import Quote from "@/blocks/home/Quote.js";
import Projects from "@/blocks/home/Projects.js";
import Skills from "@/blocks/home/Skills.js";
import About from "@/blocks/home/About.js";
import Experience from "@/blocks/home/Experience.js";
import Education from "@/blocks/home/Education.js";
import Certifications from "@/blocks/home/Certifications.js";
import Languages from "@/blocks/home/Languages.js";
import Contacts from "@/blocks/home/Contacts.js";

import "styles/pages/home.sass"


export default (t, locale) => {
    return /*html*/`
        <div class="blackhole-box">
            <video autoplay loop muted playsinline src="/images/blackhole.mp4"></video>
        </div>
        ${Hero(t.hero)}
        ${Quote(t.quote)}
        ${About(t.about)}
        ${Experience(t.experience)}
        ${Education(t.education)}
        ${Skills(t.skills, locale.skills)}
        ${Certifications(t.certifications)}
        ${Languages(t.languages)}
        ${Projects(t.projects, locale.projects)}
        ${Contacts(t.contacts)}
    `;
};
