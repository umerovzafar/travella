<template lang="html">
    <header class="contacts__header">
        <MainNavBar class="container" :page="true" :lang="lang" :toggleLanguageDialog="toggleLanguageDialog"
            :toggleShowAdaptiveNav="toggleShowAdaptiveNav" :showAdaptiveNav="showAdaptiveNav" />
        <AdaptiveMainNavBar :toggleShowAdaptiveNav="toggleShowAdaptiveNav" :showAdaptiveNav="showAdaptiveNav" />
        <LanguagePicker :setLang="setLang" :toggleLanguageDialog="toggleLanguageDialog" :showModal="showLanguageDialog" />
    </header>
    <main class="main">
        <section class="main__contacts">
            <SectionHeader title="Контакты" titleSpan="" top="Контакты" descr="" data-aos="fade-left" />
        </section>
        <section class="main__location container">
            <h2 class="main__location-title">
                Расположение офиса
            </h2>
            <h2 class="main__location-subtitle">
                улица Богибустон, 147
            </h2>
            <div class="main__location-map">
                <div style="position:relative;overflow:hidden;"><a
                        href="https://yandex.uz/maps/org/62388740123/?utm_medium=mapframe&utm_source=maps"
                        style="color:#eee;font-size:12px;position:absolute;top:0px; border-radius: 40px;">Tdk
                        Golden</a><iframe
                        src="https://yandex.uz/map-widget/v1/?ll=69.224477%2C41.263732&mode=search&oid=62388740123&ol=biz&z=18.45"
                        width="100%" height="400" allowfullscreen="true" style="position:relative;"></iframe>
                </div>
            </div>
        </section>

    </main>
    <Footer />
</template>

<script lang="ts" setup>
import { ref, type Ref } from 'vue';
import Footer from '../../components/Footer/Footer.vue';
import MainNavBar from '../../components/MainNavBar/MainNavBar.vue';
import AdaptiveMainNavBar from '../../components/MainNavBar/AdaptiveMainNavBar.vue';
import LanguagePicker from '../../components/LanguagePicker/LanguagePicker.vue';
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
    display: flex;
    flex-direction: column;
    margin: 40px 0;

    &__location {
        &-title {
            font-weight: 700;
            font-size: 36px;
            color: var(--gray-900);

            @media (max-width:576px) {
                font-size: 18px;
            }
        }

        &-subtitle {
            font-weight: 700;
            font-size: 20px;
            color: var(--gray-900);

            @media (max-width:576px) {
                font-size: 14px;
            }
        }

        &-map {
            border-radius: 40px;
            border: none;
            overflow: hidden;
            margin-top: 40px;

            & div {
                transform: scale(1.01);
            }
        }
    }


}
</style>