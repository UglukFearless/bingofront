<template>
    <div class="error-layout">
        <AppHeader />
        <div class="error-layout__content-wrap">
            <div>
                <router-link to="/">
                    <h1>{{ appName }}</h1>
                </router-link>
            </div>
            <slot />
        </div>
        <AppFooter />
    </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';

import AppHeader from '@/components/Common/AppHeader.vue';
import AppFooter from '@/components/Common/AppFooter.vue';

@Options({
    name: 'ErrorLayout',
    components: {
        AppHeader,
        AppFooter,
    },
    data() {
        return {
            appName: 'Bingest',
        }
    }
})
export default class BaseLayout extends Vue {}
</script>

<style lang="scss" scoped>
    .error-layout {
        position: relative;
        display: flex;
        flex-direction: column;
        min-height: 100vh;

        &__content-wrap {
            padding-bottom: 5rem;
            flex-grow: 1;
        }
    }
</style>