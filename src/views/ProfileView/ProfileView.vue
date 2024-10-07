<template lang="html">
    <header class="profile__header">
        <MainNavBar class="container" :page="true" :lang="lang" :toggleLanguageDialog="toggleLanguageDialog"
            :toggleShowAdaptiveNav="toggleShowAdaptiveNav" :showAdaptiveNav="showAdaptiveNav" />
        <AdaptiveMainNavBar :toggleShowAdaptiveNav="toggleShowAdaptiveNav" :showAdaptiveNav="showAdaptiveNav" />
        <LanguagePicker :setLang="setLang" :toggleLanguageDialog="toggleLanguageDialog" :showModal="showLanguageDialog" />
    </header>

    <main class="main">
        <section class="profile__tours">
            <SectionHeader title="популярные туры" titleSpan="По Миру" top="Мир"
                descr="Путешествуйте с комфортом и уверенностью, зная, что каждый аспект вашего тура тщательно продуман"
                data-aos="fade-left" />
            <WorldToursSwiper />
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
import WorldToursSwiper from '../../components/WorldToursSwiper/WorldToursSwiper.vue';
import SectionHeader from '../../components/SectionHeader/SectionHeader.vue';
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
    margin: 40px 0;
    display: flex;
    flex-direction: column;
}
</style>