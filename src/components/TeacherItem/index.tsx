import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://media-exp1.licdn.com/dms/image/C5603AQF9HBdxe905xQ/profile-displayphoto-shrink_100_100/0?e=1603929600&v=beta&t=GpLT6bUL4ZGVr-rfg3vlnvSAloIl0YxopIijnvQ8kBI" alt="Avatar" />
                <div>
                    <strong>Thomás Targino</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de química avançada.
                    <br /><br />
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
                </p>

            <footer>
                <p>
                    Preço/hora
                        <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp" />
                    Entrar em contato
                    </button>
            </footer>
        </article>
    );
}

export default TeacherItem;