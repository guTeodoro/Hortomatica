import BarraFixa from "../components/BarraFixa"
import imgInicio from "/inicio-img.png"
import horta from "/horta.png"
import iconVideo from "/video-icon.png"

function Inicio() {
  return (
    <div>
      <BarraFixa />
      <section className="flex items-center justify-center bg-[url('/inicio-img.png')] bg-cover bg-top w-full h-[272px] lg:bg-none">
            <section className="bg-black h-24 flex items-center justify-center w-72 mt-14 relative z-10 lg:h-28 lg:mt-40 lg:w-96 lg:mr-0 lg:ml-10 lg:hidden ">
              <h1 className="text-white w-40 text-2xl font-bold text-center mr-2 mb-2 lg:text-4xl lg:w-72">Conheça a Hortomática</h1>
            </section>

            <section className="bg-purple-700 w-72 h-24 ml-5 mt-20 absolute z-0 lg:h-28 lg:mt-44 lg:mr-[722px] lg:w-96 lg:ml-14 lg:hidden">
              <p className="text-purple-700">a</p>
            </section>

        <section className="block mt-96 justify-center items-center mob:hidden">
          <section className="flex">
            <section className="bg-black h-24 flex items-center justify-center w-72 mt-14 relative z-10 lg:h-28 lg:mt-40 lg:w-96 lg:mr-0 lg:ml-10 ">
              <h1 className="text-white w-40 text-2xl font-bold text-center mr-2 mb-2 lg:text-4xl lg:w-72">Conheça a Hortomática</h1>
            </section>

            <section className="bg-purple-700 w-72 h-24 ml-5 mt-20 absolute z-0 lg:h-28 lg:mt-44 lg:mr-[722px] lg:w-96 lg:ml-14">
              <p className="text-purple-700">a</p>
            </section>
          </section>
          <p className=" text-black font-bold w-[464px] mob:hidden mt-24 ml-0 text-center text-2xl mr-28">Bem-vindo ao futuro sustentável da jardinagem urbana com a Hortomática, um inovador protótipo em Arduino que traz uma solução inteligente e automatizada para o cultivo de hortaliças em ambientes compactos. </p>
        </section>

        <hr className="mob:hidden border-2 h-96 border-black mr-32 mt-[522px]"/>

        <img src={horta} alt="" className="mob:hidden w-[400px] h-[364px] mr-0 mt-[500px] z-10 border-2 border-black"/>

        <section className="mob:hidden bg-purple-700 w-[422px] h-[352px] ml-[775px] mt-[584px] absolute z-0">
          <p className="text-purple-700">a</p>
        </section>

      </section>

      

      <section className="text-white bg-black pt-8 pb-10 text-center flex flex-col justify-center items-center lg:hidden">
        <hr className="mb-6 w-60 border-4" />
        <p className=" w-72 font-medium leading-5">Bem-vindo ao futuro sustentável da jardinagem urbana com a Hortomática, um inovador protótipo em Arduino que traz uma solução inteligente e automatizada para o cultivo de hortaliças em ambientes compactos. </p>
      </section>

      <section className="bg-green-400 h-[72px] flex flex-col justify-center items-center border-b-8 border-black lg:mt-[398px]">
        <hr className="border-2 w-full border-black mt-6"/>
        <hr className="border-2 w-full border-black mt-2"/>
        <hr className="border-4 w-full border-black mt-1"/>
      </section>

      <section className="mt-7 text-center flex flex-col justify-center items-center pb-5 border-b-8 border-purple-700 lg:bg-black lg:py-20 lg:pb-9 lg:mt-0">
        <h2 className="mb-4 text-2xl font-bold w-60 lg:text-white lg:text-4xl lg:w-full">Vantagens e Benefícios</h2>
        <hr className="border-4 border-black w-56 mb-9 lg:border-white lg:mt-4 lg:w-[800px]"/>

        <hr className="border-4 border-purple-700 w-56 absolute mb-[695px] z-20 lg:hidden" />

        <section className="bg-black px-6 pb-11 pt-10 z-10 flex flex-col justify-center items-center lg:bg-white lg:pt-14 lg:pb-14 lg:px-14">   
          <p className="w-64 font-medium leading-5 text-white lg:text-black lg:font-bold lg:w-[800px]">A Hortomática oferece a possibilidade de cultivo de temperos frescos e orgânicos em casa, promovendo uma alimentação mais saudável e sustentável. A automação do processo de irrigação elimina a preocupação com a rega inadequada, economizando tempo e garantindo que as plantas recebam exatamente a quantidade de água necessária. Além disso, o uso do aplicativo proporciona uma experiência de jardinagem moderna e sem complicações.</p>
        </section>

        <section className="bg-purple-700 w-72 h-96 ml-10 mt-0 mb-[280px] absolute z-0 lg:w-[900px] lg:h-52 lg:ml-16 lg:mt-0 lg:mb-[544px]">
          <p className="text-purple-700">a</p>
        </section>

        <section className='bg-black mob:bg-white text-white flex flex-col justify-center items-center p-10 lg:p-0 lg:flex-row-reverse lg:pb-16 lg:mt-28'>

        <section className='flex flex-col justify-center items-center mob:text-black mob:mt-10'>

          <h2 className='lg:font-bold text-4xl lg:text-4xl lg:mr-0'>Jogo</h2>
          <hr className='border-4 border-black lg:border-white w-52  mt-5 mb-9 lg:w-[580px] lg:mr-0'/>

          <iframe className='mb-8 z-10 lg:w-[600px] lg:h-[350px] h-[180px] lg:mr-0 lg:mt-[40px]' src="https://www.youtube.com/embed/PeDrzKCdhag?si=XSJbO0usYwWb-Y67" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

          <section className="bg-black lg:bg-white w-[284px] h-44 ml-12 mt-32 absolute z-0 lg:w-[680px] lg:h-[420px] lg:mr-0 lg:ml-0 lg:mt-28">
            <p className="text-black"></p>
          </section>

        </section>

      </section>

      </section>
      <hr className="border-4 border-green-400 w-full" />
    </div>
  )
}

export default Inicio