// import { PluginFunction } from 'vue'

// interface IPornUI extends PluginFunction<any> {}

// declare const iPornUI: IPornUI
// export default iPornUI

import Vue, { PluginObject } from 'vue'

import { PButton } from './button'

export const version: string

export function install(vue: typeof Vue): void

export class Button extends PButton {}
