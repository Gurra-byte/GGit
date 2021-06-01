import './App.css';
import Header from './Components/Header';
import Container from './Components/Container';
import {useState} from 'react';
import data from "./data.json"

function App() {

  const [articles, setArticles] = useState(data);
  const [user, setUser] = useState({Username : "", Pasword: ""});
  const [createAccount, setCreateAccount] = useState(false);


  const Login = (loginDetails)=>{
    console.log(loginDetails);
    setUser({...loginDetails})
    console.log(user);
  }
  
  return (
    <div className="App" >
      <Header user={user} showCreateAccount = {createAccount} createAccount = {()=> setCreateAccount(!createAccount)} Login = {Login} />
      <Container articles={articles}/>

    </div>
  );
}

export default App;
