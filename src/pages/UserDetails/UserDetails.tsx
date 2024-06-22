import DashboardLayout from '../../layout/DashboardLayout'
import UserDetailsContainer from '../../components/UserDetails'

const UserDetails = () => {
    return (
        <DashboardLayout>
            <div className="dashboard_user_details">
                <div className="dashboard_user_details_content">
                    <UserDetailsContainer />
                </div>
            </div>
        </DashboardLayout>
    )
}

export default UserDetails