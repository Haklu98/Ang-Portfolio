export interface Musicprojects {
  id: number;
  name: string;
  year: number;
  type: string;
  description: string;
  roles: Array<string>;
  url: URL;
  image?: string;
}
