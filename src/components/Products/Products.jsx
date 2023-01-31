import React from 'react';
import css from './Products.module.css';
import Plane from '../../assets/plane.png';
import {ProductsData} from '../../data/products';

const Products = () => {
    const [MenuProducts, setMenuProducts] = React.useState(ProductsData);
    const filter = (type) => {
        setMenuProducts(ProductsData.filter((product)=> product.type === type))
    }
  return (
    <div classname={css.container}>
      <img src={Plane} alt="" />
      <h1>Our featured products</h1>

      <div className={css.products}>
        <ul className={css.menu}>
            <li onClick={()=>setMenuProducts(ProductsData)}>All</li>
            <li onClick={()=>filter("skin care")}>Skin care</li>
            <li onClick={()=>filter("conditioner")}>Conditionners</li>
            <li onClick={()=>filter("foundation")}>Foundations</li>
        </ul>
<div className={css.list}>
    {
        MenuProducts.map((product, i)=>(
<div className={css.product}>
<div className="left-s">
    <div className={css.name}>
        <span>{product.name}</span>
        <span>{product.detail}</span>
    </div>
    <span>{product.price}$</span>
    <div>Show now</div>

</div>
<img src={product.img} alt="" className="img-p" />
</div>
        )) }
</div>

      </div>
    </div>
  )
}

export default Products
