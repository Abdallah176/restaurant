import { useEffect , useState } from "react";
import { useNavigate , useParams } from "react-router-dom"


export default function CategoryProducts() {
    const params = useParams();
    const navigate = useNavigate();
    const [check,setCheck] = useState(false);
    const [categories] = useState([
        { name: "Cold Drinks" , path: "cold" , price: 500 },
        { name: "Burgers" , path: "burger" , price: 600},
        { name: "Pizza" , path: "pizza" , price: 500},
        { name: "Wok" , path: "wok" , price: 600},
        { name: "Deserts" , path: "desert" , price: 650},
        { name: "Pasta" , path: "pasta" , price: 300},
    ]);

    useEffect (() => {
        let obj = categories.find((el) => { return el.path == params.catName});
        if (obj) {
            setCheck(true);
        } else {
            navigate("/error");
        }
    },[]);

    console.log(params);
    return (
        check && <div>
            Products in {params.catName}
        </div>
    )
}
