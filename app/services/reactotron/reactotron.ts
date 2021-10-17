import Tron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'

interface ReactotronConfig {
  /** The name of the app. */
  name?: string
  /** The host to connect to: default 'localhost'. */
  host?: string
}

/**
 * The default Reactotron configuration.
 */
export const DEFAULT_REACTOTRON_CONFIG: ReactotronConfig = {
  name: require('../../../package.json').name,
  host: 'localhost'
}

// in dev, we attach Reactotron, in prod we attach a interface-compatible mock.
export const Reactotron = Tron
  .configure(DEFAULT_REACTOTRON_CONFIG)
  .useReactNative()
  .use(reactotronRedux())
  .connect()
