import websites from "../consts/websites"


export default {
    get(target, name) {
        if (name === "emailRaw") 
            return target.email
        
        if (name === "githubRaw")
            return target.github
        
        if (name === "telegramRaw")
            return "@" + target.telegram
        
        if (name === "discordRaw")
            return target.discord
        
        if (name === "facebookRaw" || name === "instagramRaw" || name === "viberRaw" || name === "whatsappRaw")
            return target[name.replace("Raw", "")]

        // Handle viber specially (viber:// protocol)
        if (name === "viber")
            return `${websites[name]}${target[name]}`

        return `${name === "email" ? "" : "https://"}${websites[name] ?? ""}${target[name]}`
    }
}