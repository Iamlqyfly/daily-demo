<template>
    <div class="doodle-list">
        <el-row :span="24">
            <el-col class="row-bottom" shadow="hover" :span="7" v-for="(item, index) in frontmatter.items" :key="item.id" :offset="1">
                <el-card>
                    <img src="item.img" class="image">
                    <div style="padding: 14px;">
                        <span>{{item.desc}}</span>
                        <div class="bottom clearfix">
                            <time class="time">{{ currentDate }}</time>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>  
</template>

<script>
export default {
  name: "DoodleList",
  data() {
    return {};
  },
  computed: {
    frontmatter() {
      return this.$page.frontmatter;
    },
    currentDate() {
      let timeStamp = new Date();
      return timeStamp
        .toISOString()
        .slice(0, 19)
        .replace("T", " ")
        .replace(".", ":");
    }
  },
  mounted() {}
};
</script>

<style>
.row-bottom {
   padding-bottom: 16px;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>
