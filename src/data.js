import {v4 as uuid4} from "uuid";

function chillhop(){
    return [
        {
            name: "Sunrise Hike",
            artist: "Ruck P",
            cover: "https://uploads-ssl.webflow.com/5fc4bca9bd65e8f2bf87f576/605072dd8914772a1df825a9_ow9bl5athaeho9m.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=12029",
            id: uuid4(),
            active: false,
            color: ["#61B3A3", "#EE977C"]
        },
        {
            name: "Desire",
            artist: "Psalm Trees, Guillaume Muschalle",
            cover: "https://i.scdn.co/image/ab67616d0000b273f840ef054046580dc12db112",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10550",
            id: uuid4(),
            active: false,
            color: ["#EADFCD", "#D3392D"]
        },        
        {
            name: "Seascape",
            artist: "Makzo",
            cover: "https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=11772",
            id: uuid4(),
            active: true,
            color: ["#4C61A0", "#F5A966"]
        },
        {
            name: "Cascade",
            artist: "Knowmadic",
            cover: "https://chillhop.com/wp-content/uploads/2021/02/70a56749b8b89815fa75446030c6ba57d2c34de7-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=13091",
            id: uuid4(),
            active: false,
            color: ["#6DBF9B", "#FCD7C7"]
        },
        {
            name: "Everything Fades to Blue",
            artist: "Sleepy Fish",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10018",
            id: uuid4(),
            active: false,
            color: ["#256C8F", "#FCEAD5"]
        },        
        {
            name: "Directions",
            artist: "Blue Wednesday, Shopan",
            cover: "https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=11232",
            id: uuid4(),
            active: false,
            color: ["#C180A8", "#B8AADB"]
        },
        {
            name: "Forest Lore",
            artist: "Aarigod",
            cover: "https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=13004",
            id: uuid4(),
            active: false,
            color: ["#BDD277", "#BCA154"]
        },
        {
            name: "Cabin in the Woods",
            artist: "Philanthrope",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10248",
            id: uuid4(),
            active: false,
            color: ["#CD4C3F", "#905644"]
        },
        {
            name: "Seafoam",
            artist: "Blue Wednesday, Dillan Witherow, Sleepy Fish",
            cover: "https://chillhop.com/wp-content/uploads/2020/07/2a048a5780723e66fff64c3a60814ea64761284f-300x300.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=6757",
            id: uuid4(),
            active: false,
            color: ["#F0BCC0", "#DFE5E3"]
        }
    ];
}

export default chillhop;