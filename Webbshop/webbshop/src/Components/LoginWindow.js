import React, {useState} from 'react'

const LoginWindow = ({user, showCreateAccount ,createAccount, Login}) => {

    const [details, setDetails] = useState({Username : "", Password : ""})

    const submitHandeler = (e) => {
        e.preventDefault();
        Login(details);
    }
    

    return (
        <div className='loginWindow'>
            
            <h3>Login</h3>
            <button onClick = {createAccount} color = {showCreateAccount ? "red" : "green"}>Create New Account</button>
            <form onSubmit = {submitHandeler}>
                <input type="text" placeholder="Username" onChange = {(e)=> setDetails({...details, Username : e.target.value})}></input>
                <input type="text" placeholder="Password" onChange = {(e)=> setDetails({...details, Password : e.target.value})}></input>
                <input type="submit" value="Go"></input>
            </form>
            
        </div>
    )
    
}

export default LoginWindow
