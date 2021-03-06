import * as f from '@rex/f'
import createHookReflow from './createHookReflow'
import createVElementToCompare from './createVElementToCompare'
import hasElementInTarget from './hasElementInTarget'

export default f.cond(
  [hasElementInTarget, createVElementToCompare],
  [f.T, createHookReflow]
)
