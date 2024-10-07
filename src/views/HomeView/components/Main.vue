<template lang="html">
    <main class="main">
        <ToursFilter />
        <ContentSection data-aos="fade-left" />
        <section class="main__tours">
            <SectionHeader title="популярные туры" titleSpan="По узбекистану" top="Узбекистан"
                descr="Не упустите возможность воспользоваться нашими специальными предложениями и скидками на туры по Узбекистану."
                data-aos="fade-right" />
            <LocalToursSlider />
        </section>
        <section class="main__tours">
            <SectionHeader title="популярные туры" titleSpan="По Миру" top="Мир"
                descr="Путешествуйте с комфортом и уверенностью, зная, что каждый аспект вашего тура тщательно продуман"
                data-aos="fade-left" />
            <WorldToursSwiper />
        </section>
        <TravelBloc />
        <!--  -->
        <section class="events">
            <SectionHeader title="Ивенты" titleSpan="" top="Популярные события"
                descr="В связи с популярными событиями по Средней Азии мы устраиваем специальные туры и предложения для наших клиентов"
                data-aos="fade-left" />
            <EventsBloc />
        </section>
        <AboutUs />
        <BonusesBloc />
        <HealthyBloc />
        <CorporativeBloc />
        <ServiceInfo />
        <!--  -->
        <ConnectSection />
        <!--  -->
        <section class="main__reviews">
            <SectionHeader title="Что о нас говорят " titleSpan="путешественники" top="Отзывы о компании" descr=""
                data-aos="fade-left" />
            <ReviewBloc />
        </section>
    </main>
</template>

<script lang="ts" setup>
import ContentSection from '../../../components/ContentSection/ContentSection.vue';
import CorporativeBloc from '../../../components/CorporativeBloc/CorporativeBloc.vue';
import LocalToursSlider from '../../../components/LocalToursSlider/LocalToursSlider.vue';
import ReviewBloc from '../../../components/ReviewsBloc/ReviewBloc.vue';
import SectionHeader from '../../../components/SectionHeader/SectionHeader.vue';
import WorldToursSwiper from '../../../components/WorldToursSwiper/WorldToursSwiper.vue';
import AboutUs from './AboutUs.vue';
import BonusesBloc from './BonusesBloc.vue';
import ConnectSection from './ConnectSection.vue';
import EventsBloc from './EventsBloc.vue';
import HealthyBloc from './HealthyBloc.vue';
import ServiceInfo from './ServiceInfo.vue';
import ToursFilter from './ToursFilter.vue';
import TravelBloc from './TravelBloc.vue';
</script>
