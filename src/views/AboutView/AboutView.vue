<template>
    <header class="about__header">
        <MainNavBar class="container" :page="true" :lang="lang" :toggleLanguageDialog="toggleLanguageDialog"
            :toggleShowAdaptiveNav="toggleShowAdaptiveNav" :showAdaptiveNav="showAdaptiveNav" />
        <AdaptiveMainNavBar :toggleShowAdaptiveNav="toggleShowAdaptiveNav" :showAdaptiveNav="showAdaptiveNav" />
        <LanguagePicker :setLang="setLang" :toggleLanguageDialog="toggleLanguageDialog" :showModal="showLanguageDialog" />
    </header>

    <main class="main">
        <section class="main__company">
            <div class="main__company-content container">
                <SectionHeader title="Travella" titleSpan="Agency" top="Немного о нас"
                    descr="Мы являемся ведущей компанией в сфере организации туров и путешествий, предлагая нашим клиентам незабываемые впечатления и комфортные условия для отдыха."
                    data-aos="fade-right" />
                <div class="main__company-bloc">
                    <svg class="main__company-bloc-decor" width="280" height="401" viewBox="0 0 280 401" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_b_556_68389)">
                            <path
                                d="M-69 249.255C-1.089 293.519 103.081 249.36 160.875 208.678C201.792 179.875 246.949 135.905 250.81 82.6945C253.512 45.4446 227.081 9.43527 192.916 -4.41266C155.204 -19.6985 134.292 36.6655 124.706 62.0415C96.0013 138.036 84.1887 228.221 98.7332 308.541C110.885 375.65 155.029 457 232.483 457"
                                stroke="white" stroke-opacity="0.2" stroke-width="56.6307" stroke-linecap="round" />
                        </g>
                        <defs>
                            <filter id="filter0_b_556_68389" x="-127.319" y="-65.3154" width="436.639" height="580.631"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="15" />
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_556_68389" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_556_68389"
                                    result="shape" />
                            </filter>
                        </defs>
                    </svg>

                    <h1 class="main__company-bloc-title">
                        ваши мечты-наши маршруты
                    </h1>
                </div>
            </div>
        </section>

        <section class="main__facts">
            <SectionHeader title="Немного" titleSpan="фактов" top="Немного о нас"
                descr="Мы стремимся подарить вам идеальные путешествия, которые оставят самые яркие и приятные воспоминания. "
                data-aos="fade-right" />

            <div class="main__facts-cards container">
                <div class="main__facts-cards-item" v-for="(item, index) in items" :key="index">
                    <div class="main__facts-cards-item-value">
                        {{ item.value }}
                    </div>
                    <h5 class="main__facts-cards-item-title">
                        {{ item.title }}
                    </h5>
                </div>
            </div>
        </section>
        <section class="about__mission">
            <div class="about__mission-content container">
                <!--  -->
                <div class="about__mission-content-item" v-for="(item, index) in missionItems" :key="index"
                    :class="{ 'with-tags': item?.get('tags') }" :data-aos="item.get('data-aos')">
                    <div class="about__mission-content-item-top">
                        <div class="about__mission-content-item-top-img" v-show="!item.get('tags')">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M8.16147 3.08076C8.68934 2.81683 9.31066 2.81683 9.83853 3.08076L14.8323 5.57765C14.9379 5.63043 15.0621 5.63043 15.1677 5.57765L19.0365 3.64326C20.2832 3.01992 21.75 3.92647 21.75 5.32031V17.8047C21.75 18.5149 21.3487 19.1642 20.7135 19.4818L15.8385 21.9193C15.3107 22.1832 14.6893 22.1832 14.1615 21.9193L9.16771 19.4224C9.06213 19.3696 8.93787 19.3696 8.8323 19.4224L4.96353 21.3568C3.71683 21.9801 2.25 21.0736 2.25 19.6797V7.19531C2.25 6.48512 2.65125 5.83587 3.28647 5.51826L8.16147 3.08076ZM9 6.50002C9.41421 6.50002 9.75 6.8358 9.75 7.25002V15.5C9.75 15.9142 9.41421 16.25 9 16.25C8.58579 16.25 8.25 15.9142 8.25 15.5V7.25002C8.25 6.8358 8.58579 6.50002 9 6.50002ZM15.75 9.50002C15.75 9.0858 15.4142 8.75002 15 8.75002C14.5858 8.75002 14.25 9.0858 14.25 9.50002V17.75C14.25 18.1642 14.5858 18.5 15 18.5C15.4142 18.5 15.75 18.1642 15.75 17.75V9.50002Z"
                                    fill="#FF5722" />
                            </svg>
                        </div>
                        <svg class="about__mission-content-item-decor" v-show="item.get('show-decor')" width="378"
                            height="360" viewBox="0 0 378 360" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_b_556_68569)">
                                <path
                                    d="M349 249.255C281.089 293.519 176.919 249.36 119.125 208.678C78.2083 179.875 33.0509 135.905 29.1902 82.6945C26.4876 45.4446 52.9186 9.43527 87.0837 -4.41266C124.796 -19.6985 145.708 36.6655 155.294 62.0415C183.999 138.036 195.811 228.221 181.267 308.541C169.115 375.65 124.971 457 47.5171 457"
                                    stroke="white" stroke-opacity="0.2" stroke-width="56.6307" stroke-linecap="round" />
                            </g>
                            <defs>
                                <filter id="filter0_b_556_68569" x="-29.3201" y="-65.3154" width="436.639" height="580.631"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="15" />
                                    <feComposite in2="SourceAlpha" operator="in"
                                        result="effect1_backgroundBlur_556_68569" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_556_68569"
                                        result="shape" />
                                </filter>
                            </defs>
                        </svg>
                        <h4 class="about__mission-content-item-top-title">
                            {{ item.get('title') }}
                        </h4>
                    </div>
                    <div class="about__mission-content-item-content">
                        <p class="about__mission-content-item-content-descr" v-for="(textItem, i) in item.get('text')"
                            :key="i">
                            {{ textItem?.descr }}
                        </p>
                    </div>
                </div>
                <!--  -->
            </div>
        </section>
        <section class="about__locations">
            <div class="about__locations-content container">
                <div class="about__locations-content-descr">
                    <p>С момента открытия агентство начало активно привлекать клиентов, предлагая им персонализированные
                        туры, высокий уровень сервиса и индивидуальный подход.
                    </p>
                    <p>Благодаря качественной работе и постоянному совершенствованию услуг, агентство быстро завоевало
                        доверие и признание на рынке.
                    </p>
                    <p>
                        За 10 лет работы, сы обзавелись партнёрами в разных странах
                    </p>
                </div>
                <img src="../../assets/images/worldMap.png" alt="worldMap" class="about__locations-img" loading="lazy">
                <div class="about__locations-items">

                    <ul class="about__locations-list" role="list">
                        <li v-for="(item, index) in locations" :key="index">
                            <div class="about__locations-list-icon">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M13.7498 6.25C14.164 6.25 14.4998 6.58579 14.4998 7C14.4998 8.12013 14.0077 9.12627 13.2304 9.8123C12.9199 10.0864 12.4459 10.0569 12.1718 9.7463C11.8977 9.43575 11.9273 8.96179 12.2378 8.6877C12.7062 8.27432 12.9998 7.67191 12.9998 7C12.9998 6.58579 13.3356 6.25 13.7498 6.25Z"
                                        fill="#FF5722" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M10 0.25C4.61522 0.25 0.25 4.61522 0.25 10C0.25 15.3848 4.61522 19.75 10 19.75C15.3848 19.75 19.75 15.3848 19.75 10C19.75 4.61522 15.3848 0.25 10 0.25ZM2.5749 13.6002C3.91195 16.3527 6.7344 18.25 10 18.25C10.6623 18.25 11.3063 18.172 11.9234 18.0246C11.6364 17.2603 10.9044 16.75 10.0828 16.75C9.60224 16.75 9.19209 16.4026 9.11308 15.9285L9.04012 15.4907C8.94606 14.9263 9.2906 14.3813 9.84075 14.2241L10.8295 13.9416C11.2567 13.8195 11.6131 13.5237 11.8119 13.1263L11.8484 13.0533C12.0945 12.561 12.5977 12.25 13.1481 12.25C13.5335 12.25 13.9031 12.4031 14.1756 12.6756L14.5 13H15.1283C15.9669 13 16.724 13.4646 17.1108 14.1857C17.8347 12.9586 18.25 11.5278 18.25 10C18.25 5.7018 14.963 2.17132 10.7656 1.78506C10.81 2.04802 10.9468 2.289 11.1548 2.46233L12.2234 3.35284C12.6651 3.7209 12.7582 4.36275 12.4393 4.84112L11.9282 5.60766C11.6507 6.02398 11.2423 6.3359 10.7676 6.49413L10.6254 6.54154C9.93271 6.77243 9.64918 7.59877 10.0542 8.2063C10.4237 8.76049 10.2238 9.5131 9.62805 9.81097L7 11.125L7.4234 12.1835C7.608 12.645 7.40803 13.171 6.96343 13.3933C6.5503 13.5999 6.04855 13.4814 5.77142 13.1119L5.09217 12.2062C4.59039 11.5372 3.55995 11.6301 3.18594 12.3781L2.5749 13.6002Z"
                                        fill="#FF5722" />
                                </svg>
                            </div>
                            <span>{{ item }}</span>
                        </li>
                    </ul>
                    <ul class="about__locations-list" role="list">
                        <li v-for="(item, index) in locations" :key="index">
                            <div class="about__locations-list-icon">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M13.7498 6.25C14.164 6.25 14.4998 6.58579 14.4998 7C14.4998 8.12013 14.0077 9.12627 13.2304 9.8123C12.9199 10.0864 12.4459 10.0569 12.1718 9.7463C11.8977 9.43575 11.9273 8.96179 12.2378 8.6877C12.7062 8.27432 12.9998 7.67191 12.9998 7C12.9998 6.58579 13.3356 6.25 13.7498 6.25Z"
                                        fill="#FF5722" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M10 0.25C4.61522 0.25 0.25 4.61522 0.25 10C0.25 15.3848 4.61522 19.75 10 19.75C15.3848 19.75 19.75 15.3848 19.75 10C19.75 4.61522 15.3848 0.25 10 0.25ZM2.5749 13.6002C3.91195 16.3527 6.7344 18.25 10 18.25C10.6623 18.25 11.3063 18.172 11.9234 18.0246C11.6364 17.2603 10.9044 16.75 10.0828 16.75C9.60224 16.75 9.19209 16.4026 9.11308 15.9285L9.04012 15.4907C8.94606 14.9263 9.2906 14.3813 9.84075 14.2241L10.8295 13.9416C11.2567 13.8195 11.6131 13.5237 11.8119 13.1263L11.8484 13.0533C12.0945 12.561 12.5977 12.25 13.1481 12.25C13.5335 12.25 13.9031 12.4031 14.1756 12.6756L14.5 13H15.1283C15.9669 13 16.724 13.4646 17.1108 14.1857C17.8347 12.9586 18.25 11.5278 18.25 10C18.25 5.7018 14.963 2.17132 10.7656 1.78506C10.81 2.04802 10.9468 2.289 11.1548 2.46233L12.2234 3.35284C12.6651 3.7209 12.7582 4.36275 12.4393 4.84112L11.9282 5.60766C11.6507 6.02398 11.2423 6.3359 10.7676 6.49413L10.6254 6.54154C9.93271 6.77243 9.64918 7.59877 10.0542 8.2063C10.4237 8.76049 10.2238 9.5131 9.62805 9.81097L7 11.125L7.4234 12.1835C7.608 12.645 7.40803 13.171 6.96343 13.3933C6.5503 13.5999 6.04855 13.4814 5.77142 13.1119L5.09217 12.2062C4.59039 11.5372 3.55995 11.6301 3.18594 12.3781L2.5749 13.6002Z"
                                        fill="#FF5722" />
                                </svg>
                            </div>
                            <span>{{ item }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="main__info">
            <SectionHeader title="Ваш надежный партнер" titleSpan="в организации деловых поездок"
                top="Информация для корпоративных клиентов"
                descr="Travella предлагает комплексные решения для корпоративных клиентов, обеспечивая высокий уровень сервиса и индивидуальный подход к каждому проекту. "
                data-aos="fade-left" />
        </section>

        <section class="main__why">
            <svg class="main__why-decor" width="746" height="697" viewBox="0 0 746 697" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_b_556_68390)">
                    <path
                        d="M120.246 670.798C251.895 625.574 302.427 437.91 308.596 316.711C312.963 230.904 301.322 123.342 233.509 61.9431C186.037 18.9606 109.421 16.735 54.5683 48.3761C-5.98034 83.3026 48.055 171.119 72.2027 210.885C144.519 329.977 253.878 441.175 377.791 506.272C481.323 560.662 637.938 586.769 719.875 481.895"
                        stroke="#FAFAFA" stroke-width="52" stroke-linecap="round" />
                </g>
                <defs>
                    <filter id="filter0_b_556_68390" x="-29.1371" y="-29.127" width="805.013" height="755.932"
                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="15" />
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_556_68390" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_556_68390" result="shape" />
                    </filter>
                </defs>
            </svg>
            <div class="main__why-content container">
                <div class="main__why-content-cards">
                    <div class="main__why-item"></div>
                    <div class="main__why-item"></div>
                </div>
                <div class="main__why-item-text">
                    <h2 class="main__why-item-text-title">
                        почему <span>мы?</span>
                    </h2>
                </div>
                <div class="main__why-content-cards">
                    <div class="main__why-item"></div>
                    <div class="main__why-item"></div>
                </div>
            </div>
        </section>

    </main>

    <Footer />
