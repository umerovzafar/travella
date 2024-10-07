<template lang="html">
    <section class="bonuses__bloc">
        <img class="bonuses__bloc-decor" src="../../../assets/images/ll-pay.svg" alt="ll" loading="lazy">
        <div class="bonuses__bloc-content container">
            <h3 class="bonuses__bloc-content-title">
                КОПИТЕ БАЛЛЫ И ПОЛУЧАЙТЕ <span>СКИДКИ</span> НА ТУРЫ
            </h3>
            <div class="bonuses__bloc-content-item">
                <p class="bonuses__bloc-content-item-descr">
                    LL- валюта, которую вы получаете как кешбек после оплаты туров
                </p>
                <span class="bonuses__bloc-content-item-span">
                    ­­LL можно оплатить до 10% от стоимости тура
                </span>
                <span class="bonuses__bloc-content-item-span">
                    с каждой покупкой вам начисляется 10% от суммы
                </span>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>


</script>

<style lang="scss" scoped>
.bonuses__bloc {
    padding: 40px 0;
    background: var(--primary-100);
    margin-top: 40px;
    border-radius: 50px;
    min-height: 502px;
    position: relative;
    overflow: hidden;

    &-decor {
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        mix-blend-mode: color-burn;

        @media (max-width:768px) {
            height: auto;
            height: unset;
            top: 0;
            right: 0;
            height: 100%;
            transform: translateY(20%);
        }


    }

    &-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        z-index: 2;
        position: relative;

        @media (max-width:768px) {
            justify-content: start;
            gap: 24px;
        }

        &-title {
            font-weight: 800;
            font-size: 64px;
            text-transform: uppercase;
            color: var(--primary-500);
            max-width: 752px;

            & span {
                color: var(--primary-400);
            }

            @media (max-width:1200px) {
                font-size: 54px;
            }

            @media (max-width:992px) {
                font-size: 44px;
            }

            @media (max-width:768px) {
                font-size: 34px;
            }

            @media (max-width:576px) {
                font-size: 24px;
                max-width: 280px;
            }
        }

        &-item {
            display: flex;
            flex-direction: column;
            gap: 10px;

            &-descr {
                font-weight: 600;
                font-size: 16px;
                color: var(--gray-900);
            }

            &-span {
                font-weight: 400;
                font-size: 16px;
                color: var(--gray-400);
            }
        }

    }

}
</style>