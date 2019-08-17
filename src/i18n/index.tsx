import * as RNLocalize from 'react-native-localize'
import i18n from 'i18n-js'
import R from 'ramda'

import { en } from './en'

type LanguageTag = 'en'

type Language = Readonly<{
  languageTag: LanguageTag
  isRTL: boolean
}>

const translations = {
  en,
}

const fallback: Language = { languageTag: 'en', isRTL: false }
const availableLanguages: LanguageTag[] = ['en']

const { languageTag }: Language =
  RNLocalize.findBestAvailableLanguage(availableLanguages) || fallback

i18n.defaultLocale = 'en'
i18n.locale = languageTag
i18n.fallbacks = true
i18n.translations = { [languageTag]: translations[languageTag] }

export const t = R.memoizeWith(
  (key, config) => (config ? key + JSON.stringify(config) : key),
  (key, config) => i18n.t(key, config)
)
