//Principal donde se visualizan datos de un menú de opciones a la izquierda y un contenido a la derecha en typescript

import React from 'react';

const MainScreen: React.FC = () =>{
    return (
        <div className="container-fluid">
            <div className="row">
            <div className="col-3">
                <h1>Menu</h1>
            </div>
            <div className="col-9">
                <h1>Lallala</h1>
            </div>
            </div>
        </div>
    );
};

export default MainScreen;