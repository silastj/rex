import frame from '@rex/h/src/frame'

const replaceComponent = (element, vElement, parent) =>
  parent.replaceChild(vElement.__target__.__element__, element)

export default frame(replaceComponent)
