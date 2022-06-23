import React, { useEffect, useState } from 'react';
import "./Products.css"
const Products = () => {
    const [products, setProducts] = useState([])
    const [productCount,setProductCount] = useState(0)
    const [pageCount,setPageCount] = useState(0)
    const [page,setPage]=useState(0)
    const [size,setSize] = useState(10)

    // fetch data
    useEffect(() => {
        fetch(`http://localhost:8080/products?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [page,size])

    // fetch product count
    useEffect(() =>{
        fetch('http://localhost:8080/productCount')
        .then(res => res.json())
        .then(data => {
            setProductCount(data.count)
            setPageCount(Math.ceil((data.count)/10))
        })
    },[])
    return (
        <>
        <p style={{padding:"10px"}}>Total Product :{productCount} page will be {pageCount}</p>
        <div className='products'>
            {
                products.map((dt, idx) => {
                    const { category, _id, img, name, price, quantity, ratings, ratingsCount, seller, shipping, stock } = dt;
                   
                    return (
                        <div className="products-detials" key={_id}>
                            <img  src={img} alt="" />
                            <p>{name}</p>
                            <p>{category}</p>
                            <p>{price}</p>
                            
                            <button>buy now !!</button>
                        </div>
                    )
                })
            }
        </div>
        <div>
            {
                [...Array(pageCount).keys()]
                .map(number=><button className={page==number?'selected':""}
                    onClick={()=>setPage(number)}
                >{number}</button>)
            }
            {size}
            <select name="" id="" onChange={(e)=>setSize(e.target.value)}>
                <option value="5">5</option>
                <option value="10" selected>10</option>
                <option value="15">15</option>
                <option value="20">20</option>
            </select>
        </div>
        </>
    );
};

export default Products;