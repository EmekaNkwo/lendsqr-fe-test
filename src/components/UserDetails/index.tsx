import { useNavigate, useParams } from "react-router-dom"
import { BackImg, Star, UserAvatar } from "../../assets/Images"
import { OutlinedButton } from "../../shared/UIs/Buttons"
import "./userDetails.scss"
import UserInfo from "./UserInfo"
import { useState } from "react"
import { useGetUserInfoQuery } from "../../redux/api/userApi"
import { Spin } from "antd"

const UserDetailsContainer = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [activeTab, setActiveTab] = useState('General Details');
    const { data: userData, isLoading } = useGetUserInfoQuery(id as string)

    const handleTabClick = (tabName: string) => {
        setActiveTab(tabName);
    };
    return (
        <div className="user_details">
            <div className="user_details_header" onClick={() => navigate(-1)}>
                <img src={BackImg} alt="back_arrow" />
                Back to Users
            </div>
            <div className="user_details_top">
                <h3>User Details</h3>
                <div className="top_buttons">
                    <OutlinedButton variant="blacklist" title="BLACKLIST USER" />
                    <OutlinedButton variant="accept" title="ACTIVATE USER" />
                </div>
            </div>
            <div className="user_info_top">
                <div className="user_content">
                    <img src={UserAvatar} alt="user_avatar" />
                    <div className="user_info_column">
                        <span className="user_name">{userData?.profile?.firstName} {userData?.profile?.lastName}</span>
                        <p className="user_bvn">{userData?.profile?.bvn}</p>
                    </div>
                    <div className="user_divider" />
                    <div className="user_info_column">
                        <span className="user_tier">User's Tier</span>
                        <img src={Star} alt="star_img" className="user_star" />
                    </div>
                    <div className="user_divider" />
                    <div className="user_info_column">
                        <span className="user_amount">₦{userData?.accountBalance}</span>
                        <p className="user_account">{userData?.accountNumber}/{userData?.bankName ?? "-"}</p>
                    </div>
                </div>
                <div className="user_details_tabs">
                    <div
                        className={`user_tab ${activeTab === 'General Details' ? 'active_tab' : ''}`}
                        onClick={() => handleTabClick('General Details')}
                    >
                        General Details
                    </div>
                    <div
                        className={`user_tab ${activeTab === 'Documents' ? 'active_tab' : ''}`}
                        onClick={() => handleTabClick('Documents')}
                    >
                        Documents
                    </div>
                    <div
                        className={`user_tab ${activeTab === 'Bank Details' ? 'active_tab' : ''}`}
                        onClick={() => handleTabClick('Bank Details')}
                    >
                        Bank Details
                    </div>
                    <div
                        className={`user_tab ${activeTab === 'Loans' ? 'active_tab' : ''}`}
                        onClick={() => handleTabClick('Loans')}
                    >
                        Loans
                    </div>
                    <div
                        className={`user_tab ${activeTab === 'Savings' ? 'active_tab' : ''}`}
                        onClick={() => handleTabClick('Savings')}
                    >
                        Savings
                    </div>
                    <div
                        className={`user_tab ${activeTab === 'App and System' ? 'active_tab' : ''}`}
                        onClick={() => handleTabClick('App and System')}
                    >
                        App and System
                    </div>
                </div>
            </div>
            {
                activeTab === 'General Details' ? <>
                    {
                        isLoading ? <Spin /> : <UserInfo data={userData} />
                    }
                </> : <>
                    <span>{activeTab}</span>

                </>
            }
        </div>
    )
}

export default UserDetailsContainer