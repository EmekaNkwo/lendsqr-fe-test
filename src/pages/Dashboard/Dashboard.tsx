import UserSection from '../../components/UserSection'
import DashboardLayout from '../../layout/DashboardLayout'

const Dashboard = () => {
    return (
        <DashboardLayout>
            <div className="dashboard_container">
                <div className="dashboard_content">
                    <UserSection />
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Dashboard