function Atualizar() {
    return (
        <>
            <div className="container mt-5">
                <main>
                    <div className="d-flex flex-wrap justify-content-center">
                        <div className="col-md-6">
                            <input type="email" className="form-control" id="floatingInput" placeholder="Id do produto" />
                            <br />
                            <input type="email" className="form-control" id="floatingInput" placeholder="Nome" />
                            <br />
                            <input type="email" className="form-control" id="floatingInput" placeholder="Descrição" />
                            <br />
                            <input type="email" className="form-control" id="floatingInput" placeholder="Valor" />
                            <br />
                            <input type="email" className="form-control" id="floatingInput" placeholder="Url Imagem" />
                            <br />
                            <button className="w-20 btn btn-lg btn-primary mt-5" type="submit">Atualizar</button>
                        </div>
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

export default Atualizar