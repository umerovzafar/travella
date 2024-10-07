<template lang="html">
    <div class="main__tours-list">
        <div class="main__tours-list-item" v-for="item in allHotels" :key="item.id">
            <img :src="item.preview" alt="hotel" class="main__tours-list-item-img" width="300px" height="173px">

            <div class="main__tours-list-item-data">
                <div class="main__tours-list-item-data-options">
                    <div class="main__tours-list-item-data-options-item">
                        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.4411 0.6828C10.5749 0.940049 10.4748 1.25703 10.2175 1.3908L9.80019 1.60781V10.9C9.80019 11.2866 9.48679 11.6 9.10019 11.6H7.5182C7.22825 11.6 6.9932 11.365 6.9932 11.075V8.62501C6.9932 8.33506 6.75815 8.10001 6.4682 8.10001H4.7252C4.43525 8.10001 4.2002 8.33506 4.2002 8.62501V11.075C4.2002 11.365 3.96514 11.6 3.6752 11.6H1.2252C0.935246 11.6 0.700195 11.365 0.700195 11.075C0.700195 10.7851 0.935246 10.55 1.2252 10.55H1.4002V5.97009C1.15727 6.05625 0.881817 5.95242 0.759515 5.71722C0.625746 5.45997 0.725845 5.14299 0.983093 5.00922L1.4002 4.79233V3.02501C1.4002 2.73506 1.63525 2.50001 1.9252 2.50001C2.21514 2.50001 2.4502 2.73506 2.4502 3.02501V4.24633L9.73309 0.459222C9.99034 0.325453 10.3073 0.425552 10.4411 0.6828Z"
                                fill="#55C9FB" />
                            <path
                                d="M11.1032 4.99847C11.26 4.90328 11.4551 4.89683 11.6179 4.98146L13.0174 5.70923C13.2747 5.84299 13.3748 6.15998 13.241 6.41722C13.1187 6.65238 12.8433 6.75622 12.6004 6.67014V10.55H12.7752C13.0651 10.55 13.3002 10.7851 13.3002 11.075C13.3002 11.365 13.0651 11.6 12.7752 11.6H11.3752C11.2359 11.6 11.1024 11.5447 11.0039 11.4462C10.9055 11.3478 10.8502 11.2142 10.8502 11.075L10.8506 5.44721C10.8507 5.26378 10.9464 5.09366 11.1032 4.99847Z"
                                fill="#55C9FB" />
                        </svg>
                        <span>{{ item.country }}</span>
                    </div>
                    <div class="main__tours-list-item-data-options-item rating">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M6.60767 1.01859C6.3829 0.478179 5.61735 0.478179 5.39258 1.01859L4.11103 4.09983L0.784571 4.36651C0.201153 4.41328 -0.0354157 5.14136 0.409088 5.52213L2.9435 7.69312L2.16919 10.9392C2.03339 11.5085 2.65273 11.9585 3.15222 11.6534L6.00013 9.91389L8.84804 11.6534C9.34752 11.9585 9.96687 11.5085 9.83107 10.9392L9.05676 7.69312L11.5912 5.52213C12.0357 5.14136 11.7991 4.41328 11.2157 4.36651L7.88923 4.09983L6.60767 1.01859Z"
                                fill="#FBBC55" />
                        </svg>
                        <span>{{ item.rating }}</span>
                    </div>
                    <div class="main__tours-list-item-data-options-item wifi">
                        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M0.473191 2.85879C2.12609 1.15779 4.43999 0.0999756 7.00002 0.0999756C9.56005 0.0999756 11.8739 1.15779 13.5268 2.85879C13.7269 3.06463 13.7245 3.39294 13.5216 3.59589L13.274 3.84341C13.1746 3.94283 13.0395 3.99821 12.8989 3.99716C12.7583 3.99611 12.624 3.93871 12.5261 3.83782C11.1261 2.39532 9.16808 1.49998 7.00002 1.49998C4.83196 1.49998 2.87395 2.39532 1.47396 3.83782C1.37604 3.93871 1.24174 3.99611 1.10115 3.99716C0.960551 3.99821 0.825409 3.94283 0.72599 3.84341L0.478476 3.59589C0.275527 3.39294 0.273173 3.06463 0.473191 2.85879ZM2.45086 4.84162C3.59693 3.64567 5.21184 2.89998 7.00002 2.89998C8.7882 2.89998 10.4031 3.64567 11.5492 4.84162C11.7468 5.04782 11.7433 5.37415 11.5414 5.5761L11.2938 5.82364C11.1939 5.92356 11.0579 5.97898 10.9166 5.97738C10.7753 5.97578 10.6407 5.91729 10.543 5.81513C9.6502 4.88087 8.39339 4.29998 7.00002 4.29998C5.60665 4.29998 4.34984 4.88087 3.45701 5.81513C3.35938 5.91729 3.2247 5.97578 3.08341 5.97738C2.94212 5.97898 2.80614 5.92356 2.70623 5.82364L2.45868 5.5761C2.25673 5.37415 2.25326 5.04782 2.45086 4.84162ZM4.42443 6.83007C5.06334 6.13601 5.98115 5.69998 7.00002 5.69998C8.01889 5.69998 8.9367 6.13601 9.57561 6.83007C9.76627 7.03719 9.75964 7.35782 9.56058 7.55687L9.31286 7.8046C9.21138 7.90608 9.07279 7.96159 8.92932 7.95823C8.78586 7.95486 8.65002 7.89292 8.55341 7.7868C8.16858 7.3641 7.61552 7.09997 7.00002 7.09997C6.38453 7.09997 5.83146 7.3641 5.44663 7.7868C5.35002 7.89292 5.21419 7.95486 5.07072 7.95823C4.92725 7.96159 4.78866 7.90608 4.68718 7.8046L4.43946 7.55687C4.2404 7.35782 4.23377 7.03719 4.42443 6.83007ZM6.3813 8.75626C6.53907 8.59849 6.75854 8.49998 7.00002 8.49998C7.2415 8.49998 7.46097 8.59849 7.61874 8.75626C7.82376 8.96128 7.82376 9.29369 7.61874 9.49872L7.37125 9.74621C7.16623 9.95123 6.83381 9.95123 6.62879 9.74621L6.3813 9.49872C6.17628 9.29369 6.17628 8.96128 6.3813 8.75626Z"
                                fill="#6AD09D" />
                        </svg>
                        <span>Wi-Fi</span>
                    </div>
                </div>
                <h2 class="main__tours-list-item-data-title">
                    {{ item.name }}
                </h2>
                <p class="main__tours-list-item-data-date">
                    с 10.06 на 7 ночей
                </p>
                <p class="main__tours-list-item-data-all">
                    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M5.9999 12.1C9.0927 12.1 11.5999 9.59282 11.5999 6.50002C11.5999 3.40723 9.0927 0.900024 5.9999 0.900024C2.90711 0.900024 0.399902 3.40723 0.399902 6.50002C0.399902 9.59282 2.90711 12.1 5.9999 12.1ZM8.69949 5.23381C8.87003 4.99932 8.81819 4.67098 8.58369 4.50044C8.3492 4.3299 8.02086 4.38174 7.85032 4.61623L5.41169 7.96935L4.09613 6.65379C3.89111 6.44877 3.5587 6.44877 3.35367 6.65379C3.14865 6.85882 3.14865 7.19123 3.35367 7.39626L5.10367 9.14626C5.21224 9.25483 5.3629 9.31043 5.51597 9.29842C5.66904 9.28641 5.80918 9.20799 5.89949 9.08381L8.69949 5.23381Z"
                            fill="#FF5722" />
                    </svg>
                    <span>Всё включено</span>
                </p>
            </div>
            <div class="main__tours-list-item-price">
                <p class="main__tours-list-item-price-item">
                    446$
                    <span>на 1 человека</span>
                </p>
                <p class="main__tours-list-item-price-item">
                    893$
                    <span>на 2х взрослых</span>
                </p>
                <PrimaryBtn :reversed="false" class="main__tours-list-item-price-btn" btnText="Выбрать тур"
                    :btnAction="() => $router.push('hotel-detail/' + item.slug)" />
            </div>

        </div>
    </div>
