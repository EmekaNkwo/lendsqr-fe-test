import { useEffect, useState } from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import {
  active_users,
  all_users,
  table_drop,
  users_loans,
  users_savings,
} from "../../assets";
import { Card, LoadingSpinner } from "../../components";
import { useMediaQuery } from "../../hooks";
import { IUser } from "../../models";
import { useGetUsersQuery } from "../../services/fetchUsers";
import "./user.scss";

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

  const isDesktop = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    try {
      setUsers(usersList);
    } catch (err: any) {
      console.log(err);
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

  if (isFetching) return <LoadingSpinner />;

  return (
    <>
      <div className="user_container">
        <span className="user_title">Users</span>

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

        {isDesktop ? (
          <div className="users_table">
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
                    USERNAME
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

                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {page?.map((user: IUser) => {
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
                <span>Showing</span> <b>{currentPage}</b> <span>to</span>{" "}
                <b>{count}</b> <span>of</span> <b>{page?.length}</b>{" "}
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
                          <b> {number}</b>
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
        ) : (
          <b className="mobile_response">
            View Page on a Desktop Browser to view table
          </b>
        )}
      </div>
    </>
  );
}
