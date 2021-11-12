<template>
    <div>
        <nav id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </nav>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    name: 'AppHeader',
    data() {
        return {
            message: 'some-msg',
        }
    }
})
export default class AppHeader extends Vue {}
</script>

<style lang="scss" scoped>
#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
        color: #42b983;
        }
    }
}
</style>