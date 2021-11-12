<template>
    <div class="base-layout__container">
        <AppHeader />
        <div class="base-layout__page-content">
            <slot></slot>
        </div>
        <AppFooter />
    </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';

import AppHeader from '@/components/Common/AppHeader.vue';
import AppFooter from '@/components/Common/AppFooter.vue';

@Options({
    name: 'BaseLayout',
    components: {
        AppHeader,
        AppFooter,
    },
    data() {
        return {
            message: 'some-msg',
        }
    }
})
export default class BaseLayout extends Vue {}
</script>

<style lang="scss" scoped>

.base-layout {
    &__container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    &__page-content {
        flex-grow: 1;
    }
}
</style>