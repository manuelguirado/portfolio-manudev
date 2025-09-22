import { Github, ExternalLink } from "lucide-react";
import React from "react";
import { useTranslation } from 'react-i18next';

export default function Card() {
    const { t } = useTranslation();
    
    return (
        <div className="flex flex-wrap gap-6 justify-center">
            <div className="w-80 h-full bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm flex flex-col p-6 rounded-xl border border-gray-600/30 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:transform hover:scale-105 hover:border-blue-500/50 group">
                {/* Imagen del proyecto */}
                <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                        src="/ChatFriends.png"
                        alt="Chat Friends Project"
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Título del proyecto */}
                <h3 className="text-2xl text-left font-semibold mb-2 text-white">
                    {t('projects.chatFriends.title')}
                </h3>

                {/* Tecnologías usadas con iconos */}
                <div className="mb-4">
                    <span className="text-sm text-gray-300 mb-3 block font-medium">{t('projects.chatFriends.technologies')}</span>
                    <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs rounded-full font-medium shadow-lg">React</span>
                        <span className="px-3 py-1.5 bg-gradient-to-r from-green-600 to-green-500 text-white text-xs rounded-full font-medium shadow-lg">Node.js</span>
                        <span className="px-3 py-1.5 bg-gradient-to-r from-green-500 to-green-400 text-white text-xs rounded-full font-medium shadow-lg">MongoDB</span>
                        <span className="px-3 py-1.5 bg-gradient-to-r from-purple-600 to-purple-500 text-white text-xs rounded-full font-medium shadow-lg">Socket.io</span>
                        <span className="px-3 py-1.5 bg-gradient-to-r from-gray-800 to-black text-white text-xs rounded-full font-medium shadow-lg">Next.js</span>
                    </div>
                </div>

                {/* Descripción */}
                <p className="text-left text-gray-300 mb-6 flex-grow">
                    {t('projects.chatFriends.description')}
                </p>

                {/* Enlaces - Botones */}
                <div className="flex gap-3 mt-auto">
                    <a
                        href="https://github.com/manuelguirado/chatFriends"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:transform hover:scale-105"
                    >
                        <Github className="h-4 w-4" />
                        <span className="text-sm font-medium">{t('projects.chatFriends.codeButton')}</span>
                    </a>

                    <a
                        href="https://chat-friends-alpha.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:transform hover:scale-105"
                    >
                        <ExternalLink className="h-4 w-4" />
                        <span className="text-sm font-medium">{t('projects.chatFriends.liveButton')}</span>
                    </a>
                </div>
            </div>

        </div>
    );
}