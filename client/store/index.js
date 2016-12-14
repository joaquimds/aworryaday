import { createStore } from 'redux'
import root from '../reducers'
import randomWorry from '../worries'

const Store = createStore(root, { worry: randomWorry() })

export default Store
