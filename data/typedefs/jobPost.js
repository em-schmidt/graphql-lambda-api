
import Business from './business';

const JobPost = `
  type JobPost {
    id : ID!
    business: Business
    description: String
    type: JobType
    startDate: String
    endDate: String
    applyBy: String
    heading: String
    locationState: String
    locationCity: String
    locationCountry: String
    createdAt: String
    updatedAt: String
    deletedAt: String
    debug: Boolean
  }
`;

export default JobPost;
