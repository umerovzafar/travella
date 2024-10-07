<template lang="html">

    <section class="connect__section">
        <div class="connect__section-content container">
            <div class="connect__section-content-item">
            </div>
            <div class="connect__section-content-item">

            </div>
            <div class="connect__section-content-item">
            </div>
        </div>
    </section>

</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.connect__section {
    margin: 50px 0;
    background: var(--white);
    border-radius: 50px;
    padding: 72px 0;

    @media (max-width:768px) {
        padding: 24px 0;
        border-radius: 20px;
    }


    &-content {
        display: grid;
        grid-auto-rows: 375px;
        gap: 20px;
        grid-template-columns: 1fr 282px 282px;

        @media (max-width:992px) {
            grid-template-columns: repeat(3, 1fr);
        }

        @media (max-width:768px) {
            grid-template-columns: 1fr;
        }

        @media (max-width:576px) {
            grid-template-rows: 200px repeat(2, 100px);
            grid-template-columns: 1fr;
        }

        &-item {
            position: relative;
            border-radius: 20px;
            overflow: hidden;

            &-bg {
                position: absolute;
                width: 100%;
                object-fit: cover;
                height: 100%;
                top: 0;
                left: 0;
            }

            &::before {
                content: '';
                width: 100%;
                height: 100%;
                background: rgb(0, 0, 0, 0.2);
                position: absolute;
                top: 0;
                left: 0;

            }
        }
    }
}
</style>