import React from "react";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
    return (
        <div className="about-section-container">
        <div className="about-section-image-container">
            <img src={AboutBackgroundImage} alt="" />
        </div>
        <div className="about-section-text-container">
            <p className="primary-subheading">Sobre</p>
            <h1 className="primary-heading">
            O alimento é uma parte importante de uma dieta equilibrada.
            </h1>
            <p className="primary-text">
            Cada prato é cuidadosamente preparado com ingredientes frescos e naturais, escolhidos por sua qualidade e valor nutricional. 
            Desde saladas crocantes e coloridas até refeições reconfortantes e cheias de sabor, 
            nossa variedade de opções certamente agradará a todos os paladares.
            </p>
            <p className="primary-text">
            Acreditamos que uma dieta equilibrada é essencial para uma vida saudável e feliz.
            Por isso, nossos pratos são elaborados para fornecer os nutrientes necessários para sustentar sua energia ao longo do dia, 
            sem comprometer o sabor.
            </p>
            <div className="about-buttons-container">
                <button className="secondary-button">Saiba Mais!</button>
                <button className="watch-video-button">
                    <BsFillPlayCircleFill /> Assista o Vídeo
                </button>
            </div>
        </div>
        </div>
    )
}

export default About;