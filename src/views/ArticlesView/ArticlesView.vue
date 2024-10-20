<template lang="html">
    <header class="articles__header">
        <MainNavBar class="container" :page="true" :lang="lang" :toggleLanguageDialog="toggleLanguageDialog"
            :toggleShowAdaptiveNav="toggleShowAdaptiveNav" :showAdaptiveNav="showAdaptiveNav" />
        <AdaptiveMainNavBar :toggleShowAdaptiveNav="toggleShowAdaptiveNav" :showAdaptiveNav="showAdaptiveNav" />
        <LanguagePicker :setLang="setLang" :toggleLanguageDialog="toggleLanguageDialog"
            :showModal="showLanguageDialog" />
    </header>

    <main class="main">
        <section class="main__search">
            <SectionHeader title="Статьи" titleSpan="" top="Интересно почитать" descr="" data-aos="fade-left" />
            <div class="main__search-content container">
                <input type="text" placeholder="Поиск">
            </div>
        </section>

        <section class="main__articles container">
            <ArticlesItem v-for="article in articles" :key="article.id" :title="article.title" :bg="article.preview_img"
                :slug="article.slug" />
        </section>
    </main>
    <Footer />
</template>


<script lang="ts" setup>
import { ref, type Ref } from "vue";

import AdaptiveMainNavBar from "../../components/MainNavBar/AdaptiveMainNavBar.vue";
import MainNavBar from "../../components/MainNavBar/MainNavBar.vue";
import LanguagePicker from "../../components/LanguagePicker/LanguagePicker.vue";
import Footer from "../../components/Footer/Footer.vue";
import SectionHeader from "../../components/SectionHeader/SectionHeader.vue";
import ArticlesItem from "../../components/ArticlesItem/ArticlesItem.vue";
import i18n from "../../i18n";
import { useArticlesStore } from "../../stores/articlesStore";
import { computed } from "vue";
import { onMounted } from "vue";
const articlesStore = useArticlesStore();
const showAdaptiveNav: Ref<boolean> = ref(false);
const showLanguageDialog = ref(false);
const toggleShowAdaptiveNav: Function = (value: boolean): void => {
  showAdaptiveNav.value = value;
  if (showAdaptiveNav.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "scroll";
  }
};

const articles = computed(() => {
  return articlesStore.articles;
});

onMounted(() => {
  articlesStore.getArticles();
});

let lang = localStorage.lang;
const setLang = (langData: string) => {
  localStorage.lang = langData;
  lang = langData;
  i18n.global.locale = lang;

  toggleLanguageDialog(false);
};
const toggleLanguageDialog = (value: boolean): void => {
  showLanguageDialog.value = value;
  if (showLanguageDialog.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "scroll";
  }
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  margin: 40px 0;

  &__search {
    &-content {
      & input {
        width: 100%;
        padding: 10px 14px;
        box-shadow: 0 0 0 1px rgba(103, 110, 118, 0.16),
          0 2px 5px 0 rgba(103, 110, 118, 0.08);
        background: var(--white);
        border-radius: 50px;
        font-weight: 400;
        font-size: 16px;
        color: var(--gray-400);

        &::placeholder {
          color: var(--gray-400);
        }
      }
    }
  }

  &__articles {
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-auto-rows: 306px;
    gap: 24px;
  }
}
</style>