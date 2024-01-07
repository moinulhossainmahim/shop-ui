import { IAddress } from "../pages/Login/types";

export function parseAddress(address: IAddress) {
  if(address) {
    return `${address.streetAddress}, ${address.state}, ${address.city}, ${address.zip}, ${address.country}`;
  }
  return '';
}
