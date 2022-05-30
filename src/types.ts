export type Info = {
  name: string;
  position: string;
  phoneNumber: string;
  email: string;
  [prop: string]: string | [string, string];
}

export type Experience = {
  key: string;
  title: string;
  duration?: string;
  description?: string;
  content?: (string | string[])[] | string;
}
