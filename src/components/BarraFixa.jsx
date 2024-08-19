import { Link } from "react-router-dom"
import iconHortomatica from "../assets/icon-hortomatica.png"
import menuburger from "/menu-burger.png"

function BarraFixa() {
    return (
        <div className="border-b-8 border-green-400 fixed top-0 left-0 right-0 z-20" >
            <div className="bg-black flex h-[72px] border-b-8 border-purple-700 z-30 lg:h-24 list-none">
                <a href="/" className="flex justify-center items-center ml-0 mt-1 "><img src={iconHortomatica} alt="Voltar ao início" className="w-10 mt-7 z-20 lg:w-16" /> <h1 className="text-white ml-2 mt-3 text-2xl font-semibold lg:text-5xl">Hortomática</h1></a>
                <img src={menuburger} alt="" srcset="" className="w-9 h-9 mt-6 ml-[36%] lg:hidden" />
                <li><Link to={'/'}>Inicio</Link></li>
                <li><Link to={'/componentes'} className="text-white mob:hidden ml-12 font-semibold mt-10">Componentes</Link></li>
                <li><Link to={'/referencias'} className="text-white mob:hidden ml-12 font-semibold mt-10">Referencias</Link></li>
                <li><Link to={'/integrantes'} className="text-white mob:hidden ml-[32%] font-semibold mt-10">Integrantes</Link></li>
                <li><Link to={'/funcionamento'} className="text-white mob:hidden ml-12 font-semibold mt-10">Funcionamento</Link></li>
            </div>
        </div>
    )
}

export default BarraFixa