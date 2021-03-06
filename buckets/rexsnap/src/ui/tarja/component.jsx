import h, { Zone } from '@rex/h'
import * as ui from '@ui'
import style from './style.css'

export default () =>
  <Zone>
    <figure className={style.tarja}>
      <ui.Picture className={style.tarja__picture}>
        <source srcSet='/assets/beta.mobile.png' media='(max-width: 767px)' />
        <source srcSet='/assets/beta.tablet.png' media='(min-width: 768px) and (max-width: 959px)' />
        <source srcSet='/assets/beta.desktop.png' media='(min-width: 960px)' />
      </ui.Picture>
      <figcaption className={style.tarja__figcaption}>
        <ui.Heading className={style.tarja__heading} color='inverse' level='3' size='largest'>We’re in beta. Get your invite today!</ui.Heading>
        <ui.Link className={style.tarja__linkButton} color='inverse' href='/' icon='arrow'>Get an invite</ui.Link>
      </figcaption>
    </figure>
  </Zone>
