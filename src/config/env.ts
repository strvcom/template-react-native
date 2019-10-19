import envVars, { NativeConfig } from 'react-native-config'

const requiredVariables = ['FOO'] as const

type RequiredVariables = Omit<typeof requiredVariables, keyof []>
type Config = { [key in RequiredVariables[keyof RequiredVariables]]: string }

const ensureConfig = (env: NativeConfig) =>
  requiredVariables.reduce((acc, val) => {
    if (!env[val]) {
      throw new Error(`Missing '${val}' environment variable.`)
    }

    return { ...acc, [val]: env[val] }
  }, {}) as Config

export default ensureConfig(envVars)
