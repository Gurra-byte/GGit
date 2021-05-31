import './App.css';
import Header from './Components/Header';
import Container from './Components/Container';
import {useState} from 'react';
import axios from 'axios'
import data from "./data.json"

function App() {

  const [articles, setArticles] = useState(data);
  
  return (
    <div className="App" >
      <Header />
      <Container articles={articles}/>

    </div>
  );
}

export default App;
