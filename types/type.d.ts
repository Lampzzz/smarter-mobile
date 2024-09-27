declare interface User {
  contactInfo: string;
  password: string;
  firstName: string;
  lastName: string;
  middleName: string;
  birthdate: string;
  address: string;
  gender: string;
  photo: string;
}

declare interface CurrentUser {
  id: string;
  contactInfo: string;
  firstName: string;
  lastName: string;
  middleName: string;
  birthdate: string;
  address: string;
  gender: string;
  photo: string;
}

declare interface ImageAsset {
  mimeType: string;
  name: string;
  size: number;
  uri: string;
}

declare interface AuthStore {
  isAuthenticated: boolean;
  isLoading: boolean;
  currentUser: CurrentUser | null;
  fetchUserData: (uid: string) => Promise<void>;
  initializeAuthListener: () => () => void;
}
