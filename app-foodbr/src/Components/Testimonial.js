import React from "react";
import {AiFillStar} from "react-icons/ai";

const Testimonial = () => {
    return (
        <div className="work-section-wrapper">
            <div className="work-section">
                <p className="primary-subheading">Feedbacks</p>
                <h1 className="primaryh-heading">O que eles estão dizendo</h1>
                <p className="primary-text">
                Minha experiência no restaurante de comida saudável foi absolutamente incrível!
                Desde o momento em que entrei, fui recebido com um ambiente acolhedor e vibrante. 
                Os pratos eram verdadeiras obras de arte culinárias, 
                apresentando uma explosão de cores e sabores frescos
                </p>
            <div className="testimonials-stars-container">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
             </div>
            </div>
        </div>
    );
};

export default Testimonial;