
import '../css/Cadastrar.css';

import blogFetch from "../hooks/axios";


import { useState } from "react";

import { useNavigate } from "react-router-dom";



const Cadastrar = () => {
    const navigate = useNavigate()
        
    const [nome, setNome] = useState()
    const [descricao, setDescricao] = useState()
    const [preco, setPreco] = useState()
    const [imagem, setImagem] = useState()
      
    const createPost = async (e) => {
        e.preventDefault();
        await blogFetch.post("/produtos", {
        nome, descricao, preco, imagem
        })
      
    };

    return (
        <>
            <div className="container mt-5">
                <main>
                    <div className="d-flex flex-wrap justify-content-center">
                        <form onSubmit={(e) => createPost(e)}>
                        <div className="col-md-6">
                            <input type="text" className="form-control" id="nome" placeholder="Nome" name="nome" onChange={(e)=> setNome(e.target.value)}/>
                            <br />
                            {/* Nome */}
                            <input type="text" className="form-control" id="descricão" placeholder="Descrição" name="Descrição" onChange={(e)=> setDescricao(e.target.value)} />
                            <br />
                            {/* Descrição */}
                            <input type="text" className="form-control" id="preco" placeholder="Preco" name="Preco" onChange={(e)=> setPreco(e.target.value)}/>
                            <br />
                            {/* Valor */}
                            <input type="text" className="form-control" id="imagem" placeholder="Url Imagem" name="imagem" onChange={(e)=> setImagem(e.target.value)}/>
                            <br />
                            {/* Url */}
                            <button className="w-200 btn btn-lg btn-primary mt-5" type="submit" id='but'>Cadastrar</button>
                        </div>
                        </form>
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

export default Cadastrar