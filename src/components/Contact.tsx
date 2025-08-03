// frontend/src/components/Contact.tsx
import React from 'react';
import { FiMail, FiSend } from 'react-icons/fi';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20 px-4 bg-bg-dark">
            <div className="container mx-auto max-w-2xl text-center">
                <h2 className="text-4xl font-bold text-white mb-4">Для сотрудничества</h2>
                <p className="text-text-muted mb-8">
                    Всегда открыт для новых проектов, креативных идей и сотрудничества. Не стесняйтесь написать мне.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <a href="mailto:revengernick079@gmail.com" className="flex items-center justify-center gap-2 bg-bg-light p-4 rounded-lg hover:text-primary transition-colors text-white">
                        <FiMail />
                        revengernick079@gmail.com
                    </a>
                     <a href="https://t.me/revengerNick" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-bg-light p-4 rounded-lg hover:text-primary transition-colors text-white">
                        <FiSend />
                        @revengerNick
                    </a>
                </div>
            </div>
        </section>
    );
};
export default Contact;