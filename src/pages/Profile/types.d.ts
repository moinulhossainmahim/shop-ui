import ProfileImage from '../../assets/profile1.jpg';

export interface IProfileFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  image: string;
}

export const initialFormData: IProfileFormData = {
  firstName: 'Moinul',
  lastName: 'Hossain',
  email: 'moinulhossainmahim@gmail.com',
  phoneNumber: '+8801732748262',
  image: ProfileImage,
}
