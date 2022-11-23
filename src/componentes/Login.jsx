import '../css/Login.css';

function Login() {
    return (
        <>
            <div className="container mt-5">
            <main class="d-flex flex-wrap justify-content-center">
                <form>
                    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
                    <div class="form-floating mt-5 mb-3">
                        <input type="text" class="form-control" id="floatingPassword" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                    </div>
                    <div class="checkbox mb-2">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button class="w-20 btn btn-lg btn-primary mt-4" type="submit,">Sign in</button>
                </form>
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

export default Login;