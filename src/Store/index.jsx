import { create } from "zustand";
import ColaImg from '../assets/Imgs/Categories/Cola.png'
import BurgerImg from '../assets/Imgs/Categories/Burger.png'
import PizaaImg from '../assets/Imgs/Categories/Pizza.png'
import WokImg from '../assets/Imgs/Categories/Wok.png'
import DesertImg from '../assets/Imgs/Categories/Desert.png'
import pastaImg from '../assets/Imgs/Categories/Pasta.png'
import Categories from "../assets/Pages/Categories";

export const useCategories = create ((set) => ( 
    {
        domain : "http://localhost:1337", 
        data : [
            { documentId: 1 , name: "Cold Drinks" , path: "cold" , imgUrl: ColaImg },
            { documentId: 2 , name: "Burgers" , path: "burger" , imgUrl: BurgerImg},
            { documentId: 3 , name: "Pizza" , path: "pizza" , imgUrl: PizaaImg},
            { documentId: 4 , name: "Wok" , path: "wok" , imgUrl: WokImg},
            { documentId: 5 , name: "Deserts" , path: "desert" , imgUrl: DesertImg},
            { documentId: 6 , name: "Pasta" , path: "pasta" , imgUrl: pastaImg},
        ],
        active_cat_id: 0,
        setData: (categories) => ( set(() => ({ data: categories })) ),
        setActiveId: (activeTab) => (set(() => ({ active_cat_id: activeTab }))),
        resetActiveId: () => (set(() => ({ active_cat_id: 0 })))
    }
));

export const useCart = create((set) => ({
    cartIndex: false,
    productsInCart: [],
    checkOutIndex: false,

    openCart: () => ( set(() => ({cartIndex: true})) ),
    closeCart: () => ( set(() => ({cartIndex: false})) ),

    openCheckOut: () => ( set(() => ({checkOutIndex: true})) ),
    closeCheckOut: () => ( set(() => ({checkOutIndex: false})) ),

    decrementQty : (documentId) => ( set((state) => {
        let copyArray = [...state.productsInCart];
        let index = copyArray.findIndex(el => el.documentId == documentId);
        if( copyArray[index].qty > 1 ) {
            copyArray[index].qty--;
        } else {
            copyArray.splice(index,1);
        }
        return { productsInCart: copyArray };
    })),

    incrementQty : (documentId) => ( set((state) => {
        let copyArray = [...state.productsInCart];
        let index = copyArray.findIndex(el => el.documentId == documentId);
        copyArray[index].qty++;
        return { productsInCart: copyArray };
    })),

    addToCart: (product) => (set((state) => {
        let copy = [...state.productsInCart];
        let obj = copy.find(el => el.documentId == product.documentId);
        if (obj) {
            // increment
            state.incrementQty(product.documentId);
        } else {
            copy.push(product);
        }
        return { productsInCart: copy }
    })),

    resetCart: () => ( set(() => ({ productsInCart: [] })))

}));

