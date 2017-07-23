
import User from './user';

export const UserExperience = `
  type UserExperience {
    id: ID!
    user: User
    employerName: String
    startDate: Date
    endDate: Date
    currentJob: Boolean
    jobTitle: String
    jobDetails: String
    createdAt: Date
    updatedAt: Date
    deletedAt: Date
    debug: Boolean
  }
`;

export default UserExperience;
