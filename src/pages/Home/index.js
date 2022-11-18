import "./home.css"
import { Social } from "../../components/Social"
import {FaFacebook, FaInstagram, FaYoutube} from "react-icons/fa"

export default function Home() {

    return(
        <div className="home-container">
            <h1>My Linktree</h1>
            <span>This are my links 👇</span>

        <main className="links">
            <section className="link-area">
                <a href="#">
                    <p className="link-text">Youtube channel</p>
                    </a>
            </section>

            <section className="link-area">
                <a href="#">
                    <p className="link-text">Youtube channel</p>
                    </a>
            </section>

            <section className="link-area">
                <a href="#">
                    <p className="link-text">Youtube channel</p>
                    </a>
            </section>


            <footer>
            <Social url="https://www.facebook.com/dudu.carmo.1">
            <FaFacebook size={35} color="#FFF"/>
            </Social>

            <Social url="https://www.instagram/dudu92">
            <FaInstagram size={35} color="#FFF"/>
            </Social>

            <Social url="https://www.youtube.com">
            <FaYoutube size={35} color="#FFF"/>
            </Social>
            
            </footer>
        </main>

        </div>
    )
}