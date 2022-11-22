import '../css/Remover.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Cadastrar from './Cadastrar';

function Remover() {
    return (
        <>
            <div className="container mt-5">
                <main>
                    <div>
                        <input type="email" className="form-control" id="floatingInput" placeholder="Id do produto" />
                        <br />
                        <button className="w-20 btn btn-lg btn-primary mt-5" type="submit">Remover</button>
                    </div>
                </main>
            </div>
            {/* rodapé, favor não alterar :) */}
            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top fixed-bottom">
                    <p className="col mb-0 text-muted">© MMXXII</p>
                </footer>
            </div>
        </>
    )
}

export default Remover


