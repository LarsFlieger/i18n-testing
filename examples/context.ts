import { default as i18next, t } from "i18next"

/**
 * Context
 * https://www.i18next.com/translation-function/context
 */
i18next.init({
    lng: "en",
    resources: {
        en: {
            translation: {
                "friend": "A friend",
                "friend_male": "A boyfriend",
                "friend_female": "A girlfriend"
          },
        }
    }
})

console.log(t("friend")) // A friend
console.log(t("friend", { context: "male" })) // A boyfriend
console.log(t("friend", { context: "female" })) // A girlfriend

// Can be combined with plural: https://www.i18next.com/translation-function/context#combining-with-plurals
