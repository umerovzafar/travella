<template lang="html">
    <header class="articles__header">
        <MainNavBar class="container" :page="true" :lang="lang" :toggleLanguageDialog="toggleLanguageDialog"
            :toggleShowAdaptiveNav="toggleShowAdaptiveNav" :showAdaptiveNav="showAdaptiveNav" />
        <AdaptiveMainNavBar :toggleShowAdaptiveNav="toggleShowAdaptiveNav" :showAdaptiveNav="showAdaptiveNav" />
        <LanguagePicker :setLang="setLang" :toggleLanguageDialog="toggleLanguageDialog"
            :showModal="showLanguageDialog" />

    </header>

    <main class="main">
        <section class="main__info container">
            <span class="main__info-top">
                Опубликован 08.06.24
            </span>
            <h1 class="main__info-title">
                Как с помощью экскурсий и путешествий создать команду мечты?
            </h1>
            <div class="main__info-bloc">
                <svg class="main__info-bloc-decor" width="280" height="401" viewBox="0 0 280 401" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_b_4075_24068)">
                        <path
                            d="M-69 249.255C-1.089 293.519 103.081 249.36 160.875 208.678C201.792 179.875 246.949 135.905 250.81 82.6945C253.512 45.4446 227.081 9.43527 192.916 -4.41266C155.204 -19.6985 134.292 36.6655 124.706 62.0415C96.0013 138.036 84.1887 228.221 98.7333 308.541C110.885 375.65 155.029 457 232.483 457"
                            stroke="white" stroke-opacity="0.2" stroke-width="56.6307" stroke-linecap="round" />
                    </g>
                    <defs>
                        <filter id="filter0_b_4075_24068" x="-127.318" y="-65.3145" width="436.639" height="580.629"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="15" />
                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_4075_24068" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_4075_24068"
                                result="shape" />
                        </filter>
                    </defs>
                </svg>

                <h2 class="main__info-bloc-title">
                    Строим не только маршруты но и укрепляем коллетив
                </h2>
            </div>
        </section>
        <section class="main__article">
            <div class="main__article-content container">
                <p class="main__article-content-descr">
                    С чем у вас ассоциируется слово «путешествие»? У меня раньше ассоциация была с эмоциями, отдыхом и
                    отпуском, а в последние годы – это работа, впечатления, общение.
                </p>
                <p class="main__article-content-descr">
                    Но что удивительно, чем бы ни были для меня #путешествия – работой или отдыхом, они одинаково сильно
                    заряжают, переключают, дарят эмоции.
                </p>
                <p class="main__article-content-descr">
                    По роду своей нынешней деятельности я сопровождаю группы в однодневные поездки.
                </p>
                <p class="main__article-content-descr">
                    Моя задача как турлидера по официальному запросу заказчика рассказать путевую информацию по дороге к
                    месту и администрировать программу в течение дня.
                </p>
                <div class="main__article-content-img">

                </div>

                <p class="main__article-content-descr strong with-decor">
                    Я же, как экскурсовод, организатор, опытный менеджер и немного HR-специалист, вижу это всё глубже и
                    интереснее: не просто выдать информацию, а зацепить участников путешествия интересными фактами,
                    событиями, поднять в них эмоции и проживание разных событий. Высший пилотаж исполнения работы – это
                    когда сорок человек сонастроены!
                </p>
                <p class="main__article-content-descr strong">
                    А теперь внимание, руководители!
                </p>
                <p class="main__article-content-descr">
                    Смотрите, в таком едином эмоциональном поле, если это существующая бизнес-команда, люди находятся в
                    течение дня, они проживают похожие эмоции, становятся ближе друг к другу, у них есть общие
                    воспоминания и якоря положительных эмоций. Этот коллектив гораздо проще вдохновить на общие задачи,
                    коллективное решение и #корпоративный дух.
                </p>
                <p class="main__article-content-descr strong with-decor">
                    Так путешествие из отпуска и отдыха становится дополнительным инструментом сплочения команды. Именно
                    поэтому стоит использовать экскурсию и путешествие как составную часть корпоративной культуры.
                </p>
                <p class="main__article-content-descr">
                    На днях я была на деловой встрече как #предприниматель. Обычно такие встречи - это сбор в аудитории
                    объединяющей участников организации. Люди приходили, опаздывали, садились, присутствовали,
                    отвлекались, слушали друг друга, обсуждали что-то, но каждый существовал сам по себе.
                </p>
                <p class="main__article-content-descr">
                    В этот раз организатор сделал похожую по задачам встречу, но на территории Музея предпринимателей,
                    меценатов и благотворителей. Деловая встреча в знаковом для предпринимателей месте. Началась она с
                    экскурсии по музею.
                </p>
                <p class="main__article-content-descr strong with-decor">
                    Участникам мероприятия рассказали историю предпринимательства в нашей стране, поведали о людях,
                    сделавших колоссальный вклад в развитие города и страны, в развитие культуры, образования, медицины.
                </p>
                <p class="main__article-content-descr">
                    Всего лишь после 1,5 часов #экскурсии создалась дружеская атмосфера, сонастройка на цели и задачи,
                    желание поделиться своими идеями, найти партнеров, объединиться.
                </p>
                <p class="main__article-content-descr">
                    Одна маленькая экскурсия! А атмосфера и посыл мероприятия кардинально изменились. Что же говорить о
                    целом путешествии?!
                </p>
                <div class="main__article-content-img">

                </div>
                <p class="main__article-content-descr">
                    Часто корпорации недооценивают значение этого явления. Упираются в бюджеты, личное / рабочее время,
                    отсутствие интереса и прочее, прочее. А на самом деле всего 2 часа в начале или конце рабочего
                    дня могут зарядить коллектив на генерацию новых идей и нахождение нетривиальных решений, нужно всего
                    лишь услышать чью-то историю, изменить угол зрения и получить воодушевление.
                </p>
            </div>
        </section>

        <section class="main__other container">
            <h2 class="main__other-title">
                НАши другие статьи, которые вас заинтересуют
            </h2>
            <div class="main__other-items">
                <ArticlesItem v-for="article in articles" :key="article.id" :title="article.title"
                    :bg="article.preview_img" :descr="article.short_description" />
            </div>
        </section>

    </main>

    <Footer />
