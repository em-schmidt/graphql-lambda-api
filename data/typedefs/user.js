
import Business from './business';
import EducationInstitution from './educationInstitution';
import EducationInstitutionList from './educationInstitutionList';
import JobPost from './jobPost';
import UserEducation from './userEducation';
import UserAddress from './userAddress';
import UserExperience from './userExperience';
import UserExternalInvite from './userExternalInvite';
import UserResearchPaper from './userResearchPaper';
import Interests from './interests';

const User = `
  type User {
    id : ID!
    # first name for the user
    firstName: String
    lastName: String
    middleName: String
    email: String
    gender: Gender
    dateOfBirth: Date
    primaryPhoneNumber: String
    secondaryPhoneNumber: String
    emailVerified: Boolean
    profilePictureUrl: String
    profileStatus: UserProfileStatus
    friends: [User]
    business: [Business]
    educationInstitution: [EducationInstitution]
    address: [UserAddress]
    education: [UserEducation]
    experience: [UserExperience]
    externalInvite: [UserExternalInvite]
    interests: [Interests]
    researchPaper: [UserResearchPaper]
    targetSchool: [EducationInstitutionList]
    jobsApplied: [JobPost]
    createdAt: Date
    updatedAt: Date
    deletedAt: Date
    debug: Boolean
  }
`;

export default [User, 
  Business, 
  EducationInstitution, 
  JobPost, 
  UserEducation, 
  UserAddress, 
  UserExperience, 
  UserExternalInvite, 
  UserResearchPaper,
  Interests,
  EducationInstitutionList
];

