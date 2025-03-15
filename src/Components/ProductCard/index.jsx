import styles from './index.module.css'

export default function ProductCard() {
    return (
        <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className={`shadow border rounded-4 p-3 col-12 d-flex flex-column ${styles.card}`}>
                
                <h2>Product Name</h2>
                <span>Product Weight</span>
                <p>$ Product Price</p>
                <button className='btn btn-primary'>Add To Cart</button>
            </div>
        </div>
    )
}
