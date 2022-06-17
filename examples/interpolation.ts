import { default as i18next, t } from "i18next"

/**
 * Interpolation
 * https://www.i18next.com/translation-function/interpolation
 */
i18next.init({
    lng: "de",
    resources: {
        en: {
            translation: {
                welcome: "Good evening {{name}}!"
            },
        },
        de: {
            translation: {
                welcome: "Guten Abend {{name}}!"
            },
        }
    }
})

console.log(t("welcome", { name: "Michael" })) // Guten Abend Michael!

// Escapes variables => can be turned of with - or options
console.log(t("welcome", { name: "<bold>Michael</bold>" })) // Guten Abend &lt;bold&gt;Michael&lt;&#x2F;bold&gt;!