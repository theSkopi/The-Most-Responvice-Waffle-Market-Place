import React, { useState } from 'react'
import Styles from '../styling/Waffles.module.css'
import { AiOutlineQuestionCircle } from 'react-icons/ai'

const WaffleCard = ({waffle}) => {
  const [shouldRenderIngredients, setShouldRenderIngredients] = useState(false);
  const price = `${waffle.price}$`
  const ingredientList = waffle.ingredients.join(', ')

  return (
    <div className={Styles.waffle__card}>
      {waffle.image ? <img src={`${process.env.PUBLIC_URL}/images/waffles/${waffle.image}.jpg`} alt={`${waffle.name}`} /> :
      <img src={`${process.env.PUBLIC_URL}/images/waffles/basic-waffle.jpg`} alt={`not available`}/>}
      <main>
        <p className={Styles.name}>{waffle.name}</p>
        <p className={Styles.ingredients}
          onMouseEnter={() =>{setShouldRenderIngredients(true)}}
          onMouseLeave={() =>{setShouldRenderIngredients(false)}}>
            ingredients
          <AiOutlineQuestionCircle/>
        </p>
        {shouldRenderIngredients &&
        <div className={Styles.ingredient__list}
          onMouseEnter={() =>{setShouldRenderIngredients(true)}}
          onMouseLeave={() =>{setShouldRenderIngredients(false)}}
        >
          {ingredientList}
        </div>}
        <p className={Styles.price}>{price}</p>
      </main>
    </div>
  )
}

export default WaffleCard
