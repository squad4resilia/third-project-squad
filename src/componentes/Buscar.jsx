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
      {/* rodapé, favor não alterar :) */}
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 mt-5 border-top sticky-bottom">
          <p className="col mb-0 text-muted">© MMXXII</p>
        </footer>
      </div>
    </>
  )
}

export default Buscar;
