<template #tourDetail>
    <header class="detail__header">
        <MainNavBar class="container" :page="true" :lang="lang" :toggleLanguageDialog="toggleLanguageDialog"
            :toggleShowAdaptiveNav="toggleShowAdaptiveNav" :showAdaptiveNav="showAdaptiveNav" />
        <AdaptiveMainNavBar :toggleShowAdaptiveNav="toggleShowAdaptiveNav" :showAdaptiveNav="showAdaptiveNav" />
        <LanguagePicker :setLang="setLang" :toggleLanguageDialog="toggleLanguageDialog"
            :showModal="showLanguageDialog" />
    </header>
    <main class="main">

        <section class="main__info container">
            <div class="main__info-block">
                <img src="" alt="" class="main__info-block-bg" loading="lazy">
                <h1 class="main__info-block-title">
                    Фестиваль Барханов. Этнотур в Калмыкию
                </h1>
            </div>
            <MainInfoDetail />
            <SectionHeader title="программа тура" titleSpan="" top="Описание" descr="" data-aos="fade-left" />
        </section>


        <section class="main__reviews">
            <SectionHeader title="Что о нас говорят " titleSpan="путешественники" top="Отзывы о компании" descr=""
                data-aos="fade-left" />
            <ReviewBloc />
        </section>
        <section class="main__tours">
            <SectionHeader title="популярные туры" titleSpan="По Миру" top="Мир"
                descr="Путешествуйте с комфортом и уверенностью, зная, что каждый аспект вашего тура тщательно продуман"
                data-aos="fade-left" />
            <WorldToursSwiper />
        </section>
    </main>
    <Footer />
</template>


<script lang="ts" setup>
import { type Ref, ref, onMounted } from 'vue';
import Footer from '../../components/Footer/Footer.vue';
import LanguagePicker from '../../components/LanguagePicker/LanguagePicker.vue';
import AdaptiveMainNavBar from '../../components/MainNavBar/AdaptiveMainNavBar.vue';
import MainNavBar from '../../components/MainNavBar/MainNavBar.vue';
import i18n from '../../i18n';
import SectionHeader from '../../components/SectionHeader/SectionHeader.vue';
import WorldToursSwiper from '../../components/WorldToursSwiper/WorldToursSwiper.vue';
import ReviewBloc from '../../components/ReviewsBloc/ReviewBloc.vue';
import MainInfoDetail from './components/MainInfoDetail.vue';
import { useEventsStore } from '@/stores/eventsStore';
onMounted(() => {

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
    padding: 30px 0;

    &__info {
        &-block {
            min-height: 400px;
            border-radius: 50px;
            background: var(--gray-300);
            display: flex;
            justify-content: center;
            align-items: end;
            position: relative;
            overflow: hidden;

            &-bg {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }

            &-title {
                font-weight: 800;
                font-size: 48px;
                text-transform: uppercase;
                text-align: center;
                color: var(--white);
                margin-bottom: 48px;
                max-width: 800px;
            }
        }
    }
}
</style>