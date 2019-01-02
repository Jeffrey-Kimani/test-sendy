<template lang="html">
    <div class="cards">
        <div class="row" style="margin: 0">
            <div class="col-12">
                <div class="fx-heading-box">
                    <div class="fx-h3">Test</div>
                    <div class="fx-text">This is a test page</div>
                </div>
            </div>

            <div class="col-12 my-3">
                <div class="jumbotron">
                    <h1 class="display-4">Hello, world!</h1>
                    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr class="my-4">
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            this.$nextTick(() => {
                $('.jumbotron').hide('slow')
                $('.jumbotron').fadeIn('slow')
            })
        }
    }
</script>

<style lang="less">
    .cards{
        
    }
</style>