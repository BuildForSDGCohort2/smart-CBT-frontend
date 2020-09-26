import React from 'react'
import DashboardSideBar from './DashboardSidebar'
import style from "../assets/RouteStyle/layout.module.scss"

export default function Layout({children}) {
    return (
        
        <div className={style["container"]}>
            <DashboardSideBar/>
            <main>
                {children}
            </main>
        </div>
    )
}
