import websites from "../consts/websites"


export default {
    get(target, name) {
        if (name === "emailRaw") 
            return target.email
        
        if (name === "githubRaw")
            return target.github

        return `${name === "email" ? "" : "https://"}${websites[name] ?? ""}${target[name]}`
    }
}