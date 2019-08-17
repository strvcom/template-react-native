import React from 'react'
import { Text } from 'react-native'

import { envVars } from '~/config'
import { t } from '~/i18n'

export const App = () => <Text>{t('hello', { foo: envVars.FOO })}</Text>
