export interface Resort {
  HotelCode: string;
  HotelName: string;
  HotelDescriptiveContent: HotelDescriptiveContent;
  HotelInfo: HotelInfo;
  PricesInfo: PricesInfo;
}
export interface HotelDescriptiveContent {
  Images: ImagesEntity[];
}
export interface ImagesEntity {
  MainImage?: boolean | null;
  URL: string;
}
export interface HotelInfo {
  Position: Position;
  Rating: number;
  Beds: number;
}
export interface Position {
  Latitude: string;
  Longitude: string;
  Distances?: DistancesEntity[] | null;
}
export interface DistancesEntity {
  type: string;
  distance: string;
}
export interface PricesInfo {
  AmountAfterTax: number;
  AmountBeforeTax: number;
}
