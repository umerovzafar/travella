<template lang="html">

    <section class="service__work container">
        <SectionHeader title="Как работает" titleSpan="сервис" top="Почему нам доверяют"
            descr="Из каких этапов состоит покупка тура" data-aos="fade-left" />

        <div class="service__work-cards">
            <div class="service__work-cards-item">
                <div class="service__work-cards-item-top">
                    <div class="service__work-cards-item-item-top-icon">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M6.16147 0.580761C6.68934 0.316829 7.31066 0.31683 7.83853 0.580761L12.8323 3.07765C12.9379 3.13043 13.0621 3.13043 13.1677 3.07765L17.0365 1.14326C18.2832 0.519916 19.75 1.42647 19.75 2.82031V15.3047C19.75 16.0149 19.3487 16.6642 18.7135 16.9818L13.8385 19.4193C13.3107 19.6832 12.6893 19.6832 12.1615 19.4193L7.16771 16.9224C7.06213 16.8696 6.93787 16.8696 6.8323 16.9224L2.96353 18.8568C1.71683 19.4801 0.25 18.5736 0.25 17.1797V4.69531C0.25 3.98512 0.651254 3.33587 1.28647 3.01826L6.16147 0.580761ZM7 4.00002C7.41421 4.00002 7.75 4.3358 7.75 4.75002V13C7.75 13.4142 7.41421 13.75 7 13.75C6.58579 13.75 6.25 13.4142 6.25 13V4.75002C6.25 4.3358 6.58579 4.00002 7 4.00002ZM13.75 7.00002C13.75 6.5858 13.4142 6.25002 13 6.25002C12.5858 6.25002 12.25 6.5858 12.25 7.00002V15.25C12.25 15.6642 12.5858 16 13 16C13.4142 16 13.75 15.6642 13.75 15.25V7.00002Z"
                                fill="#FF5722" />
                        </svg>
                    </div>
                    <h4 class="service__work-cards-item-top-title">
                        Подбор тура и заполнение персональных данных
                    </h4>
                </div>
                <p class="service__work-cards-item-descr">
                    Выгоднее всего оплачивать отдельно
                </p>
                <div class="service__work-cards-item-id">
                    1
                </div>
            </div>
            <div class="service__work-cards-item">
                <div class="service__work-cards-item-top">
                    <div class="service__work-cards-item-item-top-icon">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M6.16147 0.580761C6.68934 0.316829 7.31066 0.31683 7.83853 0.580761L12.8323 3.07765C12.9379 3.13043 13.0621 3.13043 13.1677 3.07765L17.0365 1.14326C18.2832 0.519916 19.75 1.42647 19.75 2.82031V15.3047C19.75 16.0149 19.3487 16.6642 18.7135 16.9818L13.8385 19.4193C13.3107 19.6832 12.6893 19.6832 12.1615 19.4193L7.16771 16.9224C7.06213 16.8696 6.93787 16.8696 6.8323 16.9224L2.96353 18.8568C1.71683 19.4801 0.25 18.5736 0.25 17.1797V4.69531C0.25 3.98512 0.651254 3.33587 1.28647 3.01826L6.16147 0.580761ZM7 4.00002C7.41421 4.00002 7.75 4.3358 7.75 4.75002V13C7.75 13.4142 7.41421 13.75 7 13.75C6.58579 13.75 6.25 13.4142 6.25 13V4.75002C6.25 4.3358 6.58579 4.00002 7 4.00002ZM13.75 7.00002C13.75 6.5858 13.4142 6.25002 13 6.25002C12.5858 6.25002 12.25 6.5858 12.25 7.00002V15.25C12.25 15.6642 12.5858 16 13 16C13.4142 16 13.75 15.6642 13.75 15.25V7.00002Z"
                                fill="#FF5722" />
                        </svg>
                    </div>
                    <h4 class="service__work-cards-item-top-title">
                        Заполнение заявки
                    </h4>
                </div>
                <p class="service__work-cards-item-descr">
                </p>
                <div class="service__work-cards-item-id">
                    2
                </div>
            </div>
        </div>
    </section>

</template>


<script lang="ts" setup>
import SectionHeader from '../../../components/SectionHeader/SectionHeader.vue';
</script>

<style lang="scss" scoped>
.service__work {
    width: 100%;
    display: flex;
    flex-direction: column;

    &-cards {
        align-self: flex-end;
        max-width: 50%;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: 306px;
        margin-top: 40px;
        display: grid;
        gap: 24px;

        @media (max-width:1400px) {
            align-self: center;
            max-width: 100%;
        }

        @media (max-width:768px) {
            grid-template-columns: 1fr;

        }

        &-item {
            position: relative;
            padding: 16px;
            border-radius: 40px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            background-image: url("data:image/svg+xml,%3Csvg width='307' height='307' viewBox='0 0 307 307' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M20 0C8.95431 0 0 8.9543 0 20V287C0 298.046 8.9543 307 20 307H247.337C255.289 307 261 294.953 261 287C261 272.088 273.088 260 288 260C295.811 260 307 254.549 307 246.738V20C307 8.95431 298.046 0 287 0H20Z' fill='white'/%3E%3C/svg%3E");
            max-width: 306px;
            min-width: 306px;


            &-top {
                display: flex;
                align-items: start;
                justify-content: center;
                gap: 12px;

                &-icon {
                    width: 32px;
                    height: 32px;
                    padding: 4px;
                    background: var(--primary-100);
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                &-title {
                    font-weight: 700;
                    font-size: 20px;
                    color: var(--primary-500);
                    max-width: 230px;
                }
            }

            &-descr {
                font-weight: 400;
                font-size: 16px;
                color: var(--grey900);
                padding: 8px;
            }

            &-id {
                position: absolute;
                bottom: 0;
                right: 0;
                width: 40px;
                height: 40px;
                backdrop-filter: blur(20px);
                box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(103, 110, 118, 0.16), 0 2px 5px 0 rgba(103, 110, 118, 0.08);
                background: rgba(255, 255, 255, 0.2);
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                user-select: none;
            }

        }
    }
}
</style>