</template>

<script lang="ts" setup>
import { type Ref, ref } from 'vue';
import MainNavBar from '../../components/MainNavBar/MainNavBar.vue';
import AdaptiveMainNavBar from '../../components/MainNavBar/AdaptiveMainNavBar.vue';
import LanguagePicker from '../../components/LanguagePicker/LanguagePicker.vue';
import Footer from '../../components/Footer/Footer.vue';
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

const items = [
    {
        title: 'Агентство открыто с 2014 года.', value: '2014',
    },
    {
        title: 'Агентство открыто с 2014 года.', value: '1012',
    },
    {
        title: 'Более 20 приемов на отправку из Узбекистана', value: '20',
    },
];

const missionItems: Map<string, any>[] = [
    new Map<string, any>([
        ["tags", true],
        ["show-decor", false],
        ['data-aos', 'fade-left']
    ]),
    new Map<string, any>([
        ["title", "Твои мечты — наша миссия"],
        ["tags", false],
        ["show-decor", false],
        ["text", [
            { 'descr': "В Travella мы понимаем, что каждое путешествие — это больше, чем просто поездка. " },
            { 'descr': "Это возможность открыть для себя новые горизонты, познакомиться с культурой и историей других стран и создать уникальные воспоминания." },
        ]],
        ['data-aos', 'fade-right']

    ]),
    new Map<string, any>([
        ["title", "Индивидуальный подход"],
        ["tags", false],
        ["show-decor", false],
        ["text", [
            { 'descr': "Каждый клиент для нас — особенный." },
            { 'descr': "Мы внимательно выслушиваем ваши пожелания и создадим тур, отражающие ваши интересы и предпочтения. " },
            { 'descr': "Независимо от того, хотите ли вы спокойный отдых на пляже или же вас привлекает активный туризм, мы сможем создать идеальный для вас тур." },
        ]],
        ['data-aos', 'fade-left']

    ]),
    new Map<string, any>([
        ["tags", true],
        ["show-decor", false],
        ['data-aos', 'fade-right']

    ]),
    new Map<string, any>([
        ["tags", true],
        ["show-decor", true],
        ['data-aos', 'fade-left']

    ]),
    new Map<string, any>([
        ["title", "Профессионализм и опыт"],
        ["tags", false],
        ["show-decor", false],
        ["text", [
            { 'descr': "Наша команда состоит из опытных специалистов, которые посвятили себя туризму. " },
            { 'descr': "Мы знаем все тонкости организации, которые позволяют нам предлагать только лучшие и проверенные варианты. " },
            { 'descr': "С Travella вы можете быть уверены в качестве и надежности предоставляемых услуг." },
        ]],
        ['data-aos', 'fade-right']

    ]),

];

