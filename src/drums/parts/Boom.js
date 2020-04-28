import { paint, repaint } from '@h'
import Part from './Part'
import pedal from './pedal'
import component from './component'
import file from './sounds/boom.wav'

@paint(component)
class Boom extends Part {
  get key () {
    return 'G'
  }

  get sound () {
    return 'Boom'
  }

  constructor () {
    super(file)
    pedal(71, this)
    return this
  }

  @repaint
  play () {
    super.play()
    return this
  }

  @repaint
  stop () {
    super.stop()
    return this
  }
}

export default Boom