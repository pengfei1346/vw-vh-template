<template>
  <div class="home">
    <Banner />
    <Block />
    <Grid />
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'
import Block from '@/components/Block.vue'
import Grid from '@/components/Grid.vue'

export default {
  name: 'home',
  components: {
    Banner,
    Block,
    Grid
  }
}
</script>
