
const ItemDetail = ({product}) => {

    return (
        <div className="card">
            <h2>{product.categoria}</h2>
            <p>{product.categoria}</p>
            <p>${product.precio}</p>
            <p>{product.descripcion}</p>
        </div>
    )
}
export default ItemDetail