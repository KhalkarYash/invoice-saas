export type UserCreatedEvent = {
  userId: string;
  email: string;
};

export type UserInvitedEvent = {
  userId: string;
  invitedEmail: string;
};

export type UserDeletedEvent = {
  userId: string;
};
