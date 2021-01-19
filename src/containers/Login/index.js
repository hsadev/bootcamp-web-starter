import React, {useState} from 'react'

const Login = () => {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    return (
        <div>
            <h1>Welcome back to Recipe Central</h1>
            <label>Login</label>
            <input 
                type='text'
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <label>Password</label>
            <input 
                type='password'
                name='password'
                onChange={e => setPass(e.target.value)}
                value={pass}
            />
            <button>Log In</button>
        </div>
    )
}

export default Login