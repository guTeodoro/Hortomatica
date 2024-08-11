import iconHortomatica from "../assets/icon-hortomatica.png"

function BarraFixa () {
    return (       
        <div className="border-b-8 border-green-400 fixed top-0 left-0 right-0 z-20" >
            <div className="bg-black flex h-[72px] border-b-8 border-purple-700 ">
                <a href="/" className="flex justify-center items-center ml-5 mt-1 "><img src={iconHortomatica} alt="Voltar ao início" className="w-10 mt-7" /> <h1 className="text-white ml-2 mt-5 text-2xl font-semibold">Hortomática</h1></a>        
                <a href="/integrantes" className="text-white">Integrantes</a>
                <a href="/funcionamento" className="text-white">Funcionamento</a>
                <a href="/componentes" className="text-white">Componentes</a>
                <a href="/referencias" className="text-white">Referências</a>
            </div>
        </div>
    )
}

export default BarraFixa