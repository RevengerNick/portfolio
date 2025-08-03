import React from 'react';
import { FiMail, FiSend } from 'react-icons/fi';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20 px-4 bg-bg-dark">
            <div className="container mx-auto max-w-2xl text-center">
                <h2 className="text-4xl font-bold text-white mb-4">Свяжитесь со мной</h2>
                <p className="text-text-muted mb-8">
                    Открыт для новых проектов и интересных предложений. Буду рад обсудить, как я могу быть полезен вашему бизнесу.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    {/* Кнопка Email */}
                    <a href="mailto:revengernick079@gmail.com" className="group flex items-center justify-center gap-3 bg-bg-light p-4 rounded-lg text-text-main transition-all duration-300 hover:bg-primary hover:text-bg-dark hover:shadow-lg hover:shadow-primary/30">
                        <FiMail className="transition-transform duration-300 group-hover:scale-110" />
                        <span>revengernick079@gmail.com</span>
                    </a>
                    {/* Кнопка Telegram */}
                     <a href="https://t.me/revengerNick" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 bg-bg-light p-4 rounded-lg text-text-main transition-all duration-300 hover:bg-primary hover:text-bg-dark hover:shadow-lg hover:shadow-primary/30">
                        <FiSend className="transition-transform duration-300 group-hover:scale-110" />
                        <span>@revengerNick</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;