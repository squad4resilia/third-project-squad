import '../css/Buscar.css';
import React from 'react';

function Buscar() {
  return (
    <>
      <div className="container mt-5">
      <main>
        <div>
          <input type="email" className="form-control" id="floatingInput" placeholder="Buscar por nome" />
        </div>
      </main>
      </div>
    </>
  )
}

export default Buscar
