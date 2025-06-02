export type Photo = {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
  width: number;
  height: number;
  user: {
    name: string;
  };
  downloads?: number;
};