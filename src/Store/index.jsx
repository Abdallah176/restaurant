import { create } from "zustand";
import ColaImg from '../assets/Imgs/Categories/Cola.png'
import BurgerImg from '../assets/Imgs/Categories/Burger.png'
import PizaaImg from '../assets/Imgs/Categories/Pizza.png'
import WokImg from '../assets/Imgs/Categories/Wok.png'
import DesertImg from '../assets/Imgs/Categories/Desert.png'
import pastaImg from '../assets/Imgs/Categories/Pasta.png'

export const useCategories = create ((set) => ( 
    {
        data : [
            { documentId: 1 , name: "Cold Drinks" , path: "cold" , imgUrl: ColaImg },
            { documentId: 2 , name: "Burgers" , path: "burger" , imgUrl: BurgerImg},
            { documentId: 3 , name: "Pizza" , path: "pizza" , imgUrl: PizaaImg},
            { documentId: 4 , name: "Wok" , path: "wok" , imgUrl: WokImg},
            { documentId: 5 , name: "Deserts" , path: "desert" , imgUrl: DesertImg},
            { documentId: 6 , name: "Pasta" , path: "pasta" , imgUrl: pastaImg},
        ],
        active_cat_id: 0,
        setActiveId: (activeTab) => (set(() => ({ active_cat_id: activeTab }))),
        resetActiveId: () => (set(() => ({ active_cat_id: 0 })))
    }
));

