import React from 'react';

const Loading = () => {
    return (
        <div style={{height:"100vh", display:"flex", justifyContent:"center", alignItems:"center"}}> 
        <div>
         <button class="btn btn-primary" type="button" disabled>
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                <span class="visually-hidden">Chargement du component</span>
            </button>

        </div>
        </div>
        );
    
};

export default Loading;