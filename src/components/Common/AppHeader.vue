<template>
    <div class="app-header">
        <nav class="app-header__nav">
            <router-link 
                :key="index" 
                v-for="(navItem, index) in navItems" 
                class="app-header__nav-link" 
                :to="navItem.to">
                    {{ navItem.name + ' | '}}
                </router-link> 
        </nav>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    name: 'AppHeader',
    data() {
        return {
            navItems: [
                {
                   name: 'Home',
                   to: '/'
                },
                {
                   name: 'Search',
                   to: '/search'
                },
                {
                   name: 'Sections',
                   to: '/sections'
                },
                {
                   name: 'History',
                   to: '/history'
                },
            ],
        }
    }
})
export default class AppHeader extends Vue {}
</script>

<style lang="scss" scoped>
.app-header {
    border-bottom: 1px solid #2c3e50;
    width: 100%;
    &__nav {
        padding: 30px;

        &-link {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
}
</style>