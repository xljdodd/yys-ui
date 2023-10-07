<template>
  <div style="height: 100%">
    <div class="" style="height: 50px; background-color: red"></div>
    <div class="flex" style="height: calc(100% - 50px); background-color: #036cdf">
      <div style="width: 200px; background-color: aqua"></div>
      <div style="background-color: aquamarine">
        <div style="calc(100% - 50px)"></div>
        <div style="height: 50px; background-color: coral"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>

</style>
