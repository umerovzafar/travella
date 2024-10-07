import { createI18n } from 'vue-i18n';

import uz from './i18n/uz.json';
import ru from './i18n/ru.json';
import en from './i18n/en.json';

const messages = {
    en,
    ru,
    uz,
};

const i18n = createI18n({
    locale: 'ru',
    messages,
});

export default i18n;