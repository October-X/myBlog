<template>
  <div class="test">
      <Contact></Contact>
  </div>
</template>

<script>
import Contact from './'
export default {
    components: {
        Contact,
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