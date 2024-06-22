import {
    UserImg, ActiveUserImg,
    LoanUserImg, SavingsUserImg, UsersImg,
    GuarantorImg, LoansImg, DecisionImg,
    SavingsImg, LoanRequestImg, WhitelistImg,
    KarmaImg, OrganizationImg, LoanProductImg,
    SavingProductsImg, FeeChargesImg, TransactionsImg,
    ServicesImg, ServiceAccountImg, SettlementsImg,
    ReportsImg, PreferencesImg, FeePricingImg,
    AuditImg
} from "../assets/Images";
import { ISideLink, IUserData } from "../shared/types";

export const userData: IUserData =
{
    createdAt: "2022-01-01",
    orgName: "Sample Org",
    userName: "sampleUser",
    email: "sample@example.com",
    phoneNumber: "1234567890",
    lastActiveDate: "2022-12-31",
    status: "active",
    profile: {
        firstName: "John",
        lastName: "Doe",
        phoneNumber: "0987654321",
        avatar: "avatar.jpg",
        gender: "male",
        address: "123 Main St",
        currency: "USD",
        maritalStatus: "single",
        children: "0",
        bvn: "1234567890",
    },
    guarantor: {
        firstName: "Jane",
        lastName: "Doe",
        phoneNumber: "9876543210",
        gender: "female",
        address: "456 Elm St",
    },
    accountBalance: "1000",
    accountNumber: "123456789",
    bankName: "GTB Bank",
    socials: {
        facebook: "fb_sample",
        instagram: "ig_sample",
        twitter: "tw_sample",
    },
    education: {
        level: "Bachelor's",
        employmentStatus: "employed",
        sector: "Tech",
        duration: "4 years",
        officeEmail: "john.doe@company.com",
        monthlyIncome: "3000",
        loanRepayment: "500",
    },
    id: "1234567890",
}





export const widgetData = [
    {
        id: 1,
        icon: UserImg,
        title: "USERS",
        value: "2,453",
    },
    {
        id: 2,
        icon: ActiveUserImg,
        title: "ACTIVE USERS",
        value: "2,453",
    },
    {
        id: 3,
        icon: LoanUserImg,
        title: "USERS WITH LOANS",
        value: "12,453",
    },
    {
        id: 4,
        icon: SavingsUserImg,
        title: "USERS WITH SAVINGS",
        value: "102,453",
    },
]

export const customerslinks: ISideLink[] = [
    {
        name: "Users",
        icon: UsersImg,
        link: "/users",
    },
    {
        name: `Gurantors`,
        icon: GuarantorImg,
        link: "/gurantors",
        disabled: true,
    },
    {
        name: "Loans",
        icon: LoansImg,
        link: "/dashboard/loans",
        disabled: true,
    },
    {
        name: "Decision Models",
        icon: DecisionImg,
        link: "/dashboard/loans",
        disabled: true,
    },
    {
        name: "Savings",
        icon: SavingsImg,
        link: "/dashboard/genres",
        disabled: true,
    },
    {
        name: "Loan Requests",
        icon: LoanRequestImg,
        link: "/dashboard/loans-requests",
        disabled: true,
    },
    {
        name: "Whitelist",
        icon: WhitelistImg,
        link: "/dashboard/whitelist",
        disabled: true,
    },
    {
        name: "Karma",
        icon: KarmaImg,
        link: "/dashboard/karma",
        disabled: true,
    },
];
export const businesslinks: ISideLink[] = [
    {
        name: "Organizations",
        icon: OrganizationImg,
        link: "/dashboard/organizations",
        disabled: true,
    },
    {
        name: `Loan Products`,
        icon: LoanProductImg,
        link: "/dashboard/loan-products",
        disabled: true,
    },
    {
        name: "Savings Products",
        icon: SavingProductsImg,
        link: "/dashboard/savings-products",
        disabled: true,
    },
    {
        name: "Fees and Charges",
        icon: FeeChargesImg,
        link: "/dashboard/fees-and-charges",
        disabled: true,
    },
    {
        name: "Transactions",
        icon: TransactionsImg,
        link: "/dashboard/transactions",
        disabled: true,
    },
    {
        name: "Services",
        icon: ServicesImg,
        link: "/dashboard/services",
        disabled: true,
    },
    {
        name: "Service Account",
        icon: ServiceAccountImg,
        link: "/dashboard/service-account",
        disabled: true,
    },
    {
        name: "Settlements",
        icon: SettlementsImg,
        link: "/dashboard/settlements",
        disabled: true,
    },
    {
        name: "Reports",
        icon: ReportsImg,
        link: "/dashboard/reports",
        disabled: true,
    },
];

export const settingslinks: ISideLink[] = [
    {
        name: "Preferences",
        icon: PreferencesImg,
        link: "/dashboard/preferences",
        disabled: true,
    },
    {
        name: "Fees and Pricing",
        icon: FeePricingImg,
        link: "/dashboard/fees-and-pricing",
        disabled: true,
    },
    {
        name: "Audit Logs",
        icon: AuditImg,
        link: "/dashboard/audit-logs",
        disabled: true,
    },
];