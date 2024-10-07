import 'vue-i18n';

declare module 'vue' {
    interface ComponentCustomProperties {
        $t: typeof import('vue-i18n')['t'];
        $tc: typeof import('vue-i18n')['tc'];
    }
}