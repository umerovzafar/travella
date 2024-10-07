// stores/toursStore.ts
import { defineStore } from 'pinia';
import axios from 'axios';
import { Tour } from 'types/tour';

export const useToursStore = defineStore('tours', {
    state: () => ({
        localTours: null as Tour[] | null, // Используем интерфейс
        worldTours: null as Tour[] | null,
    }),
    actions: {
        async getTours(type: string) {
            try {
                const response = await axios.get<Tour[]>(
                    `https://travella-admin.uz/api/v1/events/?event_type=${type}`,
                    {
                        headers: {
                            accept: 'application/json',
                        },
                    }
                );

                if (response.status === 200) {
                    if (type === 'uzbekistan') {
                        this.localTours = response.data; // Присваиваем данные
                    } else {
                        this.worldTours = response.data; // Присваиваем данные
                    }
                } else {
                    if (type === 'uzbekistan') {
                        this.localTours = null; // Обнуляем, если не успешно
                    } else {
                        this.worldTours = null; // Обнуляем, если не успешно
                    }
                }
            } catch (error) {
                console.error('Error fetching tours:', error);
            }
        },
    },
});
