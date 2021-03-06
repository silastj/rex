import h, { Fragment } from '@rex/h'
import * as ui from '@ui'
import style from './style.css'

export default (props) =>
  <ui.Story>
    <ui.Sources slot='picture' {...props} />
    <Fragment slot='caption'>
      <data className={style.story__data} value={props.date}>{props.date}</data>
      <ui.Heading level='2' {...props}>{props.title}</ui.Heading>
      <ui.P {...props}>by {props.author}</ui.P>
      <ui.Link className={style.story__link} {...props}>{props.link}</ui.Link>
    </Fragment>
  </ui.Story>
