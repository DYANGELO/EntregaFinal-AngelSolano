import './ItemListContainer.css'
import  '../DetailComponents/ItemDetailContainer'
import ItemList from './ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import getProducts from '../../data/productos'

function ItemListContainer({greeting}) {
    const [productos, setProductos] = useState([])
    const { id } = useParams()

    useEffect(() => {
        getProducts
        .then((answer) => {
            if(id) {
                const product = answer.filter(prod => prod.categoria === id)
                setProductos(product)
            } else {
                setProductos(answer)
            }
        })
        .catch(error => console.log(error))
    },[id])


    return (
        
        <div className="container">
            <h1 className='title-seccion'>{greeting}</h1>    
            <ItemList products={productos}/> 
        </div>
    )
}

export default ItemListContainer