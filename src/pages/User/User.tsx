import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import {
  active_users,
  all_users,
  table_drop,
  users_loans,
  users_savings,
} from "../../assets";
import { Card } from "../../components";
import { useGetUsersQuery } from "../../services/fetchUsers";
import "./user.css";

// import useFetch from "../../hooks/useFetch";

export default function User() {
  const userHeader = [
    {
      title: "Users",
      icon: all_users,
      value: 2453,
    },
    {
      title: "Active Users",
      icon: active_users,
      value: 2453,
    },
    {
      title: "Users with Loans",
      icon: users_loans,
      value: 12453,
    },
    {
      title: "Users with Savings",
      icon: users_savings,
      value: 102453,
    },
  ];

  const count: number = 10;

  const { data: usersList, isFetching } = useGetUsersQuery(count);

  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    try {
      setUsers(usersList);
    } catch (err: any) {
      setError(err);
    }
  }, [usersList]);

  const [dropDown, setDropDown] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPage = currentPage * count;
  const indexOfFirstPage = indexOfLastPage - count;
  const page = users?.slice(indexOfFirstPage, indexOfLastPage);

  const nPages = Math.ceil(users?.length / count);
  const pageNumbers = [];
  for (let i = 1; i <= nPages; i++) {
    pageNumbers.push(i);
  }

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  interface UserProps {
    id: number;
    orgName: string;
    userName: string;
    email: string;
    phoneNumber: number;
    createdAt: string;
    accountBalance: number;
    accountNumber: string;
    // loanRepayment: number;
  }
  if (isFetching) return <h1>Loading...</h1>;

  return (
    <>
      <div className="user_container">
        <h1 className="user_title">Users</h1>

        <div className="user_headers">
          {userHeader.map((item, index: number) => {
            return (
              <Card
                key={index}
                title={item.title}
                icon={item.icon}
                value={item.value}
              />
            );
          })}
        </div>

        <div className="users_table">
          <div
            className="header_drop_menu"
            style={{ display: dropDown ? "flex" : "none" }}
          >
            <div className="input_group">
              <label htmlFor="organisation">Organisation</label>
              <select name="" id="" className="input_field">
                <option value="">Select</option>
                <option value="">All</option>
                <option value="">Active</option>
                <option value="">Inactive</option>
              </select>
            </div>
            <div className="input_group">
              <label htmlFor="organisation">Username</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="User"
                className="input_field"
              />
            </div>
            <div className="input_group">
              <label htmlFor="organisation">Email</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Email"
                className="input_field"
              />
            </div>
            <div className="input_group">
              <label htmlFor="organisation">Date</label>
              <input
                type="date"
                name=""
                id=""
                placeholder="Date"
                className="input_field"
              />
            </div>
            <div className="input_group">
              <label htmlFor="organisation">Phone Number</label>
              <input
                type="phone"
                name=""
                id=""
                placeholder="Phone Number"
                className="input_field"
              />
            </div>
            <div className="input_group">
              <label htmlFor="status">Status</label>
              <select name="" id="" className="input_field">
                <option value="">Select</option>
                <option value="">All</option>
                <option value="">Active</option>
                <option value="">Inactive</option>
              </select>
            </div>
            <div className="drop_buttons">
              <button className="drop_button reset">Reset</button>
              <button className="drop_button filter">Filter</button>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>
                  ORGANZATION{" "}
                  <img
                    className="table_drop"
                    src={table_drop}
                    onClick={() => {
                      dropDown ? setDropDown(false) : setDropDown(true);
                    }}
                    alt=""
                  />
                </th>
                <th>
                  USERNAME{" "}
                  <img
                    className="table_drop"
                    src={table_drop}
                    onClick={() => {
                      dropDown ? setDropDown(false) : setDropDown(true);
                    }}
                    alt=""
                  />
                </th>
                <th>
                  EMAIL{" "}
                  <img
                    className="table_drop"
                    src={table_drop}
                    onClick={() => {
                      dropDown ? setDropDown(false) : setDropDown(true);
                    }}
                    alt=""
                  />
                </th>
                <th>
                  PHONE NUMBER{" "}
                  <img
                    className="table_drop"
                    src={table_drop}
                    onClick={() => {
                      dropDown ? setDropDown(false) : setDropDown(true);
                    }}
                    alt=""
                  />
                </th>
                <th>
                  DATE JOINED{" "}
                  <img
                    className="table_drop"
                    src={table_drop}
                    onClick={() => {
                      dropDown ? setDropDown(false) : setDropDown(true);
                    }}
                    alt=""
                  />
                </th>

                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {page?.map((user: UserProps) => {
                return (
                  <tr key={user.id}>
                    <td>{user.orgName}</td>
                    <td>{user.userName}</td>
                    <td>{user.email}</td>
                    <td>{user.phoneNumber}</td>

                    <td>
                      <Moment format="YYYY/MM/DD">{user.createdAt}</Moment>
                    </td>

                    <td>
                      <Link to={`${user.id}`}>
                        <button className="view_user">View User</button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="table_footer">
            <div className="footer_left">
              <span>Showing</span> <span>{currentPage}</span> <span>to</span>{" "}
              <span>{count}</span> <span>of</span> <span>{page?.length}</span>{" "}
            </div>
            <div className="footer_right">
              <div className="pagination">
                <ul>
                  <li className="paginate" onClick={prevPage}>
                    <a href="#!">{"<"}</a>
                  </li>
                  {pageNumbers.map((number) => (
                    <li
                      key={number}
                      className={`paginate ${
                        currentPage === number ? "active" : ""
                      }`}
                    >
                      <a onClick={() => setCurrentPage(number)} href="#!">
                        {number}
                      </a>
                    </li>
                  ))}
                  <li className="paginate" onClick={nextPage}>
                    <a href="#!">{">"}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
