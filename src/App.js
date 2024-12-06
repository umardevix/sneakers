import { useEffect, useState } from 'react';
import Card from './components/card/Card.jsx';
import Header from './components/header/Header';
import Search from './components/search/Search';

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


  return (
    <div className="wrapper">
      <Header />
      <Search />

      <div className='container'>
        <div className='card_block'>

          {
            product.map(el => (
              <Card key={el.id} item={el} />
            ))
          }
        </div>
      </div>
    </div>
  );
}
export default App;