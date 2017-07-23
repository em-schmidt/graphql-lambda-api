
import User from './user';

const UserEducation = `
  type UserEducation {
    id : ID!
    user: User
    schoolName: String
    startDate: Date
    endDate: Date
    currentSchool: Boolean
    schoolGpa: String
    expectedGradDate: Date
    educationLevel: String
    subject: String
    otherDetails: String
    createdAt: Date
    updatedAt: Date
    deletedAt: Date
    debug: Boolean
  }
`;

export default UserEducation;
