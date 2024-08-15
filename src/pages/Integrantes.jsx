import React from 'react'
import BarraFixa from '../components/BarraFixa'
import IconePerfil from "/perfil-icon.png"

function Integrantes() {
  return (
    <div className='bg-black'>
      <BarraFixa />
      <section className="flex items-center justify-center bg-[url('/inicio-img.png')] bg-cover bg-top w-full h-[272px] lg:bg-none lg:flex-col lg:h-0">
        <section className="bg-black h-24 flex items-center justify-center w-72 mt-14 relative z-10 lg:hidden">
          <h1 className="text-white w-40 text-2xl font-bold text-center mr-2 mb-2">Integrantes:</h1>
        </section>

        <section className="bg-purple-700 w-72 h-24 ml-5 mt-20 absolute z-0 lg:hidden">
          <p className="text-purple-700">a</p>
        </section>
      </section>

      <section className='mob:hidden flex flex-col justify-center items-center text-center mt-44'>

        <h2 className='mob:hidden text-white text-4xl ml-6 font-bold'>Integrantes:</h2>
        <hr className='mob:hidden border-4 border-white w-56 ml-8 mt-8'/>

      </section>

      <section className='bg-black flex flex-col justify-center items-center pb-12 lg:flex-row lg:pb-40 lg:mt-14'>
        <hr className='border-4 border-white w-60 mt-8 lg:hidden' />
        <section className='text-white flex items-center w-80 ml-6 lg:flex-col'>
          <img src={IconePerfil} alt="" className='mt-11 lg:w-52' />
          <p className='mt-10 ml-8 font-semibold lg:ml-0 lg:text-3xl'>Thiago Teodoro</p>
        </section>
        <section className='text-white flex items-center w-80 ml-6 lg:flex-col'>
          <img src={IconePerfil} alt="" className='mt-10 lg:w-52' />
          <p className='mt-10 ml-8 font-semibold lg:ml-0 lg:text-3xl'>Gabriel Pereira</p>
        </section>
        <section className='text-white flex items-center w-80 ml-6 lg:flex-col'>
          <img src={IconePerfil} alt="" className='mt-10 lg:w-52' />
          <p className='mt-10 ml-8 font-semibold lg:ml-0 lg:text-3xl'>Gustavo Teodoro</p>
        </section>
      </section>
      
      
    </div>
  )
}

export default Integrantes
