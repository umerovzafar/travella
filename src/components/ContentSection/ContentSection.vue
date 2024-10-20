<template lang="html">
    <section class="content__box">
        <div class="content__box-item container">
            <h4 class="content__box-item-title">
            {{ $t('commonText.contentSectionTitle') }}
                <!-- Откройте для себя Узбекистан -->
            </h4>
            <p class="content__box-item-descr">
                {{ $t('commonText.contentSectionText') }}
                <!-- Погрузитесь в атмосферу восточной сказки с нашими увлекательными турами по Узбекистану! Этот древний
                край, богатый историей и культурой, обещает незабываемые впечатления и уникальные открытия. -->
            </p>
            <BlurButton class="content__box-item-btn" @click="$router.push('/tours')" />
        </div>
    </section>
</template>


<script lang="ts" setup>
import BlurButton from "../BlurButton/BlurButton.vue";
</script>


<style lang="scss" scoped>
.content__box {
  padding: 72px;
  background: var(--white);
  border-radius: 50px;
  margin: 40px 0;

  @media (max-width: 992px) {
    padding: 24px;
  }

  @media (max-width: 576px) {
    padding: 12px;
  }

  &-item {
    min-height: 374px;
    // background: var(--gray-100);
    border-radius: 50px;
    position: relative;
    overflow: hidden;
    background: url("../../assets/images/uzb.webp");
    background-size: cover;
    background-position: 0px 80%;
    background-repeat: no-repeat;
    position: relative;
    padding: 24px;

    &::before {
      content: "";
      position: absolute;
      background: rgba(0, 0, 0, 0.4);
      top: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 100%;
    }

    &-title {
      font-weight: 800;
      font-size: 48px;
      text-transform: uppercase;
      color: var(--white);
      z-index: 10;
      position: relative;
      max-width: 638px;

      @media (max-width: 992px) {
        font-size: 40px;
      }

      @media (max-width: 576px) {
        font-size: 22px;
      }
    }

    &-descr {
      font-weight: 400;
      font-size: 20px;
      line-height: 125%;
      color: var(--white);
      z-index: 10;
      position: relative;
      max-width: 638px;
      margin-top: 16px;

      @media (max-width: 992px) {
        font-size: 18px;
      }

      @media (max-width: 992px) {
        font-size: 16px;
      }
    }

    &-btn {
      z-index: 10;
      position: inherit;
      margin-top: 16px;
    }
  }
}
</style>