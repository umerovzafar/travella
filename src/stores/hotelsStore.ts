// stores/hotelStore.ts
import { Hotel, HotelDetail } from 'types/hotels';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useHotelStore = defineStore('hotel', () => {
    const hotels = ref<Hotel[]>([]);
    const isLoading = ref(false);
    const error = ref<string | null>(null);
    const hotelDetail = ref<HotelDetail | null>(null);

    const fetchHotels = async () => {
        isLoading.value = true;
        error.value = null;

        try {
            const response = await fetch('https://travella-admin.uz/api/v1/hotels/list/');
            if (!response.ok) {
                throw new Error('Failed to fetch hotels: ' + response.statusText);
            }
            const data = await response.json();
            hotels.value = data as Hotel[];
        } catch (err) {
            error.value = err instanceof Error ? err.message : 'Unknown error occurred';
        } finally {
            isLoading.value = false;
        }
    };
    // 
    const fetchHotelDetail = async (slug: string) => {
        isLoading.value = true;
        error.value = null;
        try {
            const response = await fetch(`https://travella-admin.uz/api/v1/hotels/list/${slug}`);

            
            if (!response.ok) {
                throw new Error('Failed to fetch hotels: ' + response.statusText);
            }
            const data = await response.json();
            hotelDetail.value = data as HotelDetail;
        } catch (err) {
            error.value = err instanceof Error ? err.message : 'Unknown error occurred';
        } finally {
            isLoading.value = false;
        }
    };

    return { hotels, hotelDetail, isLoading, error, fetchHotels, fetchHotelDetail };
});
