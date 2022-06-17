import { default as i18next, t } from "i18next"

/**
 * Pluralization
 * https://www.i18next.com/translation-function/plurals
 */
i18next.init({
    lng: "en",
    resources: {
        en: {
            translation: {
                cake_one: "Cake",
                cake_other: "Cakes",
                cake_zero: "No Cake"
            },
        }
    }
})

console.log(t("cake", { count: 0 })) // No Cake
console.log(t("cake", { count: 1 })) // Cake
console.log(t("cake", { count: 2 })) // Cakes
console.log(t("cake", { count: 3 })) // Cakes
