<template>
  <div>
    <group>
      <cell title="vue" value="cool"></cell>
    </group>
  </div>
</template>

<script>
// 不推荐的方式，会打包所有vux模块
import { Group, Cell } from 'vux'


export default {
  components: {
    Group,
    Cell
  }
}
</script>

<style>
@import '~vux/dist/vux.css';
</style>