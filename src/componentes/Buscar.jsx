import '../css/Buscar.css';
import FreeSolo from "./Autocompleter"

const Buscar = () => {

  return (
    <>
      <div className="container mt-5">
      </div>
      <div className='teste mt-5'>
        <FreeSolo/>
      </div>
      {/* rodapé, favor não alterar :) */}
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 mt-5 border-top fixed-bottom">
          <p className="col mb-0 text-muted">© MMXXII</p>
        </footer>
      </div>
    </>
  )
}

export default Buscar;
