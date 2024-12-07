import { useEffect, useState } from 'react';
import Card from './components/card/Card.jsx';
import Header from './components/header/Header';
import Search from './components/search/Search';
import axios from 'axios';

function App() {
  const [product, setProduct] = useState([])
  //URL http://localhost:8000/product

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch('http://localhost:8000/product')
        const data = await response.json()
        setProduct(data)
      } catch (error) {
        console.log('Get product error:', error);
      }
    }
    fetchProduct()
  }, [])

  const addProduct = async (item) => {
    try {
      const res = await axios.post('http://localhost:8000/cart', {
        id: item.id,
        image: item.image,
        title: item.title,
        price: item.price
      });

      // Обработать ответ, если нужно
      console.log(res.data);

    } catch (error) {
      console.log('Продукт не добавлен', error);
    }
  }


  return (
    <div className="wrapper">
      <Header />
      <Search />

      <div className='container'>
        <div className='card_block'>

          {
            product.map(el => (
              <Card addProduct={addProduct} key={el.id} item={el} />
            ))
          }
        </div>
      </div>
    </div>
  );
}
export default App;