import h from '@rex/h'
import * as ui from '@rex/kit'
import style from './style.css'

export default (props, children) =>
  <main className={[style.template, props.className]}>
    <ui.Header />
    {children}
    <ui.Footer />
  </main>
