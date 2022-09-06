import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Main() {
    return (
        <main>
            <img src="../images/seniorphoto.jpeg" className="main--photo"></img>
            <div className="main--header_info">
                <h1 className="main--name">Cameron Sivo</h1>
                <h4 className="main--title">Frontend Developer</h4>
                <h6 className="main--site">github.com/csiv23</h6>
            </div>
            <div className="main--buttons">
                <button className="main--email">
                    <FontAwesomeIcon className="main--contact_icon" icon="fa-solid fa-envelope" />
                    Email
                </button>
                <button className="main--linkedin">
                    <FontAwesomeIcon className="main--contact_icon" icon="fa-brands fa-linkedin" />
                    Linkedin
                </button>
            </div>
            <div className="main--about">
                <h4>About</h4>
                <p>I'm a third year Computer Science student at Northeastern University with a concentration in Software. I'm a frontend developer with an interest in the intersection of Music and Computer Science. </p>
                <h4>Interests</h4>
                <p>Playing Live Music, Weightlifting, Sailing, Ergonomic Mechanical Keyboards, E-Sports, Stand-Up Comedy</p>
            </div>
        </main>
    )
}