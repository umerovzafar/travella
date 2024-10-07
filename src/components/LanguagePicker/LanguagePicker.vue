<template lang="html">
    <div class="language__modal" v-show="props.showModal" @click="toggleLanguageDialog(false)">
        <div class="language__modal-dialog" @click.stop>
            <div class="language__modal-dialog-item" @click="setLang('ru')">
                <span>Русский</span>
            </div>
            <div class="language__modal-dialog-item" @click="setLang('en')">
                <span>English</span>
            </div>
            <div class="language__modal-dialog-item" @click="setLang('uz')">
                <span>O`zbekcha</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
interface Props {
  showModal: boolean;
  toggleLanguageDialog: Function;
  setLang: Function;
}
const props: Props = defineProps<Props>();
</script>

<style lang="scss" scoped>
.language__modal {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgb(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;

  &-dialog {
    width: 100%;
    max-width: 250px;
    background: var(--white);
    padding: 20px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;

    &-item {
      background: var(--gray-100);
      border-radius: 8px;
      padding: 4px;
      width: 93px;
      height: 30px;
      width: 100%;
      display: flex;
      justify-content: center;
      cursor: pointer;
      transition: 0.5s;

      & span {
        font-weight: 600;
        font-size: 16px;
        color: var(--primary-500);
      }
    }
  }
}
</style>