export interface Hotel {
  city: string;
  country: string;
  id: number;
  name: string;
  preview: string;
  rating: string;
  reviews_quantity: number;
  slug: string | null;
  short_description?: string;
}


export interface HotelDetail {
  id: number;
  name: string;
  country: string;
  address: string;
  short_description: string;
  full_description: string;
  is_meals_included: boolean;
  allocation_type: string;
  stars: number;
  distance_to_airport: number;
  coordinates: string;
  nights: number;
  total_people: number;
  has_wifi: boolean;
  beach_line: string;
  beach_type: string;
  slug: string;
  event: number;
  hotel_gallery: HotelGalleryItem[];
  hotel_facilities: HotelFacility[];
  hotel_entertainment: HotelEntertainment[];
  rooms: Room[];
}

export interface HotelGalleryItem {
  id: number;
  photo: string;
}

export interface HotelFacility {
  id: number;
  name: string;
}

export interface HotelEntertainment {
  id: number;
  name: string;
}

export interface Room {
  id: number;
  name: string;
  is_all_inclusive: boolean;
  description: string;
  nights: number;
  price: number;
  until: string;
  hotel: number;
  room_images: RoomImage[];
  room_facilities: RoomFacility[];
}

export interface RoomImage {
  id: number;
  image: string;
}

export interface RoomFacility {
  id: number;
  facility: string;
}
