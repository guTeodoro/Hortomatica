import React from 'react'
import imgHortalicas from '/img-hortalicas.png'
import imgCelular from '/img-celular.png'
import BarraFixa from '../components/BarraFixa'
import imgInicio from "/inicio-img.png"
import iconVideo from "/video-icon.png"

function Funcionamento() {
  return (
    <div>
      <BarraFixa />
      <section className="flex items-center justify-center bg-[url('/inicio-img.png')] bg-cover bg-top w-full h-[272px] lg:bg-none lg:flex-row">

            <section className="bg-black h-24 flex items-center justify-center w-72 mt-14 relative z-10 lg:h-28 lg:mt-16 lg:w-96 lg:mr-40 lg:ml-10 lg:hidden">
              <h1 className="text-white w-40 text-2xl font-bold text-center mr-2 mb-2 lg:text-4xl lg:w-72">Como ela funciona ?</h1>
            </section>

            <section className="bg-purple-700 w-72 h-24 ml-5 mt-20 absolute z-0 lg:h-28 lg:mt-20 lg:mr-[722px] lg:w-96 lg:ml-14 lg:hidden">
              <p className="text-purple-700">a</p>
            </section>

        <section className="block mt-[448px] justify-center items-center mob:hidden">
          <section className="flex">
            <section className="bg-black h-24 flex items-center justify-center w-72 mt-14 relative z-10 lg:h-28 lg:mt-16 lg:w-96 lg:mr-40 lg:ml-10">
              <h1 className="text-white w-40 text-2xl font-bold text-center mr-2 mb-2 lg:text-4xl lg:w-72">Como ela funciona ?</h1>
            </section>

            <section className="bg-purple-700 w-72 h-24 ml-5 mt-20 absolute z-0 lg:h-28 lg:mt-20 lg:mr-[722px] lg:w-96 lg:ml-14">
              <p className="text-purple-700">a</p>
            </section>
          </section>
          <p className='text-black font-bold w-[464px] leading-5 mob:hidden mt-24 ml-0 text-center text-xl'>A Hortomática foi projetada para ser simples e eficiente. Possuindo um formato de uma “caixa”, onde a terra é posta, onde por baixo há uma base impermeável, onde ficam os componentes que tornam a Hortomática automatizada. Com sensores que monitoram constantemente o nível de umidade, garantindo que a planta receba a quantidade ideal de água. </p>
        </section>

        <hr className='border-2 h-[422px] border-black mr-32 mt-[566px] mob:hidden'/>

        <img src={imgInicio} alt="" className="mob:hidden w-[422px] mr-0 mt-[600px] z-10 border-2 border-black"/>

        <section className="mob:hidden bg-purple-700 w-[422px] h-[352px] ml-[775px] mt-[664px] absolute z-0">
          <p className="text-purple-700">a</p>
        </section>

      </section>

      <section className='flex flex-col justify-center items-center bg-black pt-7 pb-12 text-center lg:hidden'>
        <hr className="mb-7 w-60 border-4 border-white" />
        <p className='text-white font-bold w-80 leading-5'>A Hortomática foi projetada para ser simples e eficiente. Possuindo um formato de uma “caixa”, onde a terra é posta, onde por baixo há uma base impermeável, onde ficam os componentes que tornam a Hortomática automatizada. Com sensores que monitoram constantemente o nível de umidade, garantindo que a planta receba a quantidade ideal de água. </p>
      </section>

      <section className='bg-purple-700 text-purple-700 w-full h-5 mt-0 lg:mt-[444px] lg:bg-green-400 lg:text-green-400 lg:h-11'>
            <p></p>
      </section>

      <section className='bg-green-400 text-green-400 w-full h-11 lg:bg-black lg:text-black lg:h-5'>
            <p></p>
      </section>

      <section className='flex flex-col justify-center items-center bg-white pt-9 pb-12 text-center lg:flex-row-reverse'>
        <hr className="mb-9 w-[342px] border-4 border-black lg:absolute lg:w-0 lg:h-[466px] lg:border-2 lg:ml-10 lg:mt-32" />
        
        <section className='text-white bg-black w-72 py-9 pb-10 flex justify-center items-center z-10 mb-20 lg:w-[454px] lg:ml-40 lg:py-14 lg:mt-12'>
          
          <p className='w-60 font-bold leading-5 lg:w-80'>O usuário registra o tipo de hortaliça que está cultivando por meio de um aplicativo intuitivo, disponível para dispositivos móveis. Com base nas necessidades específicas da planta, a Hortomática ajusta a irrigação automaticamente. Quando o sensor detecta que a umidade está abaixo do ideal, o sistema de irrigação é ativado, garantindo que suas hortaliças estejam sempre bem cuidadas. </p>
        
        </section>

        <section className="bg-purple-700 w-[284px] h-[334px] ml-8 mb-[280px] absolute z-0 lg:ml-[900px] lg:mt-80 lg:h-72 lg:w-[424px] lg:mr-36">
          <p className="text-purple-700">a</p>
        </section>

        <img src={imgHortalicas} alt="" className='w-72 border-2 border-black z-10 lg:mr-20 lg:w-[422px] lg:mt-20' />

        <section className="bg-purple-700 w-[284px] h-72 ml-8 mt-[512px] absolute z-0 lg:w-[422px] lg:h-[422px] lg:mt-40 lg:mr-[600px]">
          <p className="text-purple-700">a</p>
        </section>

        <hr className="mob:hidden mb-9 w-[456px] border-4 border-black absolute ml-[676px] mt-[524px]"/>

      </section>

      <section className='mob:hidden w-full h-7 mt-0 lg:mt-24 lg:bg-green-400 lg:text-green-400'>
            <p></p>
      </section>

      <section className='mob:hidden w-full h-5 lg:bg-black lg:text-black'>
            <p></p>
      </section>

      <section className='flex flex-col justify-center items-center bg-white pt-9 pb-16 text-center lg:flex-row-reverse'>
        <hr className="mb-9 w-[342px] border-4 border-black lg:absolute lg:hidden" />
        
        <section className='text-white bg-black w-72 py-9 pb-10 flex justify-center items-center z-10 mb-20 lg:ml-36 lg:mb-48 lg:w-[452px]'>
          <p className='w-60 font-bold leading-5 lg:w-96'>Além disso, o aplicativo notifica o usuário quando a hortaliça está pronta para ser colhida e também quando o tanque esta sem água suficiente para regar a hortaliça, tornando o processo de cultivo ainda mais prático e simples.</p>
        </section>

        <section className="bg-purple-700 w-[284px] h-56 ml-8 mb-[240px] absolute z-0 lg:ml-[750px] lg:w-[444px] lg:mt-28 lg:h-40">
          <p className="text-purple-700">a</p>
        </section>

        <img src={imgCelular} alt="" className='w-72 border-2 border-black z-10 lg:w-[422px] lg:mt-20 lg:mr-20 lg:mb-20 lg:ml-10'/>

        <section className="bg-purple-700 w-[284px] h-60 ml-8 mt-[400px] absolute z-0 lg:w-[422px] lg:h-96 lg:mt-16 lg:mr-[650px] lg:ml-20">
          <p className="text-purple-700">a</p>
        </section>

        <hr className="mob:hidden mb-20 w-[456px] border-4 border-black absolute ml-[676px] mt-[275px]"/>
        <hr className="mob:hidden mb-9 w-[352px] border-4 border-black absolute ml-[676px] mt-[325px]"/>

      </section>

      <section className='bg-purple-700 text-purple-700 w-full h-5 mt-0 '>
            <p></p>
      </section>

      <section className='bg-green-400 text-green-400 w-full h-11 '>
            <p></p>
      </section>

      <section className='bg-black text-white flex flex-col justify-center items-center p-10 lg:flex-row-reverse lg:pb-16'>
        
        <section className='w-64 flex flex-col justify-center items-center lg:mb-2 lg:w-96'>

          <h2 className='font-bold text-2xl lg:text-4xl lg:mr-52'>Explicação:</h2>
          <hr className='border-4 border-white w-full mt-3'/>

          <section className='h-72'>
            <p></p>
          </section>

          <hr className='border-4 border-white w-full'/>

        </section>

        <section className='flex flex-col justify-center items-center'>

          <h2 className='font-bold text-2xl mt-7 lg:text-4xl lg:mr-72'>Video de Exemplo</h2>
          <hr className='border-4 border-white w-52  mt-5 mb-9 lg:w-[444px] lg:mr-40'/>

          <img src={iconVideo} alt="" className='mb-8 z-10 lg:w-[444px] lg:mr-40'/>

          <section className="bg-white w-[284px] h-44 ml-8 mt-32 absolute z-0 lg:w-[444px] lg:h-64 lg:mr-28 lg:mt-44">
            <p className="text-white">a</p>
          </section>

        </section>

      </section>

      <section className='bg-purple-700 text-purple-700 w-full h-2 mt-0 '>
            <p></p>
      </section>

      <section className='bg-green-400 text-green-400 w-full h-3 '>
            <p></p>
      </section>

    </div>
  )
}

export default Funcionamento
