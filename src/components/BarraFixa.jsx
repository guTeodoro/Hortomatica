import iconHortomatica from "../assets/icon-hortomatica.png"

function BarraFixa () {
    return (
        <div className="bg-black">
            <img src={iconHortomatica} alt="Voltar ao início" />
            <h1 className="text-white">Hortomática</h1>
            <a href="" className="text-white">Integrantes</a>
            <a href="" className="text-white">Funcionamento</a>
            <a href="" className="text-white">Componentes</a>
            <a href="" className="text-white">Referências</a>
        </div>
    )
}

export default BarraFixa