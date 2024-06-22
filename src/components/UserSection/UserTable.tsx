import React, { useState } from 'react'
import "./userSection.scss"
import { Dropdown, Pagination, Spin } from 'antd'
import { ActivateImg, BlackListImg, EyeImg, NextButton, PrevButton, ThreeDotImg } from '../../assets/Images'
import { useNavigate } from 'react-router-dom';
import { useGetUsersQuery } from '../../redux/api/userApi';
import { IUserData } from '../../shared/types';
import moment from 'moment';
import TableHeader from './TableHeader';


const getUserStatus = (user: IUserData) => {
    const currentDate = moment();
    const lastActive = moment(user.lastActiveDate);
    const daysDifference = currentDate.diff(lastActive, 'days');

    if (lastActive > currentDate) {
        return "Inactive";
    } else if (daysDifference <= 10) {
        return "Active";
    } else if (daysDifference > 60) {
        return "Blacklisted";
    } else {
        return "Pending";
    }
};

const UserTable = () => {
    const navigate = useNavigate()
    const { data: users, isLoading } = useGetUsersQuery({});
    const [currentPage, setCurrentPage] = useState(1);
    const [countPerPage, setCountPerPage] = useState(10);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleCountChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCountPerPage(Number(event.target.value));
        setCurrentPage(1);
    };

    const paginatedData = users ? users.slice((currentPage - 1) * Number(countPerPage), currentPage * Number(countPerPage)) : [];

    return (
        <div className="user_table">
            <div className="user_table_box">
                <table className="user_table_container">
                    <thead>
                        <tr>
                            <TableHeader label="ORGANIZATION" />
                            <TableHeader label="USERNAME" />
                            <TableHeader label="EMAIL" />
                            <TableHeader label="PHONE NUMBER" />
                            <TableHeader label="DATE JOINED" />
                            <TableHeader label="STATUS" />
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            isLoading ? <tr><td>Loading user data... <Spin /></td></tr> : paginatedData?.map((data: IUserData) => <tr key={data?.id}>
                                <td>{data?.orgName}</td>
                                <td>{data?.userName}</td>
                                <td>{data?.email}</td>
                                <td>{data?.phoneNumber}</td>
                                <td>{moment(data?.createdAt).format("DD/MM/YYYY, h:mm A")}</td>
                                <td><span className='status' style={{
                                    backgroundColor: getUserStatus(data) === "Active" ? "rgba(228, 3, 59, 0.1)" : getUserStatus(data) === "Inactive" ? "rgba(84, 95, 125, 0.1)" : getUserStatus(data) === "Blacklisted" ? "rgba(228, 3, 59, 0.1)" : "rgba(233, 178, 0, 0.1)",
                                    color: getUserStatus(data) === "Active" ? "#39CD62" : getUserStatus(data) === "Inactive" ? "#545F7D" : "#E9B200"
                                }}>{getUserStatus(data)}</span></td>
                                <td className='action'>
                                    <Dropdown menu={
                                        {
                                            items: [{
                                                key: '1',
                                                label: (
                                                    <span onClick={() => navigate(`/users/${data?.id}`)} className='dropdown_label'>View Details</span>
                                                ),
                                                icon: <img src={EyeImg} alt={"ViewImg"} />,
                                            },
                                            {
                                                key: '2',
                                                label: (
                                                    <span>Blacklist User</span>
                                                ),
                                                icon: <img src={BlackListImg} alt={"BlackListImg"} />,
                                            },
                                            {
                                                key: '3',
                                                label: (
                                                    <span>Activate User</span>
                                                ),
                                                icon: <img src={ActivateImg} alt={"ActivateImg"} />,
                                            },
                                            ]
                                        }
                                    } placement='bottomLeft' arrow={false}>
                                        <img src={ThreeDotImg} alt={"ThreeDotImg"} />
                                    </Dropdown>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <div className="user_table_bottom">
                <div className="showing">Showing <select className='count_options' value={countPerPage} onChange={handleCountChange}>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select> out of {users ? users.length : 0}</div>
                <Pagination
                    defaultCurrent={1}
                    current={currentPage}
                    total={users ? users.length : 0}
                    pageSize={Number(countPerPage)}
                    showSizeChanger={false}
                    onChange={handlePageChange}
                    nextIcon={
                        <img src={NextButton} alt="nextIcon" className='icon' />
                    } prevIcon={<img src={PrevButton} alt="prevIcon" className='icon' />} />
            </div>
        </div>
    )
}
const MemoizedUserTable = React.memo(UserTable)
export default MemoizedUserTable