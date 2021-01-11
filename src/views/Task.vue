<template>
  <div class= "task">
      <div class="row">
          <div class="col-8">
<ul>
      <li v-for= "(task, index) in lists" :key="task.id">
          {{index}} - {{tasks.name}}
      </li>
  </ul>
          </div>
      </div>
  </div>
</template>

<script>
export default {
name: 'Task',
props: {
    tasks: []
},
data: function () {
    return {

    }
},
methods: {

}

}
</script>

<style>

</style>