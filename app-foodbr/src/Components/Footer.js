import React from "react";
import Logo from "../Assets/Logo.svg";

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer-section-one">
                <div className="footer-logo-container">
                    <img src={Logo} alt="" />
                </div>
        </div>
        <div className="footer-section-two">
            <div className="footer-section-columns">
                <span>Qualidade</span>
                <span>Ajuda</span>
                <span>Compartilhar</span>
                <span>Carreiras</span>
                <span>Depoimentos</span>
                <span>Trabalhe Conosco</span>
            </div>
            <div className="footer-section-columns">
                <span>244-5333-7783</span>
                <span>hello@food.com</span>
                <span>press@food.com</span>
                <span>contact@food.com</span>
            </div>
            <div className="footer-section-columns">
                <span>Termos e Condições</span>
                <span>Política de Privacidade</span>
            </div>
        </div>
        </div>
    );
};

export default Footer;