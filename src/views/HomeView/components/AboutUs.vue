<template lang="html">
  <section class="about__us">
    <div class="about__us-content container">
      <SectionHeader title="Travella" titleSpan="Agency" top="Немного о нас" descr="Наше турагентство — это ваш персональный компас 
в мире приключений, ведущий к неизведанным горизонтам и незабываемым впечатлениям." data-aos="fade-left" />
      <div class="about__us-content-widget">
        <div class="about__us-content-widget-item" data-aos="fade-left">
          <div class="about__us-content-widget-item-content">
            <img src="../../../assets/images/avatar.png" alt="" />
            <span>10 000 +</span>
            <p>
              За последние годы более путешественников доверили нам организацию
              своих
              <span>незабываемых отпусков и деловых поездок</span>
            </p>
          </div>
        </div>
        <div class="about__us-content-widget-item with-bg" data-aos="fade-right">
          <img src="../../../assets/images/about2.webp" alt="About" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import SectionHeader from '../../../components/SectionHeader/SectionHeader.vue';


</script>


<style lang="scss" scoped>
.about__us {
  padding: 50px 0;
  background: var(--white);
  border-radius: 50px;
  margin-top: 40px;

  &-content {
    display: flex;
    flex-direction: column;

    &-widget {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: 540px;
      margin-top: 100px;
      gap: 24px;


      @media (max-width:768px) {
        grid-template-columns: 1fr;
        grid-auto-rows: 320px;

      }

      &-item {
        background: var(--primary-100);
        border-radius: 40px;
        overflow: hidden;
        display: flex;
        align-items: start;
        flex-direction: column;
        justify-content: end;

        &-content {
          padding: 50px;

          & span {
            font-weight: 800;
            font-size: 96px;
            text-transform: uppercase;
            color: var(--grey900);

            @media (max-width:1200px) {
              font-size: 76px;
            }

            @media (max-width:992px) {
              font-size: 56px;
            }

            @media (max-width:768px) {
              font-size: 66px;
            }

            @media (max-width:576px) {
              font-size: 46px;
            }
          }

          & img {
            position: static;
            display: block;
            user-select: none;
          }

          & p {
            font-weight: 400;
            font-size: 18px;
            line-height: 125%;
            color: var(--grey900);
            max-width: 437px;

            @media (max-width:1200px) {
              font-size: 16px;
            }

            @media (max-width:992px) {
              font-size: 14px;
            }

            @media (max-width:768px) {
              font-size: 16px;
            }

            & span {
              font-size: inherit;
              font-weight: inherit;
              color: var(--primary-500);
            }
          }
        }
      }

      &-item.with-bg {
        position: relative;

        &:hover {
          & img {
            transform: scale(1.1);
          }
        }

        & img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transition: .5s;
        }
      }
    }
  }
}
</style>