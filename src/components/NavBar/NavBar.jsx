import CardWidget from "../CartWidget/CardWidget";

export default function navbar() {
    return (
        <nav>
            <div className="fixed top-0 right-10 flex justify-end items-start space-x-4 p-4">
                <ul>
                    <button>Ropa</button>
                    <button>Remeras</button>
                    <button>Buzos</button>
                    <button>Pantalones</button>
                </ul>
            </div>
            <div className="fixed top-0 right-0 flex justify-end items-start space-x-4 p-4">
                <CardWidget/>
            </div>
        </nav>
    )
}