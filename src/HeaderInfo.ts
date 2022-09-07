export type HeaderInfo<T> = {
  key: keyof T;
  header: string;
  width?: number;
};
