<template>
  <div>
    this is demo

    <chech-box-ary-input
        v-for="(item, index) in Array.from(Array(10).keys())"
        :key="`item-check-${index}`"
        :value="item"
        v-bind="{
          localValue
        }"
        @change="change"
        @checkedChange="checkedChange"
      >
        {{ item }}
      </chech-box-ary-input>
      <CheckBox />

      --
      <div class="container">
        文字左列
        <div class="w-100 bg-primary">test rwd</div>
      </div>
      <div class="v1-container">
        文字左列
        <div class="w-100 bg-primary">test rwd</div>
        <p>這個框架設計</p>
        <p>你看到 1320, 在玩的東西就是左右的 p-3 的重疊 container 原理</p>
        <img width="400" src="@/assets/rwd.png" />
      </div>

  </div>
</template>

<script>
import {
  ChechBoxAryInput,
  CheckBox
} from "vue2-common";
export default {
  name: 'Demo',
  components: {
    ChechBoxAryInput,
    CheckBox
  },
  data() {
    return {
      localValue : [1,2,3,4]
    }
  },
  mounted: function () {
  },
  methods: {
    change() {},
    checkedChange() {
      console.log("checkedChange")
    },
  }
}
</script>
