<template>
  <div>
    <input v-model="name" placeholder="teacherList……">
    <button v-on:click="jump1()">userDetail</button>
    <button v-on:click="jump2()">userList</button>
  </div>
  <!--<form :model="queryParam" class="gab-form gab-form&#45;&#45;inline">

      <input v-model="queryParam.name" placeholder="模型名称"></input>

  </form>-->

  <!--<el-table :data="tableData">
    <el-table-column prop="name" label="教师名称"></el-table-column>
    <el-table-column prop="mainTable" label="主表"></el-table-column>
    <el-table-column prop="creatorName" label="创建者"></el-table-column>
  </el-table>-->
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      name: '',
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
  methods: {
    jump1 () {
      this.$router.push('./userDetail')
    },
    jump2 () {
      this.$router.push('./userList')
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
