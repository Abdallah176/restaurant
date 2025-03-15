import { useNavigate } from 'react-router-dom';
import Header from '../../../Components/Header'
import { useCategories } from '../../../Store'
import styles from './index.module.css'
// import axios from 'axios';
// import { useEffect, useState } from 'react';

export default function Categories() {
    const domain = "http://localhost:1337";
    // const {data: appCategories 
    const {setActiveId , data: appCategories} = useCategories();

    // const [appCategories, setAppCategories] = useState([]);
    const navigate = useNavigate();
    const openCategory = (documentId) => {
        setActiveId(documentId);
        navigate(documentId);
    };

    // const getData = () => {
    //     let endPoint = "/api/categories";
    //     let url = domain + endPoint;
    //     axios.get(url , {
    //         params: {populate: "*"}
            
    //     }).then((res) => {
    //         console.log(res.data.data);
    //         setAppCategories(res.data.data)
    //     }); 
    // }

    // useEffect(() => {
    //     getData();
    // }, []);

    return (
        <div className='flex-grow-1' id={styles.Categories}>
            <Header tabName={"Categories"}/>
            <div className='d-flex flex-wrap col-12 container'>
            {
                appCategories.map((el) => (                    
                    <div key={el.documentId} className='col-10 col-md-6 col-lg-4 p-3' onClick={() => openCategory(el.documentId)}>
                        <div className='d-flex flex-column align-items-center gap-4 rounded-4 shadow border col-12 p-4' id={styles.Card }>
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
