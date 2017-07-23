
import User from './user';

export const UserAddress = `
  type UserAddress {
    id: ID!
    user: User
    addressLine1: String
    addressLine2: String
    city: String
    state: String
    country: String
    postalCode: String
    addressType: String
    createdAt: String
    updatedAt: String
    deletedAt: String
    debug: Boolean
  }
`;

export default UserAddress;
