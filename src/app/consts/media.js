import proxy from "../proxies/media"

const media = {
    github: "bilalbendaoud",
    email: "bendaoudbilal717@gmail.com",
    phone: "+213 0699779682",
    location: "Ouargla, Algeria / Bejaia, Algeria"
}

export default new Proxy(media, proxy);
