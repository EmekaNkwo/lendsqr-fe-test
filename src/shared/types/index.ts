export interface IWidget {
  title: string;
  icon: string;
  value: string;
  id: string | number;
}

export interface ISideLink {
  name: string;
  icon: string;
  link: string;
  disabled?: boolean; // optional property
}

export interface IUserData {
  createdAt: string;
  orgName?: string;
  userName?: string;
  email: string;
  phoneNumber?: string;
  lastActiveDate: string;
  status: "active" | "pending" | "inactive" | "blacklisted";
  profile?: {
    firstName: string;
    lastName: string;
    phoneNumber?: string;
    avatar: string;
    gender: string;
    bvn?: string;
    address: string;
    currency: string;
    maritalStatus?: string;
    children?: string;
  };
  guarantor?: {
    firstName: string;
    lastName: string;
    phoneNumber?: string;
    gender: string;
    address: string;
  };
  accountBalance?: string;
  accountNumber: string;
  bankName?: string;
  socials?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
  education?: {
    level: string;
    employmentStatus?: string;
    sector?: string;
    duration?: string;
    officeEmail?: string;
    monthlyIncome?: string;
    loanRepayment?: string;
  };
  id: string;
}
