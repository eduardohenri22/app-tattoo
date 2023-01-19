import logo from "../../assets/logo.png"
import "../landingPage/style.css"

const LandingPage = () => {
    return(
        <>
           <main>
                <div className="divImg">
                   <img src={logo} alt="" />   
                </div>
                <div className="divInputBt">
                    <input type="text" placeholder="Seu nome"/>
                    <button>INICIAR</button>
                    <h1>Minha fé é tão forte, que se a montanha não se move, eu a empurro!</h1>
                </div>
           </main>
        </>
    )
}

export default LandingPage