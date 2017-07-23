
import User from './user';

export const UserExternalInvite = `
  type UserExternalInvite {
    id: ID!
    user: User
    referredEmailAddress: String
    createdAt: String
    updatedAt: String
    deletedAt: String
    debug: Boolean
  }
`;

export default UserExternalInvite
