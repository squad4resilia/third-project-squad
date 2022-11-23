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
                            <input type="email" className="form-control" id="floatingInput" placeholder="Descrição" />
                            <br />
                            {/* Descrição */}
                            <input type="email" className="form-control" id="floatingInput" placeholder="Valor" />
                            <br />
                            {/* Valor */}
                            <input type="email" className="form-control" id="floatingInput" placeholder="Url Imagem" />
                            <br />
                            {/* Url */}
                            <button className="w-20 btn btn-lg btn-primary mt-5" type="submit">Cadastrar</button>
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