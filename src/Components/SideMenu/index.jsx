import styles from './index.module.css';
import { TbCashRegister } from "react-icons/tb";
import { LuLayoutDashboard } from "react-icons/lu";

import { FaUserCircle } from "react-icons/fa";
import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

export default function SideMenu() {
    const navigate = useNavigate();
    const [links] = useState([
        { id: 1, name: "Dashboard", icon: <LuLayoutDashboard />, path: "/" },
        { id: 2, name: "Food and Drinks", icon: <LuLayoutDashboard />, path: "/orders" },
        { id: 3, name: "Bills", icon: <LuLayoutDashboard />, path: "/bills" },
        { id: 4, name: "settings", icon: <LuLayoutDashboard />, path: "/settings" },
    ]);
    const handleLogout = () => { navigate('/login') };
    const [activeTab,setActiveTab] = useState(0);

    return (
        <div className="d-flex flex-column border-end h-100 px-3 pb-5 justify-content-between" id={styles.SideMenu}>
            <div className='col-12 d-flex flex-column'>
            <div className='col-12 d-flex align-items-center gap-2 py-3'>
                < TbCashRegister className={styles.icon}/>
                <p className='m-0 fs-4'>Samrt<span id={styles.Logo}>POS</span></p>
            </div>
            {
                links.map((el,index) => (
                    // + styles.activeLink
                    <Link onClick={() => (setActiveTab(index))} to={el.path} key={el.id} className=
                    { 
                        "col-12 px-3 nav-link d-flex gap-2 align-items-center " 
                        + styles.link 
                        + " " 
                        + (activeTab == index && styles.activeLink)
                    }>
                    {el.icon}
                    <p className='m-0'>{el.name}</p>
                </Link>
                ))
            }
            </div>
            <div className='col-12 d-flex flex-column align-items-center gap-1' id={styles.Profile}>
                <FaUserCircle className={styles.fa}/>
                <img src={styles.userImg}/>
                <h5>User Name</h5>
                <p>User Role</p>
                <button onClick={handleLogout} className={styles.Btn}>Logout</button>
            </div>
        </div>
    )
}
