import { useEffect , useState } from "react";
import { useNavigate } from "react-router-dom"
import Header from "../../../Components/Header";
import { useCategories } from "../../../Store";

export default function CategoryProducts() {
    const navigate = useNavigate();
    const [check,setCheck] = useState(false);
    const {data: categories , resetActiveId ,active_cat_id} = useCategories();
    const [categoryInfo,setCategoryInfo] = useState({});

    useEffect (() => {
            let obj = categories.find((el) => { return el.documentId == active_cat_id});
            obj ? (setCategoryInfo(obj), setCheck(true)) : navigate("/error");
        return()=>{ resetActiveId() }
    },[]);

    return (
        check && 
        <div>
            <Header tabName={categoryInfo.name} />
            <h1>Products In Category : {categoryInfo.name}</h1>
        </div>
    )
};
