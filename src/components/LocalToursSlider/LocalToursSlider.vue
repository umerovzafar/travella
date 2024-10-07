<template lang="html">
    <transition name="fade">
        <swiper :slidesPerView="3" :spaceBetween="30" :breakpoints="breakpoints" class="local__tours-swiper"
            data-aos="fade-top">
            <swiper-slide class="local__tours-swiper-item" v-for="tourItem in toursData" :key="tourItem.id"
                v-if="toursData" @click="goToTourDetail(tourItem.slug!)">
                <div class="local__tours-swiper-item-bg">
                    <img loading="lazy" :src="tourItem?.preview" alt="preview">
                </div>
                <div class="local__tours-swiper-item-content">
                    <div class="local__tours-swiper-item-content-header">
                        <span>{{ getDaysString(tourItem?.days!) }}</span>
                    </div>
                    <div class="local__tours-swiper-item-content-data">
                        <p class="local__tours-swiper-item-content-data-date">
                            {{ tourItem?.event_start }} - {{ tourItem?.event_end }}
                        </p>
                        <h5 class="local__tours-swiper-item-content-data-title">
                            {{ tourItem?.title }}
                        </h5>
                        <p class="local__tours-swiper-item-content-data-price">
                            ${{ tourItem?.price }} / за человека
                        </p>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </transition>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/free-mode';
import { useToursStore } from "../../stores/toursStore.ts";
import { onMounted, computed } from "vue";
import router from '../../router/router.ts';

const toursStore = useToursStore();
onMounted(() => {
    setTimeout(() => {
        toursStore.getTours('uzbekistan');
    }, 1000);
});

const toursData = computed(() => {
    return toursStore?.localTours;
});

const goToTourDetail = (slug: string) => {
    router.push('tour-detail/' + slug)
}

const getDaysString = (count: number): string => {
    const absCount = Math.abs(count) % 100;
    const lastDigit = absCount % 10;

    let suffix: string;

    if (absCount > 10 && absCount < 20) {
        suffix = "дней";
    } else {
        switch (lastDigit) {
            case 1:
                suffix = "день";
                break;
            case 2:
            case 3:
            case 4:
                suffix = "дня";
                break;
            default:
                suffix = "дней";
        }
    }

    return `${count} ${suffix}`;
}

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
        slidesPerView: 4.3,
        spaceBetween: 40
    }
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity .8s ease-in;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.loader {}

.local__tours-swiper {
    min-height: 478px;

    @media (max-width:576px) {
        padding: 0 16px;
    }


    &-item {
        position: relative;
        min-height: 478px;
        padding: 16px;
        background: var(--gray-300);
        border-radius: 20px;
        cursor: pointer;
        display: flex;

        &-bg {
            height: 100%;
            position: absolute;
            max-width: 100%;
            left: 0;
            padding: 16px;
            top: 0;

            & img {
                height: 100%;
                object-fit: cover;
                border-radius: 20px;
                user-select: none
            }
        }

        &-content {
            z-index: 1;
            position: relative;
            padding: 16px;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            &-header {
                display: flex;
                flex-direction: column;
                gap: 12px;

                & span {
                    backdrop-filter: blur(20px);
                    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(103, 110, 118, 0.16), 0 2px 5px 0 rgba(103, 110, 118, 0.08);
                    background: rgba(255, 255, 255, 0.2);
                    font-weight: 400;
                    font-size: 14px;
                    text-align: center;
                    color: var(--white);
                    max-width: max-content;
                    padding: 10px;
                    border-radius: 20px;
                    display: flex;
                    gap: 8px;

                }
            }

            &-data {
                backdrop-filter: blur(20px);
                box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(103, 110, 118, 0.16), 0 2px 5px 0 rgba(103, 110, 118, 0.08);
                background: rgba(255, 255, 255, 0.2);
                padding: 12px;
                border-radius: 20px;
                display: flex;
                flex-direction: column;
                align-items: start;
                gap: 8px;

                &-date {
                    font-weight: 400;
                    font-size: 14px;
                    text-align: center;
                    color: var(--white);
                }

                &-title {
                    font-weight: 600;
                    font-size: 16px;
                    color: var(--white);
                    max-width: 218px;
                }

                &-price {
                    font-weight: 600;
                    font-size: 16px;
                    color: var(--white);
                }
            }

        }
    }

}
</style>