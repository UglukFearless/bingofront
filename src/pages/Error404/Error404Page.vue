<template>
    <ErrorLayout>
        <p>Page not found</p>
    </ErrorLayout>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ErrorLayout from '@/layouts/ErrorLayout.vue';

@Options({
    components: {
        ErrorLayout,
    },
})
export default class Error404Page extends Vue {}
</script>