import {default as i18next, t} from "i18next"

i18next.init({
    // debug: true,
    lng: "de",
    fallbackLng: "en",
    resources: {
        en: {
            translation: {
                key: "Hello world!",
                look: {
                    deeper: "Nice"
                }
            },
            common: {
                save: "Save",
                cancel: "Cancel",
                welcome: "Hey {{name}}"
            }
        },
        de: {
            translation: {
                key: "Hallo Welt!"
            },
            common: {
                save: "Speichern",
                cancel: "Abbrechen",
                welcome: "Hallo {{name}}"
            }
        }
    }
})

console.log(t("common:save"))
console.log(t(["common:sichern", "common:save"])) // Fallback key good for error handling from 404 etc..

console.log(t("common:welcome", { name: "Michael" })) // Interpolation