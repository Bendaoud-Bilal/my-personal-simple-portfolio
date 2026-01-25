import Path from "@/components/Path.js";
import media from "@/consts/media";

import "styles/pages/contacts.sass"

export default (t) => {
    return /*html*/ `
        ${Path({ description: t.description })}
        <section class="contacts-page">
            <div class="contacts-page__content">
                <div class="contacts-page__info">
                    <h2 class="h2">Get in Touch</h2>
                    <p class="contacts-page__description">
                        I'm currently open for internship and job opportunities in Cyber Security and Backend Development. 
                        Feel free to reach out if you have any questions or just want to connect!
                    </p>
                    
                    <div class="contacts-page__details">
                        <div class="contact-item">
                            <img src="/images/icons/email.svg" alt="Email" class="contact-item__icon">
                            <div class="contact-item__content">
                                <h3 class="contact-item__title">Email</h3>
                                <a href="${media.email}" class="contact-item__link">${media.emailRaw}</a>
                            </div>
                        </div>
                        
                        <div class="contact-item">
                            <img src="/images/icons/github.svg" alt="GitHub" class="contact-item__icon">
                            <div class="contact-item__content">
                                <h3 class="contact-item__title">GitHub</h3>
                                <a href="${media.github}" target="_blank" class="contact-item__link">${media.githubRaw}</a>
                            </div>
                        </div>
                        
                        <div class="contact-item">
                            <img src="/images/icons/facebook.svg" alt="Facebook" class="contact-item__icon">
                            <div class="contact-item__content">
                                <h3 class="contact-item__title">Facebook</h3>
                                <a href="${media.facebook}" target="_blank" class="contact-item__link">Bilal Bendaoud</a>
                            </div>
                        </div>
                        
                        <div class="contact-item">
                            <img src="/images/icons/instagram.svg" alt="Instagram" class="contact-item__icon">
                            <div class="contact-item__content">
                                <h3 class="contact-item__title">Instagram</h3>
                                <a href="${media.instagram}" target="_blank" class="contact-item__link">@bilalbendaoud</a>
                            </div>
                        </div>
                        
                        <div class="contact-item">
                            <img src="/images/icons/telegram.svg" alt="Telegram" class="contact-item__icon">
                            <div class="contact-item__content">
                                <h3 class="contact-item__title">Telegram</h3>
                                <a href="${media.telegram}" target="_blank" class="contact-item__link">@BILAL_2XB</a>
                            </div>
                        </div>
                        
                        <div class="contact-item">
                            <img src="/images/icons/whatsapp.svg" alt="WhatsApp" class="contact-item__icon">
                            <div class="contact-item__content">
                                <h3 class="contact-item__title">WhatsApp</h3>
                                <a href="${media.whatsapp}" target="_blank" class="contact-item__link">+213551243673</a>
                            </div>
                        </div>
                        
                        <div class="contact-item">
                            <img src="/images/icons/viber.svg" alt="Viber" class="contact-item__icon">
                            <div class="contact-item__content">
                                <h3 class="contact-item__title">Viber</h3>
                                <a href="${media.viber}" target="_blank" class="contact-item__link">+213551243673</a>
                            </div>
                        </div>
                        
                        <div class="contact-item">
                            <img src="/images/icons/discord.svg" alt="Discord" class="contact-item__icon">
                            <div class="contact-item__content">
                                <h3 class="contact-item__title">Discord</h3>
                                <span class="contact-item__text">w2xbw</span>
                            </div>
                        </div>
                        
                        <div class="contact-item">
                            <img src="/images/icons/location.svg" alt="Location" class="contact-item__icon">
                            <div class="contact-item__content">
                                <h3 class="contact-item__title">Location</h3>
                                <span class="contact-item__text">Ouargla, Algeria / Bejaia, Algeria</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="contacts-page__form-wrapper">
                    <h3 class="contacts-page__form-title">Send a Message</h3>
                    <form class="contact-form" id="contact-form">
                        <div class="contact-form__group">
                            <label for="name" class="contact-form__label">Name</label>
                            <input type="text" id="name" name="name" class="contact-form__input" placeholder="Your name" required>
                        </div>
                        
                        <div class="contact-form__group">
                            <label for="email" class="contact-form__label">Email</label>
                            <input type="email" id="email" name="email" class="contact-form__input" placeholder="your.email@example.com" required>
                        </div>
                        
                        <div class="contact-form__group">
                            <label for="subject" class="contact-form__label">Subject</label>
                            <input type="text" id="subject" name="subject" class="contact-form__input" placeholder="What's this about?">
                        </div>
                        
                        <div class="contact-form__group">
                            <label for="message" class="contact-form__label">Message</label>
                            <textarea id="message" name="message" class="contact-form__textarea" rows="5" placeholder="Your message..." required></textarea>
                        </div>
                        
                        <button type="submit" class="button button__primary contact-form__submit">
                            Send Message =>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    `;
};
