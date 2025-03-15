import styles from './index.module.css'

export default function ProductCard({name, price ,imgUrl ,product}) {
    const handleAdd = () => {
        console.log(product)
    }

    return (
        <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className={`shadow border rounded-4 p-3 col-12 d-flex flex-column gap-1 ${styles.card}`}>
                <img src={imgUrl}/>
                <h2>{name}</h2>
                <p>$ {price}</p>
                <button className='btn btn-primary' onClick={handleAdd}>Add To Cart</button>
            </div>
        </div>
    )
}
