export interface Tour {
    id?: number;
    title?: string;
    preview?: string;
    slug: string | null;
    days?: number;
    price?: number;
    rating?: string;
    event_start?: string;
    event_end?: string;
    event_type?: string;
}

export interface GalleryImage {
    id: number;
    image: string;
}

export interface TourProgram {
    id: number;
    title: string;
    day: number;
    description: string;
    tour_program_gallery: GalleryImage[];
}

export interface PriceIncluded {
    id: number;
    title: string;
}

export interface PriceNotIncluded {
    id: number;
    title: string;
}

export interface Event {
    id: number;
    title: string;
    short_description: string;
    full_description: string;
    slug: string;
    preview: string;
    price: number;
    country: string;
    event_start: string;
    event_end: string;
    days: number;
    nights: number;
    gathering_place: string;
    minimum_age: number;
    people_in_group: number;
    event_type: string;
    gallery: GalleryImage[];
    tour_program: TourProgram[];
    price_included: PriceIncluded[];
    price_not_included: PriceNotIncluded[];
}