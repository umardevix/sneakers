import React, { use, useEffect, useState } from 'react'
import './Basket.css'
import axios from 'axios'

const Basket = ({ setOpenBasket }) => {
	const [basketProduct, setBasketProduct] = useState([])

	useEffect(() => {
		const getBasketProduct = async () => {
			try {

				const res = await axios.get('http://localhost:8000/cart')

				setBasketProduct(res.data)


			} catch (error) {
				console.log('Product noy', error);

			}
		}
		getBasketProduct()
	}, [])
	return (
		<div className='over_basket'>
			<div className='basket_info'>
				<div className='title_basket'>
					<h1>Корзина</h1>
					<span onClick={() => setOpenBasket(false)}>X</span>
				</div>

				<div className='basket_block'>
					{
						basketProduct.map(item => (
							<div key={item.id} className='basket_card'>
								<img src={item.image} alt="" />
								<div className='basket_info_item'>
									<p>{item.title}</p>
									<span>{item.price} руб.</span>
								</div>
								<div>
									X
								</div>
							</div>
						))
					}
				</div>

			</div>
		</div>
	)
}

export default Basket