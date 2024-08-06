import BarraFixa from "../components/BarraFixa"
import imgInicio from "/inicio-img.png"

function Inicio() {
  return (
    <div>
      <BarraFixa />
      <h1>Conheça a Hortomatica</h1>
      <p>Bem-vindo ao futuro sustentável da jardinagem urbana com a Hortomática, um inovador protótipo em Arduino que traz uma solução inteligente e automatizada para o cultivo de hortaliças em ambientes compactos. </p>
      <img src={imgInicio} alt="Imagem ilustrativa do projeto" className="w-3/12"/>
      <h2>Vantagens e Benefícios</h2>
      <p>A Hortomática oferece uma série de vantagens e benefícios que tornam o cultivo de hortaliças em ambientes urbanos não apenas possível, mas também extremamente conveniente. Primeiramente, ela permite o cultivo de temperos frescos e orgânicos em casa, promovendo uma alimentação mais saudável e sustentável. A automação do processo de irrigação elimina a preocupação com a rega inadequada, economizando tempo e garantindo que as plantas recebam exatamente a quantidade de água necessária.</p>
      <p>Além disso, o uso eficiente de água contribui para a sustentabilidade ambiental. Outro benefício significativo é a facilidade de uso do aplicativo, que proporciona uma experiência de jardinagem moderna e sem complicações. A Hortomática é também uma excelente opção para quem tem pouco espaço, pois seu design compacto é perfeito para pequenos apartamentos e casas urbanas.</p>
    </div>
  )
}

export default Inicio
