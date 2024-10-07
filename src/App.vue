<template lang="html">
  <transition name="fade">
    <div class="wrapper" v-if="loaded">
      <LoginModal v-show="loginStore?.showloginModal" />
      <router-view />
    </div>
    <Loader v-else />
  </transition>
</template>

<script lang="ts" setup>

import { ref, type Ref, onMounted } from 'vue';
import Loader from './components/Loader/Loader.vue';
import LoginModal from './components/LoginModal/LoginModal.vue';
import { useLoginStore } from './stores/loginStore';
import i18n from './i18n';
const loginStore = useLoginStore();
const loaded: Ref<boolean> = ref(false);
onMounted(() => {
  loaded.value = true;
  i18n.global.locale = localStorage.lang;
  if (!localStorage.lang) {
    localStorage.lang = 'ru';
  }
});
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>