<template lang="html">

    <section class="healthy">
        <div class="healthy__content container" v-if="articles">
            <div class="healthy__content-item">
                <span class="healthy__content-item-top">
                    Статьи
                </span>
                <h3 class="healthy__content-item-title">
                    Полезно <span>знать</span>
                </h3>
                <p class="healthy__content-item-descr">
                    Статьи которые помогут вам в путешествии
                </p>
            </div>
            <div class="healthy__content-articles">
                <ArticlesItem class="healthy__content-articles-item" v-for="(article) in articles" :key="article.id"
                    :title="article.title" :descr="article.short_description" :slug="article.slug"
                    :bg="article.preview_img" />
            </div>
        </div>
        <div class="healthy__content container" v-else>
            <h3>
                Нет статей
            </h3>
        </div>
    </section>

</template>

<script lang="ts" setup>
import { computed } from 'vue';
import ArticlesItem from '../../../components/ArticlesItem/ArticlesItem.vue';
import { useArticlesStore } from '../../../stores/articlesStore';
import { onMounted } from 'vue';
const articlesStore = useArticlesStore();

onMounted(() => {
    articlesStore.getArticles();
})

const articles = computed(() => {
    return articlesStore.articles;
})

</script>

<style lang="scss" scoped>
.healthy {
    margin-top: 40px;

    &__content {
        &-item {
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
                margin-top: 16px;

                @media (max-width:768px) {
                    font-size: 18px;
                    max-width: 362px;
                }

                @media (max-width:576px) {
                    font-size: 16px;
                }
            }
        }

        &-articles {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-auto-rows: 306px;
            gap: 24px;
            margin-top: 40px;

            @media (max-width:1200px) {
                grid-template-columns: repeat(3, 1fr);
            }

            @media (max-width:992px) {
                grid-template-columns: repeat(2, 1fr);
            }

            @media (max-width:768px) {
                display: flex;
                overflow-x: scroll;
            }

            &-item {
                @media (max-width:768px) {
                    min-width: 306px;
                    min-height: 306px;
                }

                &:nth-of-type(1) {
                    grid-column-start: 1;
                    grid-column-end: 2;

                    @media (max-width:1200px) {
                        grid-column-start: auto;
                        grid-column-end: auto;
                    }
                }

                &:nth-of-type(2) {
                    grid-column-start: 2;
                    grid-column-end: 3;

                    @media (max-width:1200px) {
                        grid-column-start: auto;
                        grid-column-end: auto;
                    }
                }

                &:nth-of-type(3) {
                    grid-column-start: 3;
                    grid-column-end: 5;

                    @media (max-width:1200px) {
                        grid-column-start: auto;
                        grid-column-end: auto;
                    }
                }

                &:nth-of-type(6) {
                    grid-column-start: 3;
                    grid-column-end: 5;

                    @media (max-width:1200px) {
                        grid-column-start: auto;
                        grid-column-end: auto;
                    }
                }


            }
        }
    }
}
</style>