
import User from './user';

const UserResearchPaper = `
  type UserResearchPaper {
    id : ID!
    user: User
    name: String
    paperDesc: String
    paperCategory: String
    paperYear: String
    paperCoAuthors: String
    createdAt: Date
    updatedAt: Date
    deletedAt: Date
    debug: Boolean
  }
`;

export default UserResearchPaper;
