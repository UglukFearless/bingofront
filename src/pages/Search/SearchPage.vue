<template>
    <BaseLayout>
        <p>Search string</p>
        <p>filters</p>
        <p>Search result</p>
    </BaseLayout>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import BaseLayout from '@/layouts/BaseLayout.vue';

@Options({
    components: {
        BaseLayout,
    },
})
export default class SearchPage extends Vue {}
</script>