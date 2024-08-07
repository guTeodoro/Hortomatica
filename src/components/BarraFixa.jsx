import iconHortomatica from "../assets/icon-hortomatica.png"

function BarraFixa () {
    return (
        <div className="bg-black">
            <a href="/"><img src={iconHortomatica} alt="Voltar ao início" /> <h1 className="text-white">Hortomática</h1> </a>        
            <a href="/integrantes" className="text-white">Integrantes</a>
            <a href="/funcionamento" className="text-white">Funcionamento</a>
            <a href="/componentes" className="text-white">Componentes</a>
            <a href="/referencias" className="text-white">Referências</a>
        </div>
    )
}

export default BarraFixa