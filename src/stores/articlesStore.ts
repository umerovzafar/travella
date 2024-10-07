// stores/articlesStore.ts
import { defineStore } from 'pinia';
import axios from 'axios';
import { Article, ArticleDetail } from 'types/article';

export const useArticlesStore = defineStore('articles', {
    state: () => ({
        articles: null as Article[] | null,
        homePageArticles: null as Article[] | null,
        articleDetail: null as ArticleDetail | null,
    }),
    actions: {
        async getArticles() {
            try {
                const response = await axios.get<Article[]>('https://travella-admin.uz/api/v1/articles/', {
                    headers: {
                        'accept': 'application/json',
                    },
                });

                if (response.status === 200) {
                    this.articles = response.data;
                }
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        },
        
        async getArticleDtail(slug: string) {
            try {
                const response = await axios.get<ArticleDetail>(`https://travella-admin.uz/api/v1/articles/${slug}`, {
                    headers: {
                        'accept': 'application/json',
                    },
                });

                if (response.status === 200) {
                    this.articleDetail = response.data;
                }
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        },
    },
});
