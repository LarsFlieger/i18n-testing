import { default as i18next, t } from "i18next"

/**
 * Formatting
 * https://www.i18next.com/translation-function/formatting
 */
i18next.init({
    lng: "en",
    resources: {
        en: {
            translation: {
                point: "{{count, number(minimumFractionDigits: 1)}} Points",
            },
        }
    }
})

console.log(t("point", { count: 0 })) // 0.0 Points
console.log(t("point", { count: 1 })) // 1.0 Points
console.log(t("point", { count: 2.2 })) // 2.2 Points
