export interface Article {
    id: number;
    title: string;
    short_description: string;
    preview_img: string;
    slug: string;
}


export interface ArticleDetail {
    id: number;
    title: string;
    short_description: string;
    preview_img: string;
    preview_text: string;
    slug: string;
    quote: string;
    top_paragraphs: TopParagraph[];
    text_items: TextItem[];
    image_items: ImageItem[];
    decorated_text_items: DecoratedTextItem[];
    published_at: string;
    related_articles: string[];
}

export interface TopParagraph {
    id: number;
    text: string;
}

export interface TextItem {
    id: number;
    text: string;
}

export interface ImageItem {
    id: number;
    image: string;
    descr: string;
}

export interface DecoratedTextItem {
    id: number;
    text: string;
}