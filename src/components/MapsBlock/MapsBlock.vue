<template>
    <div ref="mapContainer" class="map" style="width: 100%; height: 400px;"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
    name: 'YandexMap',
    props: {
        coordinates: {
            type: Array<number>,
            required: true,
        },
    },
    setup(props) {
        const mapContainer = ref<HTMLDivElement | null>(null);
        onMounted(() => {
            if (window.ymaps) {
                const map = new window.ymaps.Map(mapContainer.value!, {
                    center: props.coordinates,
                    zoom: 17,
                });

                const placemark = new window.ymaps.Placemark(props.coordinates, {
                    balloonContent: 'Здесь!',
                });
                map.geoObjects.add(placemark);
            }
        });

        return {
            mapContainer,
        };
    },
});
</script>

<style scoped>
.map {
    width: 100%;
    height: 100%;
    border-radius: 50px;
    overflow: hidden;
}
</style>