import envVars, { NativeConfig } from 'react-native-config'

enum requiredVariables {
  'FOO',
}

type RequiredVariables = keyof typeof requiredVariables
type Config = Readonly<{ [key in RequiredVariables]: string }>

const ensureConfig = (env: NativeConfig): Config =>
  Object.values(requiredVariables).reduce((acc, val) => {
    // Filters index entries from enum.
    if (typeof val === 'number') {
      return acc
    }

    if (!env[val]) {
      throw new Error(`Missing '${val}' environment variable.`)
    }

    return { ...acc, [val]: env[val] }
  }, {})

export default ensureConfig(envVars)
