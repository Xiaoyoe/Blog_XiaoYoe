<template>
    <index-blog/>
    <div class="DownIcon">
      <ScrollDownIcon/>
    </div>
</template>

<style>

</style>

<script>

import IndexBlog from '@/components/IndexBlog.vue'
import ScrollDownIcon from '@/components/ScrollDownIcon.vue'

export default {
  name: 'index',
  components: {
    IndexBlog,
    ScrollDownIcon,
  }
}
</script>