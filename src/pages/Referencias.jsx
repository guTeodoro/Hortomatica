import React from 'react'
import BarraFixa from '../components/BarraFixa'

function Referencias() {
  return (
    <div>
      <BarraFixa />
      <section className="flex items-center justify-center bg-[url('/inicio-img.png')] bg-cover bg-top w-full h-[272px] lg:bg-none">

        <section className="bg-black h-24 flex items-center justify-center w-72 mt-14 relative z-10 lg:mt-40 lg:w-[536px] lg:h-28 lg:mr-[536px]">
          <h1 className="text-white w-64 text-2xl font-bold text-center mr-2 mb-2 lg:text-4xl lg:w-[624px]">Cientistas afirmam que...</h1>
        </section>

        <section className="bg-purple-700 w-72 h-24 ml-8 mt-20 absolute z-0 lg:mt-48 lg:w-[536px] lg:h-28 lg:mr-[536px]">
          <p className="text-purple-700">a</p>
        </section>

      </section>

      <section className='bg-black text-white flex flex-col justify-center items-center text-center pb-24 lg:bg-white lg:text-black lg:mt-20 lg:pb-16'>

        <hr className='border-4 border-white w-60 mt-7 mb-8 lg:hidden' />
        <p className='mb-5 w-[352px] font-semibold lg:font-bold lg:w-full lg:mr-96'>-As hortas automáticas podem parecer limitadas, mas são consideradas expansíveis.</p>
        <p className='mb-5 w-[352px] font-semibold lg:font-bold lg:w-full lg:mr-[444px]'>-Projetos como estes podem reduzir consideravelmente o consumo de água.</p>
        <p className='w-[352px] font-semibold lg:font-bold lg:w-full'>-Hortas automáticas podem ampliar a produtividade, assim minimizando o esforço, mas ainda sendo sustentável a curto e longo prazo.</p>

      </section>

      <section className='w-full bg-purple-700 text-purple-700 h-2'>
        <p></p>
      </section>

      <section className='w-full bg-green-400 text-green-400 h-2 text-'>
        <p></p>
      </section>

      <section className='w-full bg-black text-black h-2'>
        <p></p>
      </section>

      <section className='w-full bg-green-400 text-green-400 h-2'>
        <p></p>
      </section>
      
      <section className='flex flex-col justify-center items-center pb-24 mt-10 lg:justify-start lg:items-start lg:pb-16'>
        <h2 className='text-2xl font-bold lg:mb-10 lg:text-4xl lg:ml-40'>Referências:</h2>
        <hr className='border-4 border-black w-60 mt-5 mb-8 lg:hidden' />
        <a className='text-blue-500 font-bold w-72 mb-14 lg:mb-4 lg:ml-40 text-wrap' href=" https://revistas.pucsp.br/risus/article/view/50810">Puc</a>
        <a className='text-blue-500 font-bold w-72 mb-14 lg:mb-4 lg:ml-40' href="https://pesquisafatec.com.br/ojs/index.php/efatec/article/view/291">Pesquisa Fatec</a>
        <a className='text-blue-500 font-bold w-72 lg:mb-4 lg:ml-40' href="https://repositorio.ufersa.edu.br/server/api/core/bitstreams/2db96d78-2e4f-4fc1-b7a8-4f2bf29491ab/content">UFRSA</a>
      </section>

    </div>
  )
}

export default Referencias
