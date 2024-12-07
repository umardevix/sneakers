import React from 'react'
import './Card.css'
import { FaPlus } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";

const Card = ({ item, addProduct }) => {

	return (
		<div className='card'>
			<div className='card-img-content'>
				<div className='card_heart'>
					<IoMdHeartEmpty className='heart' />
				</div>
				<img src={item.image} alt="" />
			</div>
			<div className='card_info'>
				<h3>{item.title}</h3>
				<div className='card_add'>
					<div className='card_price'>
						<span>Pена:</span>
						<p>{item.price} руб.</p>
					</div>
					<div onClick={() => addProduct(item)} className='add_plus'>
						<FaPlus className='plus' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Card