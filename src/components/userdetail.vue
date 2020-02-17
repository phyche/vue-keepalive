<template>
  <div>
    <input v-model="name" placeholder="userDetail……">
    <button v-on:click="jump1()">userList</button>
    <button v-on:click="jump2()">teacherList</button>
  </div>
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
      this.$router.push('./userList')
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
