import ProfileImage from '../../assets/profile1.jpg';

export interface IProfileFormData {
  fullName: string;
  email: string;
  avatar: File | string;
}