</template>

<script lang="ts" setup>
import { ref, type Ref } from 'vue';
import MainNavBar from '../../components/MainNavBar/MainNavBar.vue';
import AdaptiveMainNavBar from '../../components/MainNavBar/AdaptiveMainNavBar.vue';
import LanguagePicker from '../../components/LanguagePicker/LanguagePicker.vue';
import Footer from '../../components/Footer/Footer.vue';
import ArticlesItem from '../../components/ArticlesItem/ArticlesItem.vue';
import i18n from '../../i18n';
import { useArticlesStore } from '../../stores/articlesStore';
import { computed } from 'vue';
const articlesStore = useArticlesStore();

const articles = computed(() => {
    return articlesStore.articles;
});


const showAdaptiveNav: Ref<boolean> = ref(false);
const showLanguageDialog = ref(false);
const toggleShowAdaptiveNav: Function = (value: boolean): void => {
    showAdaptiveNav.value = value;
    if (showAdaptiveNav.value) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'scroll';
    }
}

let lang = localStorage.lang;
const setLang = (langData: string) => {
    localStorage.lang = langData;
    lang = langData;
    i18n.global.locale = lang;

    toggleLanguageDialog(false);
}
const toggleLanguageDialog = (value: boolean): void => {
    showLanguageDialog.value = value;
    if (showLanguageDialog.value) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'scroll';
    }
}

</script>

<style lang="scss" scoped>
.main {
    &__info {
        padding: 50px 15px;

        &-top {
            font-weight: 400;
            font-size: 16px;
            color: var(--gray-500);
        }

        &-title {
            font-weight: 800;
            font-size: 48px;
            text-transform: uppercase;
            color: var(--gray-900);

            @media (max-width:768px) {
                font-size: 32px;
                max-width: 462px;
            }

            @media (max-width:576px) {
                font-size: 24px;
            }
        }

        &-bloc {
            min-height: 401px;
            background: var(--gray-300);
            border-radius: 40px;
            margin: 40px 0;
            position: relative;
            display: flex;
            align-items: end;

            &-decor {
                position: absolute;
                left: 0;
                top: 0;
            }

            &-title {
                font-weight: 800;
                font-size: 48px;
                text-transform: uppercase;
                text-align: center;
                color: var(--white);
                margin-bottom: 20px;

                @media (max-width:768px) {
                    font-size: 32px;
                    max-width: 462px;
                }

                @media (max-width:576px) {
                    font-size: 24px;
                }
            }
        }

    }

    &__article {
        padding: 50px 0;
        background: var(--white);
        border-radius: 50px;
        margin-bottom: 40px;

        &-content {
            max-width: 720px;
            display: flex;
            flex-direction: column;
            gap: 24px;

            &-descr {
                font-weight: 400;
                font-size: 20px;
                line-height: 125%;
                color: var(--gray-500);

                &.strong {
                    color: var(--gray-900);
                    font-weight: 700;
                }

                &.with-decor {
                    position: relative;

                    &::before {
                        content: '';
                        width: 1px;
                        background: var(--primary-500);
                        height: 100%;
                        position: absolute;
                        top: 0;
                        left: -16px;
                    }
                }
            }

            &-img {
                width: 100%;
                min-height: 410px;
                border-radius: 50px;
                background: var(--gray-300);
            }
        }
    }

    &__other {
        margin: 40px auto;

        &-title {
            font-weight: 800;
            font-size: 48px;
            text-transform: uppercase;
            color: var(--gray-900);
            max-width: 920px;

            @media (max-width:768px) {
                font-size: 32px;
                max-width: 462px;
            }

            @media (max-width:576px) {
                font-size: 24px;
            }
        }

        &-items {
            margin-top: 40px;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            grid-auto-rows: 306px;
            gap: 24px;
        }
    }
}
</style>