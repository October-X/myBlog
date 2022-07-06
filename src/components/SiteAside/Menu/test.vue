<template>
  <div class="test">
      <Menu></Menu>
  </div>
</template>

<script>
import Menu from './'
export default {
    components: {
        Menu,
    }
}
</script>

<style>
    .test{
        width: 400px;
        height: 400px;
        background-color:black;
        padding-top: 100px;
        margin: 100px auto;
    }
</style>