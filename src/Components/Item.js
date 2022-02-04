import React from 'react';

export default function Item(props) {
    return (

        <div>
            <li className="border d-flex justify-content-between align-items-center p-2 m-2">
                <div className="p-3">{props.monPropstxt}</div>
                <button
                    //on utilise une fonction anonyme qui s'exécute que si on clique sur le bouton
                    //pour éviter d'executer la fonction quand le composant Item s'execute
                    className="btn btn-danger p-2 h-50"
                    onClick={() => props.monPropsFuncDel(props.monPropsid)}
                >Supprimer</button>
            </li>
        </div>

    );
}
