function LoginPage() {
    return (
        <div>
            <h3>Login</h3>
            <div className="form-group mb-3">
                <span className="form-group-text">Username</span>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" />
            </div>
            <div className="form-group">
                <span className="form-group-text">Password</span>
                <input type="password" className="form-control" placeholder="Password" aria-label="Password"/>
            </div>
            <br />
            <button type="submit" className="btn btn-success">Login</button>

        </div>
    )

}

export default LoginPage;