<template>
    <div class="footer__container">
        I'm footer
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    name: 'AppFooter',
    data() {
        return {
            message: 'some-msg',
        }
    }
})
export default class AppFooter extends Vue {}
</script>

<style lang="scss" scoped>
.footer {
    
    &__container {
        width: 100%;
        min-height: 60px;
        border-top: 1px solid black;
    }
}
</style>