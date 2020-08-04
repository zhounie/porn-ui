import Button from './components/button/index'

const components = [
    Button
]
const install = function(Vue, opts = {}) {
    if (install.installed) return
    install.installed = true
    components.map(component => {
        Vue.component(component.name, component)
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    version: process.env.VERSION,
    install,
    ...components
}
