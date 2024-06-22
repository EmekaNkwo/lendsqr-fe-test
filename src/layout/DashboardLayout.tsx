import React from 'react'
import Topbar from '../components/Topbar'
import Sidebar from '../components/Sidebar'
import "./dashboardLayout.scss"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='dashboardLayout'>
            <Topbar />
            <div className="dashboardContainer ">
                <div className="left_dashboard">
                    <Sidebar />
                </div>
                <div className="right_dashboard">{children}</div>

            </div>
        </div>
    )
}

export default DashboardLayout