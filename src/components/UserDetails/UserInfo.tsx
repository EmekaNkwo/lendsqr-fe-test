import { Divider } from 'antd'
import { IUserData } from '../../shared/types'
import "./userDetails.scss"

interface IProps {
    data: IUserData
}

const DetailItem = ({ label, value }: { label: string, value: string }) => (
    <div className="details">
        <span>{label}</span>
        <p>{value}</p>
    </div>
);

const UserInfo = ({ data }: IProps) => {
    const personalDetails = [
        { label: "FULL NAME", value: `${data?.profile?.firstName} ${data?.profile?.lastName}` },
        { label: "PHONE NUMBER", value: data?.phoneNumber },
        { label: "EMAIL ADDRESS", value: data?.email },
        { label: "BVN", value: data?.profile?.bvn },
        { label: "GENDER", value: data?.profile?.gender },
        { label: "MARITAL STATUS", value: data?.profile?.maritalStatus },
        { label: "CHILDREN", value: data?.profile?.children },
        { label: "TYPE OF RESIDENCE", value: data?.profile?.address }
    ];
    const educationDetails = [
        { label: "LEVEL OF EDUCATION", value: data?.education?.level },
        { label: "EMPLOYMENT STATUS", value: data?.education?.employmentStatus },
        { label: "SECTOR OF EMPLOYMENT", value: data?.education?.sector },
        { label: "DURATION OF EMPLOYMENT", value: data?.education?.duration },
        { label: "OFFICE EMAIL", value: data?.education?.officeEmail },
        { label: "MONTHLY INCOME", value: data?.education?.monthlyIncome },
        { label: "LOAN REPAYMENT", value: data?.education?.loanRepayment }
    ];
    const socialDetails = [
        { label: "TWITTER", value: data?.socials?.twitter },
        { label: "FACEBOOK", value: data?.socials?.facebook },
        { label: "INSTAGRAM", value: data?.socials?.instagram }
    ];

    const guarantorDetails = [
        { label: "FULL NAME", value: `${data?.guarantor?.firstName} ${data?.guarantor?.lastName}` },
        { label: "PHONE NUMBER", value: data?.guarantor?.phoneNumber },
        { label: "EMAIL ADDRESS", value: data?.guarantor?.phoneNumber },
        { label: "RELATIONSHIP", value: data?.guarantor?.phoneNumber }
    ];

    return (
        <div className="user_info_container">
            <div className="user_info">
                <h3>Personal Information</h3>
                <div className="user_info_content">
                    {personalDetails?.map((detail, index) => (
                        <DetailItem key={index} label={detail?.label} value={detail?.value ?? "-"} />
                    ))}
                </div>
            </div>
            <Divider />
            <div className="user_info_secondary">
                <h3>Education and Employment</h3>
                <div className="user_info_content">
                    {educationDetails?.map((detail, index) => (
                        <DetailItem key={index} label={detail?.label} value={detail?.value ?? "-"} />
                    ))}
                </div>
            </div>
            <Divider />
            <div className="user_info">
                <h3>Socials</h3>
                <div className="user_info_content">
                    {socialDetails?.map((detail, index) => (
                        <DetailItem key={index} label={detail?.label} value={detail?.value ?? "-"} />
                    ))}
                </div>
            </div>
            <Divider />
            <div className="user_info">
                <h3>Guarantor</h3>
                <div className="user_info_content">
                    {guarantorDetails?.map((detail, index) => (
                        <DetailItem key={index} label={detail?.label} value={detail?.value ?? "-"} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default UserInfo;