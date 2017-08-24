
const Enums = `
  enum UserProfileStatus {
    PRIVATE
    PUBLIC
    FRIENDS
  }

  enum Gender {
    MALE
    FEMALE
    OTHER
  }

  enum UserConnectionStatus {
    PENDING
    APPROVED
    REJECTED
    DELETED
  }

  enum JobType {
    INTERN,
    FULLTIME,
    PARTTIME,
    CONTRACT
  }
`;

export default [Enums];
