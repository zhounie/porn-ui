import Button from './components/button'

const components = {
    Button
}

const install = function(Vue, opts = {}) {
    if (install.installed) return
    components.map(component => {
        console.log(component);
        Vue.component(component.name, component)
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    version: process.env.VERSION,
    ...components
}
