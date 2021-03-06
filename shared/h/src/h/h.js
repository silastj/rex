import * as f from '@rex/f'
import slot from '@rex/h/src/slot'
import createComment from './createComment'
import createElement from './createElement'
import executeComponent from './executeComponent'
import isComponent from './isComponent'
import isTagName from './isTagName'

export default (tagNameOrComponent, attributes, ...children) =>
  f.cond(
    [isTagName, createElement],
    [isComponent, executeComponent],
    [f.T, createComment]
  )(tagNameOrComponent, { ...attributes }, slot(f.flatten(children)))
