export interface IMeta {
  page: number;
  limit: number;
  total: number;
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorMessages = {
  path: string | number;
  message: string;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessage: IGenericErrorMessages[];
};

export type IDepartments = {
  createdAt: string;
  id: string;
  title: string;
  updatedAt: string;
  __v: number;
};
