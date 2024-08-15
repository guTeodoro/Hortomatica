import BarraFixa from "../components/BarraFixa"
import imgInicio from "/inicio-img.png"

function Inicio() {
  return (
    <div>
      <BarraFixa />
      <section className="flex items-center justify-center bg-[url('/inicio-img.png')] bg-cover bg-top w-full h-[272px] lg:bg-none">

        <section className="bg-black h-24 flex items-center justify-center w-72 mt-14 relative z-10 ">
          <h1 className="text-white w-40 text-2xl font-bold text-center mr-2 mb-2">Conheça a Hortomatica</h1>
        </section>

        <section className="bg-purple-700 w-72 h-24 ml-5 mt-20 absolute z-0">
          <p className="text-purple-700">a</p>
        </section>

      </section>

      <section className="text-white bg-black pt-8 pb-10 text-center flex flex-col justify-center items-center lg:hidden">
        <hr className="mb-6 w-60 border-4" />
        <p className=" w-72 font-medium leading-5">Bem-vindo ao futuro sustentável da jardinagem urbana com a Hortomática, um inovador protótipo em Arduino que traz uma solução inteligente e automatizada para o cultivo de hortaliças em ambientes compactos. </p>
      </section>

      <section className="bg-green-400 h-[72px] flex flex-col justify-center items-center border-b-8 border-black">
        <hr className="border-2 w-full border-black mt-6"/>
        <hr className="border-2 w-full border-black mt-2"/>
        <hr className="border-4 w-full border-black mt-1"/>
      </section>

      <section className="mt-7 text-center flex flex-col justify-center items-center pb-20 border-b-8 border-purple-700">
        <h2 className="mb-4 text-2xl font-bold w-60">Vantagens e Benefícios</h2>
        <hr className="border-4 border-black w-56 mb-9"/>

        <hr className="border-4 border-purple-700 w-56 absolute mb-[260px] z-20" />

        <section className="bg-black px-6 pb-11 pt-10 z-10 flex flex-col justify-center items-center ">   
          <p className="w-64 font-medium leading-5 text-white">A Hortomática oferece a possibilidade de cultivo de temperos frescos e orgânicos em casa, promovendo uma alimentação mais saudável e sustentável. A automação do processo de irrigação elimina a preocupação com a rega inadequada, economizando tempo e garantindo que as plantas recebam exatamente a quantidade de água necessária. Além disso, o uso do aplicativo proporciona uma experiência de jardinagem moderna e sem complicações.</p>
        </section>

        <section className="bg-purple-700 w-72 h-96 ml-10 mt-44 absolute z-0">
          <p className="text-purple-700">a</p>
        </section>

      </section>
      <hr className="border-4 border-green-400 w-full" />
    </div>
  )
}

export default Inicio
