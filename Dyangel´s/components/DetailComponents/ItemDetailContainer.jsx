import ItemDetail from "./itemDetail"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import getProducts from "../../data/productos"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams()

    useEffect(() => {
        getProducts
            .then((answer) => {
                const product = answer.find(prod => prod.id === parseInt(id))
                setProduct(product)
            })
            .catch(error => console.log(error))
    }, [id])

    return (

        <ItemDetail product={product} />

    )
}

export default ItemDetailContainer 