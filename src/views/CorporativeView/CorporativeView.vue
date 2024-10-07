<template>
    <header class="comrporative__header">
        <MainNavBar class="container" :page="true" :lang="lang" :toggleLanguageDialog="toggleLanguageDialog"
            :toggleShowAdaptiveNav="toggleShowAdaptiveNav" :showAdaptiveNav="showAdaptiveNav" />
        <AdaptiveMainNavBar :toggleShowAdaptiveNav="toggleShowAdaptiveNav" :showAdaptiveNav="showAdaptiveNav" />
        <LanguagePicker :setLang="setLang" :toggleLanguageDialog="toggleLanguageDialog" :showModal="showLanguageDialog" />
    </header>
    <main class="main">
        <section class="main__info">
            <SectionHeader title="Корпоративные туры " titleSpan="по всему миру" top="Корпоративные клиенты"
                descr="Путешествуйте с комфортом и уверенностью, зная, что каждый аспект вашего тура тщательно продуман"
                data-aos="fade-left" />
        </section>
        <!--  -->
        <section class="main__build container">
            <div class="main__build-text">
                <p class="main__build-text-item">
                    Хотите сплотить команду и организовать действительно необычный тимбилдинг?
                </p>
                <p class="main__build-text-item">
                    Попробуйте командное путешествие в любую точку мира или же тематическое путешествие по невероятно
                    красивому и историческому Узбекистану
                </p>
            </div>
            <div class="main__build-block">
                <svg class="main__build-block-decor" width="280" height="401" viewBox="0 0 280 401" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_b_4129_20681)">
                        <path
                            d="M-69 249.255C-1.089 293.519 103.081 249.36 160.875 208.678C201.792 179.875 246.949 135.905 250.81 82.6945C253.512 45.4446 227.081 9.43527 192.916 -4.41266C155.204 -19.6985 134.292 36.6655 124.706 62.0415C96.0013 138.036 84.1887 228.221 98.7332 308.541C110.885 375.65 155.029 457 232.483 457"
                            stroke="white" stroke-opacity="0.2" stroke-width="56.6307" stroke-linecap="round" />
                    </g>
                    <defs>
                        <filter id="filter0_b_4129_20681" x="-127.319" y="-65.3145" width="436.639" height="580.629"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="15" />
                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_4129_20681" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_4129_20681"
                                result="shape" />
                        </filter>
                    </defs>
                </svg>
                <h1 class="main__build-block-title">Строим не только маршруты но и укрепляем коллетив</h1>
            </div>
        </section>
        <!--  -->
        <ContentSection />
        <section class="main__partners">
            <SectionHeader title="наши" titleSpan="клиеты" top="С кем мы сотрудничаем" descr="" data-aos="fade-left" />

        </section>
        <section class="main__tours">
            <SectionHeader title="популярные туры" titleSpan="По Миру" top="Мир"
                descr="Путешествуйте с комфортом и уверенностью, зная, что каждый аспект вашего тура тщательно продуман"
                data-aos="fade-left" />
            <WorldToursSwiper />
            <section class="main__reviews">
                <SectionHeader title="Что о нас говорят " titleSpan="путешественники" top="Отзывы о компании" descr=""
                    data-aos="fade-left" />
                <ReviewBloc />
            </section>
        </section>
    </main>

    <Footer />
</template>


<script lang="ts" setup>
import { ref, type Ref } from 'vue';
import MainNavBar from '../../components/MainNavBar/MainNavBar.vue';
import AdaptiveMainNavBar from '../../components/MainNavBar/AdaptiveMainNavBar.vue';
import LanguagePicker from '../../components/LanguagePicker/LanguagePicker.vue';
import Footer from "../../components/Footer/Footer.vue";
import ContentSection from "../../components/ContentSection/ContentSection.vue";
import SectionHeader from "../../components/SectionHeader/SectionHeader.vue";
import ReviewBloc from "../../components/ReviewsBloc/ReviewBloc.vue";
import LocalToursSlider from "../../components/LocalToursSlider/LocalToursSlider.vue";
import WorldToursSwiper from '../../components/WorldToursSwiper/WorldToursSwiper.vue';
import i18n from '../../i18n';

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
    display: flex;
    flex-direction: column;
    padding: 40px 0;

    &__info {
        padding: 50px 0;
        background: var(--white);
        border-radius: 50px;
        min-height: 500px;
        overflow: hidden;
        position: relative;
        background: url(../../assets/images/map-bg.svg), #fff;
        background-repeat: no-repeat;
        background-position: center;
    }

    &__build {
        margin-top: 40px;

        &-text {
            max-width: 630px;
            display: flex;
            flex-direction: column;
            gap: 40px;

            &-item {
                font-weight: 400;
                font-size: 20px;
                line-height: 125%;
                color: var(--gray-900);
            }
        }

        &-block {
            min-height: 400px;
            background: var(--gray-300);
            border-radius: 40px;
            margin-top: 60px;
            position: relative;
            display: flex;
            justify-content: center;
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
                max-width: 860px;

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
}
</style>