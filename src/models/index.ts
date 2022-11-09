export interface IUser {
  id: number;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: number;
  createdAt: string;
  accountBalance: number;
  accountNumber: string;
  loanRepayment: number;
}

export interface ICard {
  title: string;
  icon: any;
  value: number;
}

export interface ISideItem {
  header: string;
  name: string;
  icon: any;
  link: string;
}
