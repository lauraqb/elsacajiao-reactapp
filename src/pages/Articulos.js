import React from 'react';
import Navbar from '../components/Navbar';
import Articulo from '../components/Articulo';

class Articulos extends React.Component {
    render() {
        return <div className="ec">
        <Navbar></Navbar>
        <div className="ec-title" align="center">
                <h1>Artículos</h1>
            </div>
            <div className="ec-content">
                <div className="container ec-list">
                    <Articulo title="Disentangling Emily Dickinson’s Riddles and Encoded Voices in “My Life Had Stood—a Loaded Gun” and “I Taste a Liquor Never Brewed”"
                        description="Over the last few decades, Emily Dickinson’s life and poetry have attracted a great deal of attention in the form of biographies and a myriad of literary criticism. Although I have gone through only a moderate amount of this immense academic corpus, it seems clear that a great number of scholars continue to read her poems as mainly autobiographical. In this essay, through an analysis of “My Life Had Stood—a Loaded Gun” and “I Taste a Liquor Never Brewed” I attempt to demonstrate that Dickinson’s poetry is not the product of a self-centered personality, but of contemplation, imagination, and careful artistry."
                    />
                    <Articulo title="El Tema del poder en la Cándida Eréndira"
                        description=""
                    />
                    <Articulo title="La Recepción De La Ley De La Memoria Histórica En España"
                        description="Análisis Político, Jan 1, 2008
                        El presente artículo analiza las posturas de sectores de la sociedad española frente a la Ley de la Memoria Histórica (LMH,) aprobada el 31 de octubre de 2007, tras numerosas deliberaciones y enmiendas. La Ley es consecuencia de un largo proceso de discusiones y polémicas sobre la recuperación de la memoria histórica y la reparación de las víctimas de la Guerra Civil y el Franquismo. La autora expone las reacciones de sectores políticos, religiosos, académicos y de las propias víctimas ante la Ley, considerada para muchos de ellos como insuficiente."
                    />
                    <Articulo title="La Construcción de la figura de Bolívar en el discurso historiográfico"
                        description="Delaware Review of Latin American Studies, University of Delaware, Dec 31, 2014
                        Este estudio indaga en cómo se ha construido a lo largo del tiempo la figura de Simón Bolívar -el héroe hispanoamericano por excelencia- en la ficción y en el discurso histórico, tomando como base del análisis diversos textos de autores tanto latinoamericanos como europeos, así como también, escritos del propio Bolívar. El propósito ha sido desentrañar en lo posible los componentes ideológicos y culturales que participan en la construcción del personaje."
                    />
                    <Articulo title="La realidad como fundamento de la imaginación en la Cándida Eréndira"
                        description="Espéculo, Mar 6, 2006"
                    />
                    <Articulo title="Reactions To The Law Of Historic Memory In Spain. anal. polit"
                        description=""
                    />
                    <Articulo title="El miedo en la estructuración del espacio urbano en Bogotá"
                        description=""
                    />
                </div>
            </div>
        <br/>
    </div>    
    }
}

export default Articulos;