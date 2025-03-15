import { useEffect , useState } from "react";
import { useNavigate, useParams} from "react-router-dom"
import Header from "../../../Components/Header";
import { useCategories } from "../../../Store";
import ProductCard from "../../../Components/ProductCard";
import axios from 'axios';

export default function CategoryProducts() {
    const params = useParams(); 
    const { resetActiveId, domain} = useCategories();
    const navigate = useNavigate();
    const [check,setCheck] = useState(true);
    const [categoryInfo,setCategoryInfo] = useState({});

    useEffect (() => {
        let documentId = params.id;
        let endPoint = `/api/categories/${documentId}`;
        let url = domain + endPoint;
        axios.get(url , {params: {populate: "*"}}).then((res) => {
            setCategoryInfo(res.data.data);
            setCheck(true);
        }).catch(() => {
            navigate('/error');
        })
        //     let obj = categories.find((el) => { return el.documentId == active_cat_id});
        //     obj ? (setCategoryInfo(obj), setCheck(true)) : navigate("/error");
        return ()=> { resetActiveId() }

    },[]);

    return (
        check && 
        <div>
            <Header tabName={categoryInfo.category_name} />
            <h1>Products In Category : {categoryInfo.category_name}</h1>
            <div className="col-12 d-flex flex-wrap">
                {
                    categoryInfo.products && categoryInfo.products.map((el) => (
                        <ProductCard key={el.documentId} />
                    ))
                }
                {
                    categoryInfo.products && categoryInfo.products.length == 0 && <h1>There are no products</h1>
                }
            </div>   
        </div>
    )
};
