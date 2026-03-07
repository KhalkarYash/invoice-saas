export type EmailNotificationRequestedEvent = {
  userId: string;
  template: string;
  data: Record<string, unknown>;
};

export type SmsNotificationRequestedEvent = {
  phoneNumber: string;
  message: string;
};

export type PushNotificationRequestedEvent = {
  userId: string;
  message: string;
};
