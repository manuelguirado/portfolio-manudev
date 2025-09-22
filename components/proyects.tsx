import react from  'react'
import Card from './card';
export default function Proyects() {
    return ( 
        <div className="flex flex-col items-center justify-center h-full p-8" id="proyects">
        {/* Título principal arriba */}
        <h1 className="text-4xl font-bold mb-8 text-center">Proyects</h1>
        <Card />
   


        </div>

    )

}