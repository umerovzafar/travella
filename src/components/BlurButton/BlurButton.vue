<template lang="html">
    <button class="blur__button">
        <span>Посмотреть туры</span>
        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.25 0.75L16.5 7M16.5 7L10.25 13.25M16.5 7H1.5" stroke="white" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    </button>

</template>

<script lang="ts" setup></script>

<style lang="scss">
.blur__button {
    display: flex;
    align-items: center;
    gap: 16px;
    backdrop-filter: blur(50px);
    border-radius: 50px;
    padding: 16px 24px;
    position: relative;
    backdrop-filter: blur(50px);
    background: rgba(244, 244, 244, 0.2);

    & span {
        font-weight: 600;
        font-size: 16px;
        text-align: center;
        color: var(--white);
    }






}
</style>