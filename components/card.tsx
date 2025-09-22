import { Github, ExternalLink } from "lucide-react";
import React from "react";

export default function Card() {
    return (
        <div className="flex flex-wrap gap-6 justify-center">
            <div className="w-90 bg-gray-800 flex flex-col p-6 rounded-lg border border-gray-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                {/* Imagen del proyecto */}
                <img
                    src="/ChatFriends.png"
                    alt="Chat Friends Project"
                    className="w-full h-48 object-cover mb-4 rounded-lg"
                />

                {/* Título del proyecto */}
                <h2 className="text-xl text-left font-semibold mb-2 text-white">
                    Chat Friends - Aplicación de Chat en Tiempo Real
                </h2>

                {/* Tecnologías usadas con iconos */}
                <div className="mb-4">
                    <span className="text-sm text-gray-300 mb-2 block">Tecnologías utilizadas:</span>
                    <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full">React</span>
                        <span className="px-2 py-1 bg-green-600 text-white text-xs rounded-full">Node.js</span>
                        <span className="px-2 py-1 bg-green-500 text-white text-xs rounded-full">MongoDB</span>
                        <span className="px-2 py-1 bg-purple-600 text-white text-xs rounded-full">Socket.io</span>
                        <span className="px-2 py-1 bg-black text-white text-xs rounded-full">Next.js</span>
                    </div>
                </div>

                {/* Descripción */}
                <p className="text-left text-gray-300 mb-6 flex-grow">
                    Aplicación de chat en tiempo real que permite a los usuarios comunicarse
                    instantáneamente con funcionalidades de mensajería en vivo, salas de chat
                    y gestión de usuarios.
                </p>

                {/* Enlaces - Botones */}
                <div className="flex gap-3 mt-auto">
                    <a
                        href="https://github.com/manuelguirado/chat-friends"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200"
                    >
                        <Github className="h-4 w-4" />
                        <span className="text-sm">Código</span>
                    </a>

                    <a
                        href="https://chat-friends-live.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                    >
                        <ExternalLink className="h-4 w-4" />
                        <span className="text-sm">Ver Live</span>
                    </a>
                </div>
            </div>

        </div>
    );
}