</template>


<script lang="ts" setup>

import { computed, onMounted } from 'vue';
import PrimaryBtn from '../../../components/PrimaryBtn/PrimaryBtn.vue';
import { useHotelStore } from '../../../stores/hotelsStore';

const hotelStore = useHotelStore();

onMounted(() => {
    hotelStore.fetchHotels();
});

const allHotels = computed(() => {
    return hotelStore.hotels;
});




</script>

<style lang="scss">
.main__tours-list {
    padding: 24px;
    background: var(--white);
    border-radius: 40px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    &-item {
        padding: 16px;
        background: var(--gray-100);
        border-radius: 40px;
        display: flex;
        align-items: start;
        justify-content: space-between;

        &-img {
            user-select: none;
            border-radius: 40px;

        }

        &-data {
            margin-left: 16px;

            &-title {
                font-weight: 700;
                font-size: 20px;
                color: var(--gray-900);
                margin-top: 15px;
                margin-bottom: 8px;
            }

            &-date {
                font-weight: 400;
                font-size: 14px;
                color: var(--gray-500);
            }

            &-all {
                font-weight: 400;
                font-size: 14px;
                color: var(--gray-500);
                display: flex;
                align-items: center;
                gap: 8px;
                margin-top: 8px;
            }

            &-options {
                display: flex;
                gap: 8px;
                width: 100%;

                &-item {
                    align-self: flex-start;
                    padding: 4px 10px;
                    border-radius: 50px;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-weight: 600;
                    font-size: 16px;
                    text-align: center;
                    color: var(--gray-900);
                    background: #cbedfb;

                    &.wifi {
                        background: var(--success-200);
                        color: var(--success-700);
                    }

                    &.rating {
                        background: var(--warning-200);
                        color: var(--warning-700);
                    }
                }
            }
        }

        &-price {
            min-width: 160px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 16px;

            &-btn {
                & span {
                    font-size: 12px !important;
                }
            }

            &-item {
                display: flex;
                flex-direction: column;
                gap: 6px;
                font-weight: 700;
                font-size: 20px;
                color: var(--gray-900);

                & span {
                    font-weight: 400;
                    font-size: 14px;
                    color: var(--gray-500);
                }
            }

        }
    }
}
</style>