<template>
  <div class="contact-moudle">
    <a v-for="item in contacts"
      :href="item.href" :key="item.type"
      class="link-item"
      target="_blank" rel="noreferrer noopener">
      {{ item.desc }}
      <!-- 
        当你使用 target='_blank' 打开一个新的标签页时，新页面的 window 对象上有一个属性 opener，
        它指向的是前一个页面的 window 对象，
        因此，后一个页面就获得了前一个页面的控制权
          在老的浏览器中，可以使用 rel=noreferrer 禁用HTTP头部的Referer属性
          https://juejin.im/post/5950f387f265da6c44072d6c
       -->
    </a>
  </div>
</template>

<script>
export default {
  name: "Contact",

  computed: {
    contacts() {
      return this.$page.frontmatter.contacts;
    }
  },

  mounted() {},

  methods: {}
};
</script>

<style lang="stylus">
.contact-moudle
  margin-top 1rem
  text-align center
  .link-item
    display inline-block
    min-width: 2.5rem
    background-color #ffffff
    border 1px solid #ebeef5
    box-shadow 0 2px 12px 0 rgba(0,0,0,.1)
    padding .6rem 1rem
    margin .5rem 1rem
    border-radius 1.5rem
</style>
