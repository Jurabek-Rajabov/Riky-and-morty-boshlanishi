import "../index.css"
import { Header } from "./header"
export const Main = () => {
    return(
        <>
        <Header/>
        <div className="container">
           <section className="mainbody">
            <div className="mainbar">
                <strong>Riky and <strong className="mortystyle">Morty</strong>  ga hush kelipsiz</strong>
                <p className="dastur">Dasturdan foydalanish uchun ro'yhattan oting</p>
            </div>
           </section>
        </div>
        </>
    )
}