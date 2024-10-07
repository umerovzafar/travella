// stores/reviewsStore.ts
import { defineStore } from 'pinia';
import axios from 'axios';
import { Review } from 'types/review';

export const useReviewsStore = defineStore('reviews', {
  state: () => ({
    reviews: null as Review[] | null,
  }),
  actions: {
    async getReviews() {
      try {
        const response = await axios.get<Review[]>(
          'https://travella-admin.uz/api/v1/reviews/list/',
          {
            headers: {
              accept: 'application/json',
            },
          }
        );

        if (response.status === 200) {
          this.reviews = response.data;
        }
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    },
  },
});
