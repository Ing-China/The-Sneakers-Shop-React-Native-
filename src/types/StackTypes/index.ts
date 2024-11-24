import {NotificationProps} from '../Notification';

export type StackParamList = {
  Root: undefined;
  HomeTabs: undefined;
  Search: undefined;
  Cart: undefined;
  OrderHistory: undefined;
  Notification: undefined;
  AboutUs: undefined;
  Language: undefined;
  Favorite: undefined;
  SignOutModal: undefined;
  DeleteAccountModal: undefined;
  CurrentLocation: undefined;
  NotificationDetail: {item: NotificationProps['item']};
  Brand: undefined;
};
