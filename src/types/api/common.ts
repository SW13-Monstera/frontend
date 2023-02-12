export interface ICommonStats {
  problemCnt: number;
  gradableProblemCnt: number;
  userCnt: number;
}

export interface INotification {
  id: number;
  content: string;
  link: string;
  isRead: boolean;
  createdAt: string;
}

export interface INotificationList {
  contents: INotification[];
  currentPage: number;
  totalPages: number;
  totalElements: number;
  numberOfElements: number;
  size: number;
}
