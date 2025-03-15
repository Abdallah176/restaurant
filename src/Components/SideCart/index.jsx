import { useEffect, useState } from 'react';
import { useCart } from '../../Store'
import styles from './index.module.css'
export default function SideCart() {
  const {closeCart,productsInCart,decrementQty} = useCart();
  const [total,setTotal] = useState(0);

  useEffect(() => {
      let newTotal = productsInCart.reduce((acc, el) => acc + (el.qty * el.product_price) , 0);
      setTotal(newTotal);
    },[productsInCart])

  return (
    <div className={styles.overLay} onclick={closeCart}>
        <div onClick={(e) => e.stopPropagation()} id={styles.content} className='p-3 d-flex flex-column animate__animated animate__fadeInRight'>
            <p>Your Cart</p>
            <table className='table table-dark table-bordered'>
                <thead>
                    <tr>
                        <th>-</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                  {
                    productsInCart.map((el,index) => (
                      <tr>
                          <td>{index + 1}</td>
                          <td>
                              <div className='d-flex align-items-center gap-2'>
                                  <img src={el.product_img} alt="" />
                                  <p className='m-0'>{el.product_name}</p>
                              </div>
                          </td>
                          <td>$ {el.product_price}</td>
                          <td>
                              <div className='d-flex align-items-center justify-content-center gap-2'>
                                  <button className='btn btn-danger' onClick={ ()=> decrementQty(el.documentId)}>-</button>
                                  <p className='m-0'>{el.qty}</p>
                                  <button className='btn btn-success'>+</button>
                              </div>
                          </td>
                          <td>$ {el.qty * el.product_price}</td>
                      </tr>
                    ))
                  }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={4}>Total</td>
                        <td colSpan={1}>$ {total}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
  )
}
