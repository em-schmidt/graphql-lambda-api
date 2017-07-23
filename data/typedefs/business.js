
import JobPost from './jobPost';

export const Business = `
  type Business {
    id : ID!
    name: String
    email: String
    shortDesc: String
    longDesc: String
    smallLogoId: String
    bigLogoId: String
    webUrl: String
    status: String
    emailVerified: Boolean
    businessAddress: String
    businessAdmin: [User]
    followers: [User]
    jobsPosted: String
    createdAt: String
    updatedAt: String
    deletedAt: String
    debug: Boolean
  }
`;

export default Business;
