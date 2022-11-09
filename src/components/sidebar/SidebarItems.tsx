import {
  audit,
  briefcase,
  decision_models,
  fees,
  fees_charges,
  guarantors,
  home,
  karma,
  loans,
  loan_request,
  preferences,
  reports,
  savings,
  savings_products,
  services,
  service_account,
  settlements,
  transactions,
  user_friend,
  whitelist,
} from "../../assets";

export const TopItem = [
  { header: "", name: "Dashboard", icon: home, link: "" },
];

export const CustomerItems = [
  {
    header: "CUSTOMERS",
    name: "",
    icon: "",
    link: "",
  },
  {
    header: "",
    name: "Users",
    icon: user_friend,
    link: "users",
  },
  {
    header: "",
    name: "Guarantors",
    icon: guarantors,
    link: "",
  },
  {
    header: "",
    name: "Loans",
    icon: loans,
    link: "",
  },
  {
    header: "",
    name: "Decision Models",
    icon: decision_models,
    link: "",
  },
  {
    header: "",
    name: "Savings",
    icon: savings,
    link: "",
  },
  {
    header: "",
    name: "Loan Requests",
    icon: loan_request,
    link: "",
  },
  {
    header: "",
    name: "Whitelist",
    icon: whitelist,
    link: "",
  },
  {
    header: "",
    name: "Karma",
    icon: karma,
    link: "",
  },
];

export const BusinessItems = [
  {
    header: "BUSINESSESS",
    name: "",
    icon: "",
    link: "",
  },
  {
    header: "",
    name: "Organization",
    icon: briefcase,
    link: "",
  },
  {
    header: "",
    name: "Loan Products",
    icon: loan_request,
    link: "",
  },
  {
    header: "",
    name: "Savings Products",
    icon: savings_products,
    link: "/",
  },
  {
    header: "",
    name: "Fees and Charges",
    icon: fees_charges,
    link: "",
  },
  {
    header: "",
    name: "Transactions",
    icon: transactions,
    link: "",
  },
  {
    header: "",
    name: "Services",
    icon: services,
    link: "",
  },
  {
    header: "",
    name: "Service Account",
    icon: service_account,
    link: "",
  },
  {
    header: "",
    name: "Settlements",
    icon: settlements,
    link: "",
  },
  {
    header: "",
    name: "Reports",
    icon: reports,
    link: "",
  },
];

export const SettingItems = [
  {
    header: "SETTINGS",
    name: "",
    icon: "",
    link: "",
  },
  {
    header: "",
    name: "Preferences",
    icon: preferences,
    link: "",
  },
  {
    header: "",
    name: "Fees and Pricing",
    icon: fees,
    link: "",
  },
  {
    header: "",
    name: "Audit Logs",
    icon: audit,
    link: "",
  },
];
