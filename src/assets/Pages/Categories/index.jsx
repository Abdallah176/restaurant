import { useNavigate } from 'react-router-dom';
import Header from '../../../Components/Header'
import { useCategories } from '../../../Store'
import styles from './index.module.css'
import SideCart from '../../../Components/SideCart';

export default function Categories() { 
    const {setActiveId , data: appCategories ,domain} = useCategories();
    const navigate = useNavigate();
    const openCategory = (documentId) => {
        setActiveId(documentId);
        navigate(documentId);
    };

    return (
        <div className='flex-grow-1' id={styles.Categories}>
            <Header tabName={"Categories"}/>
            <div className='d-flex flex-wrap col-12 container'>
            {
                appCategories.map((el) => (                    
                    <div key={el.documentId} className='col-10 col-md-6 col-lg-4 p-3' onClick={() => openCategory(el.documentId)}>
                        <div className='d-flex flex-column align-items-center gap-4 rounded-4 shadow border col-12 p-4' id={styles.Card}>
                            <img src={domain + el.category_img.url} />
                            <p key={el.documentId}>{el.category_name}</p>
                        </div>
                    </div>
                ))
            };
            </div>
        </div>
    )
};
