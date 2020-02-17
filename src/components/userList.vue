<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div>
    <input v-model="name" placeholder="userList……">
    <button v-on:click="jump1()">userDetail</button>
    <button v-on:click="jump2()">teacherList</button>
    <input v-model="name2" placeholder="userList……">
    <!--<el-table :data="tableData">
      <el-table-column prop="name" label="用户名称"></el-table-column>
      <el-table-column prop="mainTable" label="主表"></el-table-column>
      <el-table-column prop="creatorName" label="创建者"></el-table-column>
    </el-table>-->
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      name: '',
      name2: '',
      tableData: [
        {
          name: 'test1',
          mainTable: 'table1',
          creatorName: 'name1'
        },
        {
          name: 'test1',
          mainTable: 'table1',
          creatorName: 'name1'
        },
        {
          name: 'test1',
          mainTable: 'table1',
          creatorName: 'name1'
        }
      ]
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log(2)
    if (from.name === 'userDetail') {
      if (!to.meta.keepAlive) {
        to.meta.keepAlive = true; //当我们进入到C时开启B的缓存
      }
      next()
    } else {
      to.meta.keepAlive = false;
      next(); //当我们前进的不是C时我们让B页面刷新
    }
  },
  created() {
    console.log(1)
    this.init();
  },
  methods: {
    init () {
      this.name2 = 'test111111'
    },
    jump1 () {
      this.$router.push('./userDetail')
    },
    jump2 () {
      this.$router.push('./teacherList')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
