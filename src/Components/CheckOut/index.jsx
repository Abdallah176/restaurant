import { useState } from 'react';
import { useCart, useCategories } from '../../Store';
import styles from './index.module.css'
import axios from 'axios';
import Swal from 'sweetalert2';
export default function CheckOut() {
    const {closeCheckOut ,productsInCart ,resetCart,closeCart} = useCart();
    const {domain} = useCategories();
    const getTotal = () => {
        return productsInCart.reduce((acc, el) => acc + (el.qty * el.product_price) , 0);
    }

    const [customerAmount,setCustomerAmount] = useState();
    const [remain,setRemain] = useState();

    const handleChange  = (e) => {
        setCustomerAmount(e.target.value);
        setRemain(+e.target.value - getTotal())
    }
    const handleClose = (e) => {    
        e.stopPropagation();
        closeCheckOut();
    }

    const createRecords = (invoiceId) => {
        productsInCart.forEach((el) => {
            let url = domain + "/api/invs"
            let data = {
                product_qty: el.qty,
                invoice: {
                    connect: [invoiceId]
                },
                product: {
                    connect: [el.doucmentId]
                }
            }
            axios.post(url , { data: data }).then(() => {
                console.log("Record Saved To DB");
            })
        });
        Swal.fire({
            icon: 'success',
            title: 'Invoice Sucessfully Saved !',
            timer: 1500
        }).then(() => {
            closeCheckOut();
            resetCart();
            closeCart()
        })
    }

    const createNewInvoice = (total) => {
        let endPoint = "/api/invoices"
        let data = {
            invoices_total: total,
            pos_user: {
                connect: ['ypcedzdhm53jfq2y5fpfcbci'],
                // documentId: "ypcedzdhm53jfq2y5fpfcbci"
            }
        }
        let url = domain + endPoint; 
        axios.post(url, 
            { data: data }
        ).then((res) => {
            let newInvoiced = res.data.data.doucmentId;
            createRecords(newInvoiced)
            // console.log('Created New Invoice With Id' + newInvoiced)
        }).catch((err) => {
            console.log(err);
        })
    }

    const saveInvoice = () => {
        let total = getTotal();
        createNewInvoice(total);
        // console.log(total);
    }
    return (
        <div className={styles.overLay} onClick={handleClose}>
            <div onClick={e => e.stopPropagation()} className='bg-white col-10 col-md-6 col-lg-4 p-3 rounded mt-5 shadow animate__animated animate__fadeInDown' id={styles.content}>
                <p>CheckOut</p>
                <h3>Total is : ${getTotal()}</h3>
                <h3>Customer amount : {<input value={customerAmount} onChange={handleChange} className='form-control' type='number'placeholder='Enter Amount Here' />}</h3>
                <h4>Remain : {remain}</h4>
                <button onClick={saveInvoice} className='btn btn-primary col-12' disabled={remain < 0 ? true : false}>Save & print</button>
            </div>
        </div>
    )
}
