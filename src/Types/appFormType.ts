 type AppForm = {
  data: {
    id: string;
    type: string;
    attributes: AppAttrbutes;
  };
};

type AppAttrbutes = {
  coverImage: string;
  personalInformation: {
    firstName: PersonalInfo;
    lastName: PersonalInfo;
    emailId: PersonalInfo;
    phoneNumber: PersonalInfo;
    nationality: PersonalInfo;
    currentResidence: PersonalInfo;
    idNumber: PersonalInfo;
    dateOfBirth: PersonalInfo;
    gender: PersonalInfo;
    personalQuestions: Question[];
    [key:string]:any
  };
  profile: Profile;
  customisedQuestions: Question[];
};

type PersonalInfo = {
  internalUse: boolean;
  show: boolean;
};

type ProfileInfo = {
  mandatory: boolean;
  show: boolean;
};

type Profile = {
  education: ProfileInfo;
  experience: ProfileInfo;
  resume: ProfileInfo;
  profileQuestions: Question[];
  [key:string]:any

};

type Question = {
  id: string;
  type: string;
  question: "string";
  choices: string[];
  maxChoice: number;
  disqualify: boolean;
  other: boolean;
};
