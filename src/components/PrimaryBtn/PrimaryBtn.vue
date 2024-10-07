<template lang="html">
    <button class="primary-btn" @click="props.btnAction()" :class="{ 'reversed': reversed }">

        <span>
            {{ props.btnText }}
        </span>
        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="!reversed">
            <path d="M10.25 0.75L16.5 7M16.5 7L10.25 13.25M16.5 7H1.5" stroke="white" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg" v-else>
            <path d="M10.25 0.75L16.5 7M16.5 7L10.25 13.25M16.5 7H1.5" stroke="#FF5722" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    </button>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
interface Props {
    btnText: string,
    btnAction: Function,
    reversed: boolean,
}

const props: Props = defineProps<Props>();
</script>


<style lang="scss" scoped>
.primary-btn {
    border-radius: 500px;
    padding: 16px 24px;
    background: var(--primary-500);
    display: flex;
    gap: 8px;
    align-items: center;

    & span {
        font-weight: 600;
        font-size: 16px;
        text-align: center;
        color: var(--white);
    }

    &.reversed {
        background: var(--primary-100);

        & span {

            color: var(--primary-500);
        }

    }

    @media (max-width:1200px) {
        padding: 16px;

        & span {
            font-size: 14px;
        }
    }
}
</style>