const locations = [
    'Индия',
    'Турция',
    'Китай',
    'Индонезия',
    'Россия',
    'Казахстан',
];


</script>

<style lang="scss" scoped>
.main {
    padding: 40px 0;

    &__company {
        padding: 40px 0;
        background: var(--white);
        border-radius: 50px;

        &-bloc {
            width: 100%;
            min-height: 400px;
            background: var(--gray-300);
            border-radius: 40px;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: end;

            &-decor {
                position: absolute;
                left: 0;
                top: 0;
            }

            &-title {
                font-weight: 800;
                font-size: 48px;
                text-transform: uppercase;
                margin-bottom: 20px;
                color: var(--white);

                @media (max-width:768px) {
                    font-size: 32px;
                    text-align: center;
                }

                @media (max-width:576px) {
                    font-size: 24px;
                }
            }

        }
    }

    &__facts {

        &-cards {
            display: flex;
            justify-content: space-between;
            margin-top: 40px;
            gap: 24px;
            flex-wrap: wrap;

            @media (max-width:992px) {
                justify-content: center;
            }

            &-item {
                display: flex;
                flex-direction: column;
                max-width: 306px;
                align-items: center;
                justify-content: center;
                gap: 24px;


                &-value {
                    width: 250px;
                    height: 250px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 100%;
                    background: rgba(255, 255, 255, .2);
                    stroke-width: 1px;
                    stroke: var(--primary-500);
                    box-shadow: 0 1px 1px 0 #d80027, 0 0 0 1px #ff9811, 0 2px 5px 0 #ff9811, 0 0 0 4px rgba(255, 152, 17, 0.16);
                    font-weight: 800;
                    font-size: 48px;
                    text-transform: uppercase;
                    color: var(--gray-900);

                    @media (max-width:576px) {
                        width: 160px;
                        height: 160px;
                        font-size: 36px;
                    }
                }

                &-title {
                    text-align: center;
                    font-weight: 400;
                    font-size: 20px;
                    line-height: 125%;
                    text-align: center;
                    color: var(--gray-900);
                    max-width: 240px;
                }
            }
        }
    }

    &__why {
        padding: 60px 0;
        background: var(--white);
        border-radius: 40px;
        position: relative;

        &-decor {
            position: absolute;
            left: 30%;
            top: 40px;
        }

        &-content {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            align-items: center;
            z-index: 1;
            position: relative;

            @media (max-width:1200px) {
                display: flex;
                justify-content: space-between;

            }

            @media (max-width:992px) {
                flex-direction: column;
            }

            &-cards {
                display: flex;
                flex-direction: column;
                gap: 24px;


                @media (max-width:992px) {
                    flex-direction: row;
                }

                @media (max-width:768px) {
                    flex-wrap: wrap;
                }

            }
        }



        &-item {
            padding: 24px;
            background: var(--primary-100);
            min-height: 303px;
            border-radius: 40px;

            @media (max-width:1200px) {
                width: 100%;
                min-width: 320px;
            }

            @media (max-width:1576px) {
                width: 100%;
                min-width: 280px;
            }

            &-text {
                display: flex;
                justify-content: center;

                @media (max-width:768px) {
                    order: -1;
                }

                &-title {
                    text-align: center;
                    font-weight: 800;
                    font-size: 48px;
                    text-transform: uppercase;
                    text-align: center;
                    color: var(--gray-900);
                    max-width: 270px;

                    @media (max-width:1200px) {
                        font-size: 32px;
                        max-width: 462px;
                    }

                    @media (max-width:576px) {
                        font-size: 24px;
                    }

                    @media (max-width:768px) {
                        font-size: 32px;
                    }

                    & span {
                        color: var(--gray-500);
                    }
                }
            }
        }
    }


}

