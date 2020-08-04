<template>
    <div id="app">
        {{msg}}
        <PButton></PButton>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: ''
        }
    },
    mounted() {
        let str = 'Hello World'
        this.msg = str
    }
}
</script>

<style lang="less">
    #app {
        color: red;
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
        display: flex;
    }
</style>