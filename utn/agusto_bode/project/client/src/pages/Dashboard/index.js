
export default function Dashboard() {

    const nombre = "Augusto Bode";
    const avatar = "Albert Einstein";
    const image = "https://rickandmortyapi.com/api/character/avatar/11.jpeg"

    return (
        <div>
            <img src={image} style={{ paddingBottom: "30px" }}></img>

            <h2 style={{ paddingBottom: "30px", textAlign: "center" }}>{avatar}</h2>

            <h2 style={{ textAlign: "center" }}>{nombre}</h2>
        </div>
    )
}