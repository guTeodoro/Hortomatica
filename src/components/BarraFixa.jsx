import { Link } from "react-router-dom"
import iconHortomatica from "../assets/icon-hortomatica.png"
import menuburger from "/menu-burger.png"
import { useState } from 'react'

function BarraFixa() {

    const [aberto, setAberto] = useState(false);

    function ativarMenu () {
        setAberto(!aberto)
    }

    return (
        <div className="border-b-8 border-green-400 fixed top-0 left-0 right-0 z-20" >
            <div className="bg-black flex h-[72px] border-b-8 border-purple-700 z-30 lg:h-24 list-none">
                <a href="/" className="flex justify-center items-center ml-0 mt-1 absolute"><img src={iconHortomatica} alt="Voltar ao início" className="w-10 mt-7 z-20 lg:w-16" /> <h1 className="text-white ml-2 mt-3 text-2xl font-semibold lg:text-5xl z-40">Hortomática</h1></a>
                <li><Link to={'/'}>Inicio</Link></li>

                <button className="relative lg:hidden ml-auto z-50" onClick={ativarMenu}>
                    {aberto ? (
                        <div className="block justify-center items-center bg-black z-30 lg:hidden pt-6  border-purple-700 ">
                            <p className="text-white font-bold text-4xl w-6 ml-auto mr-4">X</p>          
                            <div className=" block justify-center items-center bg-black z-50 lg:hidden pt-0 border-l-4 border-b-4 border-t-8 border-r-4 border-t-purple-700 border-x-green-400 border-b-green-400 px-0 pl-0 pb-5 font-semibold ">
                                <div className="border-b-8 border-green-400 w-full"></div>
                                <hr className="border-2 border-white w-28 mb-8 mt-4 ml-10 mr-2 " />
                                <li className="text-white text-sm mt-1 ml-14 "><Link to={'/integrantes'} >Integrantes</Link></li>
                                <li className="text-white text-sm mt-4 ml-7 "><Link to={'/funcionamento'} >Funcionamento</Link></li>
                                <li className="text-white text-sm mt-4 ml-9 "><Link to={'/componentes'} >Componentes</Link></li>
                                <li className="text-white text-sm mt-4 ml-14 "><Link to={'/referencias'} >Referencias</Link></li>
                            </div>
                        </div>
                    ):(
                        <img src={menuburger} alt="" srcset="" className="w-9 h-9 mt-6 lg:hidden mr-4" />
                    )}
                </button>

                <div className="flex mob:hidden ml-auto mr-10">
                    <li className="text-white mob:hidden font-semibold mt-10"><Link to={'/integrantes'} >Integrantes</Link></li>
                    <li className="text-white mob:hidden ml-10 font-semibold mt-10"><Link to={'/funcionamento'} >Funcionamento</Link></li>
                    <li className="text-white mob:hidden ml-10 font-semibold mt-10"><Link to={'/componentes'} >Componentes</Link></li>
                    <li className="text-white mob:hidden ml-10 font-semibold mt-10"><Link to={'/referencias'} >Referencias</Link></li>
                </div>
            
            </div>
        </div>
    )
}

export default BarraFixa