export enum UserStatusType {
  Active = 'active',
  InActive = 'inactive',
}

export interface IUser {
	id: string;
	avatar: string;
	fullName: string;
	email: string;
	status: UserStatusType;
  userType: string;
	address: IAddress[];
}

interface IAddress {
	id: string;
	title: string;
	country: string;
	city: string;
	zip: string;
	state: string;
	streetAddress: string;
	addressType: string;
}

export interface IUsersResponse {
	content: IUser[];
	message: string;
	success: boolean;
}
