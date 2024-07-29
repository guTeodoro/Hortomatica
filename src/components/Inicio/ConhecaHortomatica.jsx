import imgInicio from "/inicio-img.png"

function ConhecaHortomatica() {
    return (
        <div>
            <h2>Conheça a Hortomatica</h2>
            <p>Bem-vindo ao futuro sustentável da jardinagem urbana com a Hortomática, um inovador protótipo em Arduino que traz uma solução inteligente e automatizada para o cultivo de hortaliças em ambientes compactos. </p>
            <img src={imgInicio} alt="Imagem ilustrativa do projeto" className="w-3/12"/>
        </div>
    )
}

export default ConhecaHortomatica