<template lang="html">
    <swiper :slidesPerView="3" :spaceBetween="30" :breakpoints="breakpoints" class="world__tours-swiper"
        data-aos="fade-top">
        <swiper-slide class="world__tours-swiper-item" v-for="(item, index) in hotelsData" :key="index"
            @click="toHotelDetail(item.slug || 'error')">
            <div class="world__tours-swiper-item-content">
                <div class="world__tours-swiper-item-content-img">
                    <img loading="lazy" :src="item?.preview" :alt="item?.preview">
                </div>
                <h4 class="world__tours-swiper-item-content-title">
                    {{ item?.name }}
                </h4>
                <div class="world__tours-swiper-item-content-option">
                    <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M6.69008 16.933L6.69288 16.9342C6.89 17.02 7 17 7 17C7 17 7.11 17.02 7.30791 16.9339L7.30992 16.933L7.31565 16.9304L7.33381 16.922C7.34884 16.915 7.36967 16.9052 7.39591 16.8926C7.44837 16.8673 7.52255 16.8306 7.61533 16.7822C7.80078 16.6855 8.06121 16.5419 8.37166 16.3495C8.99123 15.9655 9.81736 15.3826 10.6455 14.5844C12.3022 12.9876 14 10.4925 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.4925 1.69783 12.9876 3.35452 14.5844C4.18264 15.3826 5.00877 15.9655 5.62834 16.3495C5.93879 16.5419 6.19922 16.6855 6.38467 16.7822C6.47745 16.8306 6.55163 16.8673 6.60409 16.8926C6.63033 16.9052 6.65116 16.915 6.66619 16.922L6.68435 16.9304L6.69008 16.933ZM7 9.25C8.24264 9.25 9.25 8.24264 9.25 7C9.25 5.75736 8.24264 4.75 7 4.75C5.75736 4.75 4.75 5.75736 4.75 7C4.75 8.24264 5.75736 9.25 7 9.25Z"
                            fill="#FF5722" />
                    </svg>
                    <span>{{ item?.country }}/{{ item?.city }}</span>
                </div>
                <div class="world__tours-swiper-item-content-option">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M8.78735 1.2108C9.23569 0.132857 10.7627 0.132857 11.2111 1.2108L13.2931 6.21652L18.6972 6.64976C19.8609 6.74306 20.3328 8.19535 19.4461 8.95485L15.3288 12.4818L16.5867 17.7553C16.8576 18.8909 15.6222 19.7884 14.6259 19.1799L9.99921 16.354L5.37256 19.1799C4.37624 19.7884 3.14084 18.8909 3.41173 17.7553L4.66964 12.4818L0.552299 8.95485C-0.334341 8.19535 0.137532 6.74306 1.30127 6.64976L6.70536 6.21652L8.78735 1.2108Z"
                            fill="#FF5722" />
                    </svg>
                    <span>{{ item?.rating }}</span>
                </div>
                <p class="world__tours-swiper-item-content-price">
                    Цена:
                </p>
            </div>
        </swiper-slide>
    </swiper>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/free-mode';
import { onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { useHotelStore } from "../../stores/hotelsStore";
const hotelsStore = useHotelStore();
const router = useRouter();
const toHotelDetail = (slug: string) => {
    router.push('/hotel-detail/' + slug);
}

onMounted(async () => {
    await hotelsStore.fetchHotels();
});


const hotelsData = computed(() => {
    return hotelsStore?.hotels;
});


const breakpoints = {
    280: {
        slidesPerView: 1,
        spaceBetween: 20
    },
    320: {
        slidesPerView: 1,
        spaceBetween: 20
    },

    640: {
        slidesPerView: 2,
        spaceBetween: 40
    },
    992: {
        slidesPerView: 3,
        spaceBetween: 40
    },
    1200: {
        slidesPerView: 3.2,
        spaceBetween: 40
    },
    1400: {
        slidesPerView: 4.1,
        spaceBetween: 40
    }
};

</script>

<style lang="scss" scoped>
.world__tours-swiper {
    @media (max-width:576px) {
        padding: 0 16px;
    }

    &-item {
        padding: 16px;
        background: var(--white);
        height: 416px;
        border-radius: 20px;
        cursor: pointer;

        @media (max-width:320px) {
            padding: 0 16px;
        }

        &-content {
            display: flex;
            flex-direction: column;
            gap: 8px;

            &-img {
                height: 228px;
                width: 100%;
                display: flex;
                margin-bottom: 12px;

                & img {
                    max-width: 100%;
                    user-select: none;
                    border-radius: 20px;
                }
            }

            &-title {
                font-weight: 700;
                font-size: 20px;
                color: var(--gray-900);
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                line-clamp: 1;
                -webkit-box-orient: vertical;
            }

            &-option {

                display: flex;
                align-items: center;
                max-width: 220px;
                gap: 8px;

                & svg {
                    min-width: 20px;
                }

                & span {
                    font-weight: 400;
                    font-size: 16px;
                    color: var(--gray-400);
                    text-align: left;
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    line-clamp: 1;
                    -webkit-box-orient: vertical;
                }
            }

            &-price {
                font-weight: 400;
                font-size: 20px;
                line-height: 125%;
                color: var(--gray-500);

                & span {
                    color: var(--gray-900);
                    font-weight: 700;
                }
            }
        }
    }

}
</style>