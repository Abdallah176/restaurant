import { useNavigate } from 'react-router-dom';
import Header from '../../../Components/Header'
import { useCategories } from '../../../Store'
import styles from './index.module.css'

export default function Categories() {
    const {data: appCategories , setActiveId} = useCategories();
    const navigate = useNavigate();
    const openCategory = (path, cat_id) => {
        setActiveId(cat_id);
        navigate(path);
    };
    return (
        <div className='flex-grow-1' id={styles.Categories}>
            <Header tabName={"Categories"}/>
            <div className='d-flex flex-wrap col-12 container'>
            {
                appCategories.map((el) => (
                    
                    <div className='col-10 col-md-6 col-lg-4 p-3' onClick={() => openCategory(el.path, el.documentId)}>
                        <div className='d-flex flex-column align-items-center gap-4 rounded-4 shadow border col-12 p-4' id={styles.Card }>
                            <img src={el.imgUrl} alt="" />
                            <p key={el.documentId}>{el.name}</p>
                        </div>
                    </div>
                ))
            };
            </div>
        </div>
    )
};
