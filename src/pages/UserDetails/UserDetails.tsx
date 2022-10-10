import React from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";

import { useGetUserDetailsQuery } from "../../services/fetchUsers";
import "./userDetails.css";

export default function UserDetails() {
  const { id } = useParams();

  const { data: user, isFetching } = useGetUserDetailsQuery(id);

  return (
    <div>
      {isFetching ? (
        "Loading"
      ) : (
        <>
          <div className="user_container">
            <div className="detail_header">
              <Link to="/dashboard"> Back to Users</Link>
              <div className="detail_control">
                <h1>User Details</h1>
                <div className="detail_buttons">
                  <button className="edit">BLACKLIST USER</button>
                  <button className="delete">ACTIVATE USER</button>
                </div>
              </div>
            </div>
            <div className="user_details">
              <div className="profile_details">
                <div className="user_profile">
                  <img src="" alt={user?.userName} />
                </div>
                <div className="user_info">
                  <span className="user_name">
                    {user?.profile.firstName} {user?.profile.lastName}
                  </span>
                  <p>{user?.profile.bvn}</p>
                </div>
                <div className="separation"></div>
                <div className="user_tier">
                  <span>User's Tier</span>
                  <p>
                    <BsStarFill /> <BsStar /> <BsStar />
                  </p>
                </div>
                <div className="separation"></div>
                <div className="user_account_details">
                  <span>{user?.accountBalance}</span>
                  <p>
                    {user?.accountNumber} | {user?.orgName}
                  </p>
                </div>
              </div>

              <ul className="user_navbar">
                <li>
                  <a href="#!" className="user_navbar_links active">
                    General Details
                  </a>
                </li>
                <li>
                  <a href="#!"> Documents</a>
                </li>
                <li>
                  <a href="#!"> Bank Details</a>
                </li>
                <li>
                  <a href="#!"> Loans</a>
                </li>
                <li>
                  <a href="#!"> Savings</a>
                </li>
                <li>
                  <a href="#!"> App and System</a>
                </li>
              </ul>
            </div>

            <div className="user_content">
              <div className="content">
                <h4>Personal Information</h4>
                <div className="content_row">
                  <div className="row_details">
                    <span className="row_header">FULL NAME</span>
                    <span className="row_text">
                      {user?.profile?.firstName} {user?.profile.lastName}
                    </span>
                  </div>
                  <div className="row_details">
                    <span className="row_header">PHONE NUMBER</span>
                    <span className="row_text">
                      {user?.profile.phoneNumber}
                    </span>
                  </div>
                  <div className="row_details">
                    <span className="row_header">EMAIL ADDRESS</span>
                    <span className="row_text">{user?.email}</span>
                  </div>
                  <div className="row_details">
                    <span className="row_header">BVN</span>
                    <span className="row_text">{user?.profile.bvn}</span>
                  </div>
                  <div className="row_details">
                    <span className="row_header">GENDER</span>
                    <span className="row_text">{user?.profile.gender}</span>
                  </div>
                  <div className="row_details">
                    <span className="row_header">MARITAL STATUS</span>
                    <span className="row_text">
                      {" "}
                      {user?.profile.maritalStatus
                        ? user?.profile.maritalStatus
                        : "No Marital Status Record"}
                    </span>
                  </div>
                  <div className="row_details">
                    <span className="row_header">CHILDREN</span>
                    <span className="row_text">
                      {user?.profile.noOfChildren
                        ? user?.profile.noOfChildren
                        : "No Children Record"}
                    </span>
                  </div>
                  <div className="row_details">
                    <span className="row_header">TYPE OF RESIDENCE</span>
                    <span className="row_text">
                      {" "}
                      {user?.profile.residenceType
                        ? user?.profile.residenceType
                        : "No Residence Type Record"}
                    </span>
                  </div>
                </div>
              </div>
              <hr />
              <div className="content">
                <h4>Education and Employment</h4>
                <div className="content_row">
                  <div className="row_details">
                    <span className="row_header">LEVEL OF EDUCATION</span>
                    <span className="row_text">{user?.education.level}</span>
                  </div>
                  <div className="row_details">
                    <span className="row_header">EMPLOYMENT STATUS</span>
                    <span className="row_text">
                      {user?.education.employmentStatus}
                    </span>
                  </div>
                  <div className="row_details">
                    <span className="row_header">SECTOR OF EMPLOYMENT</span>
                    <span className="row_text">{user?.education.sector}</span>
                  </div>
                  <div className="row_details">
                    <span className="row_header">DURATION OF EMPLOYMENT</span>
                    <span className="row_text">{user?.education.duration}</span>
                  </div>
                  <div className="row_details">
                    <span className="row_header">OFFICE EMAIL</span>
                    <span className="row_text">
                      {user?.education.officeEmail}
                    </span>
                  </div>
                  <div className="row_details">
                    <span className="row_header">MONTHLY INCOME</span>
                    <span className="row_text">
                      {user?.education.monthlyIncome[0]} -
                      {user?.education.monthlyIncome[1]}
                    </span>
                  </div>
                  <div className="row_details">
                    <span className="row_header">LOAN REPAYMENT</span>
                    <span className="row_text">
                      {user?.education.loanRepayment}
                    </span>
                  </div>
                </div>
                <hr />
              </div>
              <div className="content">
                <h4>Socials</h4>
                <div className="content_row">
                  <div className="row_details">
                    <span className="row_header">TWITTER</span>
                    <span className="row_text">
                      {user?.socials.twitter ? user?.socials.twitter : "None"}
                    </span>
                  </div>
                  <div className="row_details">
                    <span className="row_header">FACEBOOK</span>
                    {user?.socials.facebook ? user?.socials.facebook : "None"}
                    <span className="row_text"></span>
                  </div>
                  <div className="row_details">
                    <span className="row_header">INSTAGRAM</span>
                    {user?.socials.instagram ? user?.socials.instagram : "None"}
                    <span className="row_text"></span>
                  </div>
                </div>
              </div>
              <hr />
              <div className="content">
                <h4>Guarantor</h4>
                <div className="content_row">
                  <div className="row_details">
                    <span className="row_header">FULL NAME</span>
                    <span className="row_text">
                      {user?.guarantor.firstName} {user?.guarantor.lastName}
                    </span>
                  </div>
                  <div className="row_details">
                    <span className="row_header">PHONE NUMBER</span>
                    <span className="row_text">
                      {user?.guarantor.phoneNumber}
                    </span>
                  </div>
                  <div className="row_details">
                    <span className="row_header">EMAIL ADDRESS</span>
                    <span className="row_text">
                      {user?.guarantor.emailAddress
                        ? user?.guarantor.emailAddress
                        : "No Email Address Record"}
                    </span>
                  </div>
                  <div className="row_details">
                    <span className="row_header">RELATIONSHIP</span>
                    <span className="row_text">
                      {user?.guarantor.relationship
                        ? user?.guarantor.relationship
                        : "No Relationship Record"}
                    </span>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
