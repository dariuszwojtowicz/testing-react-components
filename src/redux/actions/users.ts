export interface UpdateEmailAction {
  type: 'UPDATE_EMAIL';
  email: string;
}

export const updateEmail = (email: string): UpdateEmailAction => ({
  type: 'UPDATE_EMAIL',
  email
});
