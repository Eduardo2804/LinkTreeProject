
import {useState} from "react"
import { Header } from "../../components/Header"
import "./admin.css"

import { Logo } from "../../components/Logo"
import { Input } from "../../components/Input"

import {MdAddLink} from "react-icons/md"
import {FiTrash2} from "react-icons/fi"

import { db } from "../../services/firebaseConection"

import {
    addDoc,
    collection,
    onSnapshot,
    query,
    orderBy,
    doc,
    deleteDoc

} from "firebase/firestore"

import { toast } from "react-toastify"





export default function Admin() {

      const [nameInput, setNameInput] = useState("");
      const [urlInput, setUrlInput] = useState("")
      const [backgroundColorInput, setBackgroundColorInput] = useState("")
      const [textColorInput, setTextColorInput] = useState("#000")

      async function handleRegister(e){

        e.preventDefault();

        if (nameInput === "" || urlInput === "") {
            toast.warn("Enter all fields")
            return;
        }

        addDoc(collection(db, "links"), {

            name: nameInput,
            url: urlInput,
            bg: backgroundColorInput,
            color: textColorInput,
            created: new Date(),

        })

        .then(() => {
            setNameInput("")
            setUrlInput("")
            console.log(" link registed ")

        })
        .catch((error) => {
            console.log("error" + error)
            toast.error("something went wrong")

        })
      }

    return(

        <div className="admin-container">
            <Header/>
            <Logo/>


            <form className="form" onSubmit={handleRegister}>

                <label className="label">Link Name: </label>
                <Input
                placeholder="Link Name..."
                value={nameInput}
                onChange={ (e) => setNameInput(e.target.value) }
                />

                <label className="label">URL: </label>
                <Input
                type="url"
                placeholder="Enter URL..."
                value={urlInput}
                onChange={ (e) => setUrlInput(e.target.value) }
                />

                <section className="container-colors">
                    <div>
                        <label className="label right">link background</label>
                        <input
                        type="color"
                            value={backgroundColorInput}
                             onChange={ (e) => setBackgroundColorInput(e.target.value) }
                        />
                    </div>

                    <div>
                        <label className="label right">link color</label>
                        <input
                        type="color"
                            value={textColorInput}
                            onChange={ (e) => setTextColorInput(e.target.value) }
                        />
                    </div>

                </section>

                {nameInput !== "" && (
                    
                    <div className="preview">
                    <label className="label">Preview</label>
                    <article className="list" style={ { marginTop:8,  marginBottom: 8, backgroundColor: backgroundColorInput } }>
                        <p style={ { color: textColorInput } }>{nameInput}</p>

                    </article>
                </div>
                
                ) }

 
                

                <button className="btnRegister" type="submit">
                    Register <MdAddLink size={24} color="#FFF"/>
                </button>
            </form>

            <h2 className="title">My links</h2>
            <article className="list animate-pop"
            style={{backgroundColor:"#000", color: "#fff"}}>
                <p>Grupo no youtube</p>
                <div>
                    <button className="btnDelete">
                    <FiTrash2 color="#FFF" size={18}/>
                    </button>
                </div>
            </article>
        </div>
       
    )
}