.about__mission {
    padding: 50px 0;

    &-content {
        display: grid;
        margin-top: 40px;
        grid-template-columns: repeat(auto-fill, minmax(540px, 1fr));
        grid-auto-rows: 360px;
        gap: 24px;

        @media (max-width:1200px) {
            grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));

        }

        @media (max-width:992px) {
            grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
        }

        @media (max-width:992px) {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        }

        @media (max-width:992px) {
            grid-auto-rows: 400px;

        }

        &-item {
            padding: 24px;
            background: var(--primary-100);
            border-radius: 40px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            &-decor {
                position: absolute;
                left: 0;
                top: 0;
            }

            &-top {
                display: flex;
                align-items: center;
                gap: 12px;

                &-img {
                    padding: 4px;
                    border-radius: 8px;
                    background: var(--white);
                    max-width: max-content;
                }

                &-title {
                    font-weight: 700;
                    font-size: 36px;
                    color: var(--primary-500);

                    @media (max-width:992px) {
                        font-size: 22px;
                    }

                    @media (max-width:768px) {
                        font-size: 20px;
                    }

                    @media (max-width:576px) {
                        font-size: 16px;
                    }

                }
            }

            &-content {
                display: flex;
                flex-direction: column;
                gap: 24px;

                @media (max-width:768px) {
                    gap: 16px;
                }

                &-descr {
                    font-weight: 400;
                    font-size: 16px;
                    color: var(--gray-900);

                    @media (max-width:992px) {
                        font-size: 14px;
                    }

                    @media (max-width:576px) {
                        font-size: 14px;
                    }
                }
            }

            &-tags {
                display: flex;
                gap: 12px;
                flex-wrap: wrap;
                max-width: 220px;

                &-item {
                    backdrop-filter: blur(20px);
                    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(103, 110, 118, 0.16), 0 2px 5px 0 rgba(103, 110, 118, 0.08);
                    background: rgba(255, 255, 255, 0.2);
                    padding: 8px;
                    border-radius: 50px;
                    max-width: max-content;

                    & span {
                        font-weight: 400;
                        font-size: 14px;
                        text-align: center;
                        color: var(--white);
                    }
                }
            }

            &.with-tags {
                position: relative;
                background: var(--gray-300);
                display: flex;
                justify-content: end;
                align-items: flex-end;

            }
        }
    }
}

.about__locations {
    padding: 50px 0;
    background: var(--white);
    border-radius: 40px;

    @media (max-width:992px) {
        padding: 24px 0;
    }

    &-img {
        max-width: 100%;
        margin-top: 40px;
    }

    &-content {
        display: flex;
        flex-direction: column;

        &-descr {
            max-width: 636px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            align-self: flex-end;

            & p {
                font-weight: 400;
                font-size: 20px;
                line-height: 125%;
                color: var(--grey900);

                @media (max-width:992px) {
                    font-size: 18px;
                }

                @media (max-width:576px) {
                    font-size: 16px;
                }
            }
        }
    }

    &-items {
        display: flex;
        gap: 40px;
        align-self: flex-end;
        margin-top: 40px;
    }

    &-list {
        display: flex;
        flex-direction: column;
        gap: 12px;
        align-self: flex-end;

        & li {
            display: flex;
            align-items: center;
            gap: 16px;

            & span {
                font-weight: 400;
                font-size: 16px;
                color: var(--primary-500);

                @media (max-width:576px) {
                    font-size: 14px;
                }
            }

        }

    }
}
</style>