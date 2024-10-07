<template lang="html">
    <header class="header">
        <MainNavBar :page="false" :lang="lang" :toggleLanguageDialog="toggleLanguageDialog"
            :toggleShowAdaptiveNav="toggleShowAdaptiveNav" :showAdaptiveNav="showAdaptiveNav" />
        <AdaptiveMainNavBar :toggleShowAdaptiveNav="toggleShowAdaptiveNav" :showAdaptiveNav="showAdaptiveNav" />
        <div class="header__content container">
            <h1 class="header__content-title">
                <span>{{ $t("heroSection.span") }}:</span>
                {{ $t('heroSection.title') }}
            </h1>
            <h2 class="header__content-subtitle">
                {{ $t('heroSection.subtitle') }}
            </h2>
        </div>
        <LanguagePicker :setLang="setLang" :toggleLanguageDialog="toggleLanguageDialog" :showModal="showLanguageDialog" />
    </header>
</template>

<script lang="ts" setup>
import { ref, type Ref, onMounted } from 'vue';

import AdaptiveMainNavBar from '../../../components/MainNavBar/AdaptiveMainNavBar.vue';
import MainNavBar from '../../../components/MainNavBar/MainNavBar.vue';
import LanguagePicker from '../../../components/LanguagePicker/LanguagePicker.vue';
import i18n from '../../../i18n';

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

onMounted(() => {
    window.addEventListener('resize', () => {
        if (window.innerWidth > 992) {
            showAdaptiveNav.value = false;
        }
    });
});

const toggleLanguageDialog = (value: boolean): void => {
    showLanguageDialog.value = value;
    if (showLanguageDialog.value) {
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
</script>
