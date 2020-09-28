import React from 'react'
import DashboardSideBar from './DashboardSidebar'

import style from "../assets/RouteStyle/layout.module.scss"
import DashboardTopBar from './DashboardTopBar'

export default function Layout({children}) {
    return (
        <>
        <DashboardTopBar/>
        <div className={style["container"]}>
            <DashboardSideBar/>
            <main>
                {children}
            </main>
        </div>
        </>
    )
}
