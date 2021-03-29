<template>
    <div class="home">
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <div class="demo_1">
            <p>dddddd</p>
            <p>ddddddd</p>
            <p>dddd</p>
            <p>ddddd</p>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
    name: 'Home',

    components: {
        HelloWorld
    }
};
</script>
<style lang="less" scoped>
p {
    &:nth-of-type(even) {
        border-bottom: 1px solid #dddddd;
    }
}

</style>
