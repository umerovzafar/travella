<template lang="html">
  <footer class="footer" data-aos="fade-bottom">
    <div class="footer__content">
      <img loading="lazy" class="footer__content-bg" src="../../assets/images/footer.webp" alt="footer-bg" />
      <div class="footer__content-item container">
        <div class="footer__content-item-text">
          <router-link to="/">
            <img loading="lazy" src="../../assets/images/logo.svg" alt="logo" />
          </router-link>
          <h2 class="footer__content-item-title">{{ $t('footer.title') }}</h2>
          <p class="footer__content-item-descr">
            {{ $t('footer.descr') }}
          </p>
          <ul class="footer__content-item-list">
            <li class="footer__content-item-list-item">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M1.5 5C1.5 3.34315 2.84315 2 4.5 2H5.87163C6.732 2 7.48197 2.58556 7.69064 3.42025L8.79644 7.84343C8.97941 8.5753 8.70594 9.34555 8.10242 9.79818L6.8088 10.7684C6.67447 10.8691 6.64527 11.0167 6.683 11.1197C7.81851 14.2195 10.2805 16.6815 13.3803 17.817C13.4833 17.8547 13.6309 17.8255 13.7316 17.6912L14.7018 16.3976C15.1545 15.7941 15.9247 15.5206 16.6566 15.7036L21.0798 16.8094C21.9144 17.018 22.5 17.768 22.5 18.6284V20C22.5 21.6569 21.1569 23 19.5 23H17.25C8.55151 23 1.5 15.9485 1.5 7.25V5Z"
                  fill="white" />
              </svg>
              <a href="tel:+998338587887"> +998 33 858-7887 </a>
            </li>
            <li class="footer__content-item-list-item">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M1.5 5C1.5 3.34315 2.84315 2 4.5 2H5.87163C6.732 2 7.48197 2.58556 7.69064 3.42025L8.79644 7.84343C8.97941 8.5753 8.70594 9.34555 8.10242 9.79818L6.8088 10.7684C6.67447 10.8691 6.64527 11.0167 6.683 11.1197C7.81851 14.2195 10.2805 16.6815 13.3803 17.817C13.4833 17.8547 13.6309 17.8255 13.7316 17.6912L14.7018 16.3976C15.1545 15.7941 15.9247 15.5206 16.6566 15.7036L21.0798 16.8094C21.9144 17.018 22.5 17.768 22.5 18.6284V20C22.5 21.6569 21.1569 23 19.5 23H17.25C8.55151 23 1.5 15.9485 1.5 7.25V5Z"
                  fill="white" />
              </svg>
              <a href="tel:+998908287008">+998 90 828-7008 </a>
            </li>
            <li class="footer__content-item-list-item">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M1.5 5C1.5 3.34315 2.84315 2 4.5 2H5.87163C6.732 2 7.48197 2.58556 7.69064 3.42025L8.79644 7.84343C8.97941 8.5753 8.70594 9.34555 8.10242 9.79818L6.8088 10.7684C6.67447 10.8691 6.64527 11.0167 6.683 11.1197C7.81851 14.2195 10.2805 16.6815 13.3803 17.817C13.4833 17.8547 13.6309 17.8255 13.7316 17.6912L14.7018 16.3976C15.1545 15.7941 15.9247 15.5206 16.6566 15.7036L21.0798 16.8094C21.9144 17.018 22.5 17.768 22.5 18.6284V20C22.5 21.6569 21.1569 23 19.5 23H17.25C8.55151 23 1.5 15.9485 1.5 7.25V5Z"
                  fill="white" />
              </svg>
              <a href="tel:+998997315559"> +998 99 731-5559 </a>
            </li>
          </ul>
        </div>
        <FooterContentForm />
      </div>
    </div>
    <div class="footer__contacts">
      <div class="footer__contacts-content container">
        <div class="footer__contacts-content-info">
          <router-link to="/">
            <img loading="lazy" src="../../assets/images/footer-logo.svg" alt="footer-logo" />
          </router-link>
          <ul class="footer__contacts-content-info-list" role="list">
            <li>
              <router-link to="" class="footer__contacts-content-info-list-link">
                2024
              </router-link>
            </li>
            <li v-for="(link, i) in links" :key="i">
              <router-link :to="link.get('to')" class="footer__contacts-content-info-list-link">
                {{ $t(`footer.links.${link.get('name')}`) }}
              </router-link>
            </li>
          </ul>
        </div>
        <FooterUpBtn />
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import FooterContentForm from "./FooterContentForm.vue";
import FooterUpBtn from "./FooterUpBtn.vue";
const links: Map<string, string>[] = [

  new Map([
    ["name", "rights"],
    ["to", "/"],
  ]),
  new Map([
    ["name", "policy"],
    ["to", "/"],
  ]),
  new Map([
    ["name", "agreement"],
    ["to", "/"],
  ]),
];
</script>

<style lang="scss" scoped>
.footer {
  &__content {
    min-height: 683px;
    position: relative;
    overflow: hidden;
    display: flex;

    &::before {
      content: '';
      width: 100%;
      height: 100%;
      background: rgb(0, 0, 0, 0.3);
      top: 0;
      left: 0;
      position: absolute;
      border-radius: 50px;
    }

    &-bg {
      position: absolute;
      height: 100%;
      width: 100%;
      border-radius: 50px;
      top: 0;
      left: 0;
      z-index: -1;

      @media (max-width: 1200px) {
        object-fit: cover;
      }
    }

    &-item {
      z-index: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media (max-width: 768px) {
        flex-direction: column;
        padding-top: 40px;
      }

      &-text {
        max-width: 714px;
      }

      &-list {
        margin-top: 90px;
        display: flex;
        gap: 24px;
        flex-wrap: wrap;

        &-item {
          display: flex;
          flex-direction: column;
          gap: 8px;

          & a {
            font-weight: 400;
            font-size: 16px;
            color: var(--white);
          }
        }
      }

      &-title {
        font-weight: 800;
        font-size: 48px;
        text-transform: uppercase;
        color: var(--white);
        max-width: 411px;
        margin-top: 54px;

        @media (max-width: 992px) {
          font-size: 40px;
        }
      }

      &-descr {
        font-weight: 400;
        font-size: 20px;
        line-height: 125%;
        color: var(--white);
        max-width: 411px;

        @media (max-width: 992px) {
          font-size: 18px;
          max-width: 320px;
        }
      }
    }
  }

  &__contacts {
    width: 100%;
    background: white;
    border-radius: 50px 50px 0 0;
    margin-top: -50px;
    z-index: 10;
    padding: 50px 0;
    position: relative;

    @media (max-width: 576px) {
      border-radius: 0;
      margin-top: -32px;
      border-radius: 24px 24px 0 0;
    }

    & button {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      backdrop-filter: blur(20px);
      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12),
        0 0 0 1px rgba(103, 110, 118, 0.16),
        0 2px 5px 0 rgba(103, 110, 118, 0.08);
      background: rgba(255, 255, 255, 0.2);
      transition: 0.5s;

      @media (max-width: 576px) {
        display: none;
      }

      &:active {
        transform: scale(0.95);
      }
    }

    &-content {
      display: flex;
      align-items: center;
      justify-content: space-between;

      &-info {
        &-list {
          display: flex;
          gap: 24px;
          margin-top: 60px;
          flex-wrap: wrap;

          &-link {
            font-weight: 400;
            font-size: 12px;
            color: var(--gray-500);
            transition: 0.5s linear;

            &:hover {
              color: var(--gray-800);
            }
          }
        }
      }
    }
  }
}
</style>