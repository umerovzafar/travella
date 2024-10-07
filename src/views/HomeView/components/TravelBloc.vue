<template lang="html">
    <section class="travel__bloc ">
        <div class="travel__bloc-content container">
            <div class="travel__bloc-content-tag">
                <span>#Путешествие</span>
            </div>
            <h3 class="travel__bloc-content-title">
                Наше турагентство — это <span>ваш персональный компас</span> в мире приключений, ведущий к неизведанным
                <span>
                    горизонтам и
                    незабываемым впечатлениям.
                </span>
            </h3>
            <p class="travel__bloc-content-descr">
                За последние годы более <span class="travel__bloc-content-descr-num">10,000</span> путешественников
                доверили нам организацию своих <span>незабываемых
                    отпусков и
                    деловых поездок</span>
            </p>
            <img loading="lazy" src="../../../assets/images/avatar.png" alt="avatar">
        </div>
    </section>
</template>

<script setup lang="ts">


</script>


<style lang="scss" scoped>
.travel__bloc {
    padding: 90px 0;
    background: url('../../../assets/images/travel-bg.png');
    margin: 50px auto;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50px;

    @media (max-width:1200px) {
        padding: 70px 0;
    }

    @media (max-width:576px) {
        padding: 24px 0;
    }

    &-content {
        display: flex;
        flex-direction: column;
        align-items: center;

        &-tag {
            box-shadow: 0 0 0 1px var(--primary-500), 0 2px 5px 0 var(--primary-500), 0 0 0 4px rgba(255, 152, 17, 0.16);
            background: var(--primary-100);
            border-radius: 50px;
            padding: 8px;
            display: flex;
            align-items: center;



            & span {
                font-weight: 400;
                font-size: 10px;
                text-align: center;
                color: var(--primary-500);
            }
        }

        &-title {
            font-weight: 700;
            font-size: 20px;
            text-align: center;
            color: var(--gray-900);
            margin-top: 16px;

            @media (max-width:1200px) {
                font-size: 18px;
            }

            @media (max-width:768px) {
                font-size: 16px;
            }

            @media (max-width:375px) {
                font-size: 14px;
            }

            & span {
                color: var(--primary-500);
            }
        }

        &-descr {
            font-weight: 700;
            font-size: 36px;
            text-align: center;
            margin-top: 32px;
            color: var(--gray-900);
            margin-bottom: 16px;
            max-width: 1200px;

            @media (max-width:992px) {
                font-size: 32px;
            }

            @media (max-width:768px) {
                font-size: 28px;
            }

            @media (max-width:576px) {
                font-size: 22px;
            }

            @media (max-width:375px) {
                font-size: 18px;
            }

            &-num {
                color: var(--white) !important;
                user-select: none;
                box-shadow: 0 0 0 1px var(--primary-500), 0 2px 5px 0 var(--primary-500), 0 0 0 4px rgba(255, 152, 17, 0.16);
                background: var(--primary-500);
                transform: rotate(-5deg);
                max-width: max-content;
                display: inline-block;
                padding: 8px;
                border-radius: 50px;

                @media (max-width:1200px) {
                    font-size: 18px;
                }

                @media (max-width:768px) {
                    font-size: 16px;
                }

                @media (max-width:375px) {
                    font-size: 14px;
                }
            }

            & span {
                color: var(--primary-500);
            }
        }
    }
}
</style>
