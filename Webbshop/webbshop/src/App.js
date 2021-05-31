import './App.css';
import Header from './Components/Header';
import Container from './Components/Container';
import {useState} from 'react';
import axios from 'axios'
import Data from "./articles.json"

function App() {
  const [fetching, setFetching] = useState(false)
  const [articles, setArticles] = useState();

  const fetchArticles = async (fetchURL) => {
    setArticles({Data})
  };

  // const fetchArticles = async (fetchURL) => {
  //   try {
  //       setFetching({fetching: true});
  //       const response = await axios.get(fetchURL);
  //       setArticles({articles: response.data});
  //       setFetching({fetching: false})
  //   } catch (e) {
  //       console.log(e);
  //       setFetching({fetching: false})
  //   }
  // };


  return (
    <div className="App">
      <Header />
      <Container articles={articles}/>

    </div>
  );
}

export default App;
