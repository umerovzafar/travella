<template lang="html">

    <header class="about__header">
        <MainNavBar class="container" :page="true" :lang="lang" :toggleLanguageDialog="toggleLanguageDialog"
            :toggleShowAdaptiveNav="toggleShowAdaptiveNav" :showAdaptiveNav="showAdaptiveNav" />
        <AdaptiveMainNavBar :toggleShowAdaptiveNav="toggleShowAdaptiveNav" :showAdaptiveNav="showAdaptiveNav" />
        <LanguagePicker :setLang="setLang" :toggleLanguageDialog="toggleLanguageDialog"
            :showModal="showLanguageDialog" />
    </header>

    <main class="main">

    </main>

    <Footer />

</template>


<script lang="ts" setup>
import LanguagePicker from '../../components/LanguagePicker/LanguagePicker.vue';
import AdaptiveMainNavBar from '../../components/MainNavBar/AdaptiveMainNavBar.vue';
import MainNavBar from '../../components/MainNavBar/MainNavBar.vue';
import { ref, type Ref } from 'vue';
import i18n from '../../i18n';
import Footer from '../../components/Footer/Footer.vue';

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

<style lang="scss"></style>