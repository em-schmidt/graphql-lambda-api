
export const EducationInstitution = `
  type EducationInstitution {
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
    address: String
    admin: [User]
    followers: [User]
    createdAt: String
    updatedAt: String
    deletedAt: String
    debug: Boolean
  }
`;

export default EducationInstitution;
