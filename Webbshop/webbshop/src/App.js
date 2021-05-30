import './App.css';
import Header from './Components/Header';
import Container from './Components/Container';
import {useState} from 'react';
import axios from 'axios'

function App() {
  const [fetching, setFetching] = useState(false)
  const [articles, setArticles] = useState([
    {
      id: 1,
      name: 'Samsung 55" UHDR Turbo Tv',
      type: 'tv',
      brand: 'Samsung',
      price: 20000,
      stock: 5,
      description: 'En väldigt fin tv-apparat',
    },
    {
      id: 2,
      name: 'Samsung 55" UHDR Turbo Tv',
      type: 'tv',
      brand: 'Samsung',
      price: 20000,
      stock: 5,
      description: 'En väldigt fin tv-apparat',
    },
    {
      id: 3,
      name: 'Samsung 55" UHDR Turbo Tv',
      type: 'tv',
      brand: 'Samsung',
      price: 20000,
      stock: 5,
      description: 'En väldigt fin tv-apparat',
    },
    {
      id: 4,
      name: 'Samsung 55" UHDR Turbo Tv',
      type: 'tv',
      brand: 'Samsung',
      price: 20000,
      stock: 5,
      description: 'En väldigt fin tv-apparat',
    },
    {
      id: 5,
      name: 'Samsung 55" UHDR Turbo Tv',
      type: 'tv',
      brand: 'Samsung',
      price: 20000,
      stock: 5,
      description: 'En väldigt fin tv-apparat',
    },
    {
      id: 6,
      name: 'Samsung 55" UHDR Turbo Tv',
      type: 'tv',
      brand: 'Samsung',
      price: 20000,
      stock: 5,
      description: 'En väldigt fin tv-apparat',
    },
    {
      id: 7,
      name: 'Samsung 55" UHDR Turbo Tv',
      type: 'tv',
      brand: 'Samsung',
      price: 20000,
      stock: 5,
      description: 'En väldigt fin tv-apparat',
    }
  ]);

  const fetchArticles = async (fetchURL) => {
    try {
        setFetching({fetching: true});
        const response = await axios.get(fetchURL);
        setArticles({articles: response.data});
        setFetching({fetching: false})
    } catch (e) {
        console.log(e);
        setFetching({fetching: false})
    }
};


  return (
    <div className="App">
      <Header />
      <Container articles={articles}/>

    </div>
  );
}

export default App;
