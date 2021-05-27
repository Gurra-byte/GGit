import './App.css';
import Header from './Components/Header';
import Container from './Components/Container';
import {useState} from 'react';

function App() {

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
  ])

  return (
    <div className="App">
      <Header />
      <Container articles={articles}/>

    </div>
  );
}

export default App;
