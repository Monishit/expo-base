interface userData {
  _id: string;
  name: string;
  contact: number;
}

export interface userInterface {
  isUserLoading: boolean;
  isUserSubmiting: boolean;
  isUserDeleting: boolean;
  userList: [];
  userById: userData | null;
}
