<template lang="html">

    <div class="section__header container">
        <span class="section__header-top" v-show="props.top">
            {{ props.top }}
        </span>
        <h3 class="section__header-title" v-show="props.title">
            {{ props.title }} <span>{{ props.titleSpan }}</span>
        </h3>
        <p class="section__header-descr" v-show="descr">
            {{ props.descr }}
        </p>
    </div>

</template>


<script lang="ts" setup>

import { defineProps } from 'vue';

interface Props {
    title: string,
    titleSpan: string,
    descr: string,
    top: string,
}

const props: Props = defineProps<Props>();

</script>

<style lang="scss" scoped>
.section__header {
    display: flex;
    flex-direction: column;
    padding: 40px 16px;

    &-top {
        font-weight: 400;
        font-size: 16px;
        color: var(--gray-400);
    }


    &-title {
        font-weight: 800;
        font-size: 48px;
        text-transform: uppercase;
        color: var(--gray-900);
        max-width: 662px;

        & span {
            color: var(--gray-500);
        }

        @media (max-width:768px) {
            font-size: 32px;
            max-width: 462px;
        }

        @media (max-width:576px) {
            font-size: 24px;
        }
    }

    &-descr {
        font-weight: 400;
        font-size: 20px;
        line-height: 125%;
        color: var(--gray-500);
        max-width: 634px;
        align-self: flex-end;
        margin-top: 40px;

        @media (max-width:768px) {
            font-size: 18px;
            max-width: 362px;
        }

        @media (max-width:576px) {
            font-size: 16px;
        }
    }
}
</style>