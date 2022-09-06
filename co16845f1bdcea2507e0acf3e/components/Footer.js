import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Footer() {
    return (
        <footer>
            <div className="footer--icon">
                <FontAwesomeIcon icon="fa-brands fa-github" />
            </div>
            <div className="footer--icon">
                <FontAwesomeIcon icon="fa-brands fa-instagram" />
            </div>
            <div className="footer--icon">
                <FontAwesomeIcon icon="fa-brands fa-facebook" />
            </div>
            <div className="footer--icon">
                <FontAwesomeIcon icon="fa-brands fa-slack" />
            </div>
        </footer>
    )
}