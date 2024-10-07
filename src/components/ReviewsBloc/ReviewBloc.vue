<template lang="html">
  <section class="reviews__bloc container">
    <div class="reviews__bloc-swiper">
      <swiper @swiper="onSwiper" :navigation="false" :modules="modules" class="reviews__bloc-swiper-widget">
        <swiper-slide class="reviews__bloc-swiper-widget-slide" v-for="(item, index) in reviewList" :key="index">
          <div class="reviews__bloc-swiper-widget-slide-info">
            <div class="reviews__bloc-swiper-widget-slide-info-img">
              <img :src="item.avatar" alt="item.avatar">
            </div>
            <div class="reviews__bloc-swiper-widget-slide-info-text">
              <h5 class="reviews__bloc-swiper-widget-slide-info-text-title">
                {{ item.fullname }}
              </h5>
              <p>{{ item.user_type }}</p>
            </div>
          </div>
          <p class="reviews__bloc-swiper-widget-slide-review">
            {{ item.text }}
          </p>
        </swiper-slide>
      </swiper>
      <div class="reviews__bloc-swiper-btns" v-show="reviewList">
        <button class="reviews__bloc-swiper-btns-prev press-effect" @click="swiperPrevSlide">
          <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M9.03033 0.96967C9.32322 1.26256 9.32322 1.73744 9.03033 2.03033L2.81066 8.25H19C19.4142 8.25 19.75 8.58579 19.75 9C19.75 9.41421 19.4142 9.75 19 9.75H2.81066L9.03033 15.9697C9.32322 16.2626 9.32322 16.7374 9.03033 17.0303C8.73744 17.3232 8.26256 17.3232 7.96967 17.0303L0.46967 9.53033C0.176777 9.23744 0.176777 8.76256 0.46967 8.46967L7.96967 0.96967C8.26256 0.676777 8.73744 0.676777 9.03033 0.96967Z"
              fill="#FF5722" />
          </svg>
        </button>
        <button class="reviews__bloc-swiper-btns-next press-effect" @click="swiperNextSlide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M12.9697 3.96967C13.2626 3.67678 13.7374 3.67678 14.0303 3.96967L21.5303 11.4697C21.671 11.6103 21.75 11.8011 21.75 12C21.75 12.1989 21.671 12.3897 21.5303 12.5303L14.0303 20.0303C13.7374 20.3232 13.2626 20.3232 12.9697 20.0303C12.6768 19.7374 12.6768 19.2626 12.9697 18.9697L19.1893 12.75H3C2.58579 12.75 2.25 12.4142 2.25 12C2.25 11.5858 2.58579 11.25 3 11.25H19.1893L12.9697 5.03033C12.6768 4.73744 12.6768 4.26256 12.9697 3.96967Z"
              fill="#FF5722" />
          </svg>
        </button>
      </div>
      <svg class="reviews__bloc-swiper-decor" width="123" height="144" viewBox="0 0 123 144" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M28.8365 143.542C9.61215 69.2075 0 29.2637 0 23.71C0 18.1563 2.34964 12.8162 7.04891 7.68974C12.1754 2.56325 18.3699 0 25.6324 0C32.8949 0 39.0894 2.56325 44.2159 7.68974C49.3424 12.8162 51.9056 19.0107 51.9056 26.2732C51.9056 33.1085 49.1288 39.0894 43.5751 44.2159C38.4486 49.3424 32.4677 51.9056 25.6324 51.9056H23.71L37.167 143.542H28.8365ZM99.3256 143.542C80.1013 69.2075 70.4891 29.2637 70.4891 23.71C70.4891 18.1563 72.8388 12.8162 77.538 7.68974C82.6645 2.56325 88.859 0 96.1215 0C103.384 0 109.579 2.56325 114.705 7.68974C119.832 12.8162 122.395 19.0107 122.395 26.2732C122.395 33.1085 119.618 39.0894 114.064 44.2159C108.938 49.3424 102.957 51.9056 96.1215 51.9056H94.1991L107.656 143.542H99.3256Z"
          fill="#FFEAD2" />
      </svg>
    </div>
    <!--  -->
  </section>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import { Swiper, SwiperSlide, } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useReviewsStore } from "../../stores/reviewsStore";
const reviewsStore = useReviewsStore();

onMounted(() => {
  reviewsStore.getReviews();
});

const reviewList = computed(() => {
  return reviewsStore.reviews;
});

const modules = ref([Navigation]);
const swiperInstance = ref()
function onSwiper(swiper: any) {
  swiperInstance.value = swiper;
}
const swiperNextSlide = () => {
  swiperInstance.value.slideNext();
};
const swiperPrevSlide = () => {
  swiperInstance.value.slidePrev();
};
</script>
<style lang="scss" scoped>
.reviews__bloc {
  margin-bottom: 16px;

  &-swiper {
    background: var(--white);
    border-radius: 50px;
    position: relative;
    min-height: 302px;
    display: flex;
    align-items: center;
    overflow: hidden;
    z-index: 1;

    @media (max-width:576px) {
      min-height: 460px;
    }



    &-btns {
      position: absolute;
      left: 24px;
      bottom: 50px;
      display: flex;
      gap: 24px;
      z-index: 10;

      @media (max-width:1200px) {
        bottom: 24px;
      }


    }

    &-widget {
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;

      &-slide {
        position: relative;
        cursor: pointer;
        width: 100%;
        height: 100%;
        padding: 50px 24px;
        display: flex;
        justify-content: space-between;
        align-items: start;

        @media (max-width:1200px) {
          padding: 16px 24px;
        }


        @media (max-width:1200px) {
          flex-direction: column;
          justify-content: start;
        }

        &-info {
          display: flex;
          align-items: center;
          gap: 12px;

          &-img {
            width: 92px;
            height: 92px;
            background: var(--grey200);
            border-radius: 50%;
            overflow: hidden;
            border: 1px solid var(--primary-200);
          }

          &-text {
            display: flex;
            flex-direction: column;
            gap: 18px;
            align-items: start;
            z-index: 1;
            position: relative;

            &-title {
              font-weight: 700;
              font-size: 20px;
              color: var(--primary-500);


              @media (max-width:1200px) {
                font-size: 16px;
              }

              & span {
                font-weight: inherit;
                font-size: inherit;
                color: var(--primary-200);
              }
            }
          }
        }

        &-review {
          font-weight: 400;
          font-size: 20px;
          line-height: 125%;
          color: var(--grey700);
          max-width: 820px;
          height: 200px;
          overflow-y: scroll;


          @media (max-width:1200px) {
            max-width: 100%;
            font-size: 18px;
          }

          @media (max-width:992px) {
            font-size: 16px;
          }

          @media (max-width:768px) {
            font-size: 14px;
          }

        }
      }
    }

    &-decor {
      position: absolute;
      left: 35%;
      top: 10px;

      @media (max-width:1200px) {
        top: 100px;
      }
    }
  }
}
</style>
