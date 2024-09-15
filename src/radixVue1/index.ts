import { getComponentMap, getPropsMap } from './mapping'

export function radixVue1() {
  return {
    uiName: 'radix-vue1',
    map: getPropsMap(),
    lib: 'radix-vue',
  }
}

export function radixVue1Components() {
  return {
    map: getComponentMap(),
    isSeperatorByHyphen: false,
    prefix: '',
    lib: 'radix-vue',
    isReact: true,
  }
}
