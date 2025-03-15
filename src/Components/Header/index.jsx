import { IoMdArrowRoundBack } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa";
import styles from "./index.module.css"
import { useNavigate } from "react-router-dom";
import { useCart, useCategories } from "../../Store";
import { FaCartArrowDown } from "react-icons/fa6";


export default function Header({ tabName }) {
    const navigate = useNavigate();
    const {active_cat_id} = useCategories();
    const {openCart,productsInCart} = useCart();

    return (
            <header className='col-12 d-flex p-4 gap-4 align-items-center justify-content-between'>
                <div className="d-flex align-items-center">
                    {
                        active_cat_id != 0 &&
                        <IoMdArrowRoundBack className={styles.backBtn} onClick={() => navigate('/orders')} />
                    }
                    <div className='col-12 d-flex align-items-center gap-2'>
                        <p className="m-0">Food & Drinks</p>
                        <FaAngleRight />
                        <p className="m-0">{tabName}</p>
                    </div>
                </div>
                <div className="d-flex align-items-center gap-2">
                    <FaCartArrowDown onClick={openCart}/>
                    <span className="bg-primary p-2 rounded-5">{productsInCart.length}</span>
                </div>
            </header>
            
    )
}
