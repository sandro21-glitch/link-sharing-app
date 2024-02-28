export interface LinkTypes {
  id: string;
  path: string;
  name: string;
  placeholderUrl: string;
  logo: string;
  logoWhite: string;
  color: string;
  validation: string;
  index: number;
}
[];

export interface SingleLinkType {
  name: string;
  placeholderUrl: string;
  logo: string;
  logoWhite: string;
  color: string;
  validation: string;
  index?: number;
}
