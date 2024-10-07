import { defineStore } from 'pinia';
import axios from 'axios';
import { Tour } from 'types/tour';

export const useEventsStore = defineStore('events', {
    state: () => ({
        events: null as Tour[] | null,
        popular: null as Tour[] | null,
    }),
    actions: {
        async getEvents() {
            try {
                const response = await axios.get<Tour[]>('https://travella-admin.uz/api/v1/events/', {
                    headers: {
                        accept: 'application/json',
                    },
                });

                if (response.status === 200) {
                    this.events = response.data; // Присваиваем данные
                }
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        },

        async getPopularEvents() {
            try {
                const response = await axios.get<Tour[]>('https://travella-admin.uz/api/v1/events/popular', {
                    headers: {
                        accept: 'application/json',
                    },
                });

                if (response.status === 200) {
                    this.popular = response.data; 
                }
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        },

    },
});