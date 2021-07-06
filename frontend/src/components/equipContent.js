import React from 'react'
import product_card from '../data/gym_equipments'
import '../eshop.css';


const EquipContent = () => {
    console.log(product_card);
    const listItems = product_card.map((item) =>
        <div className = "card" key = {item.id}>
            <div className= "card_img">
                <img src = {item.thumb} />
            </div>
            <div className= "card_header"  >
                <h2>{item.product_name}</h2>
                <p>{item.description}</p>
                <p className= "price">{item.price}<span>{item.currency}</span></p>
                <div className="btn">
                    View Item
                </div>
            </div>  
        </div>
    
    );
    return(
        <div className="main_content">
      
            {listItems}
        </div>
    )

}

export default EquipContent;