import IntlMessageFormat from 'intl-messageformat';

export default function load(translations, language) {
    translations.forEach(function (value, key) {
        translations.set(key, new IntlMessageFormat(value, language));
    });

    return translations;
}
//# sourceMappingURL=load.js.map