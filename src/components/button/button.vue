<template>
    <div>
        <span>按钮</span>
    </div>
</template>

<script>
export default {
    name: 'PButton',
    props: {
        size: {
            type: String,
            default: 'default'
        },
        type: {
            type: String,
            default: 'default'
        }
    }
}
</script>