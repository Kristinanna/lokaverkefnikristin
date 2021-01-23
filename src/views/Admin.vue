/<template>
<div>
  <h1>Admin portal</h1>
  <h2> hi mr {{adminName}}, you are welcome</h2>
</div>
</template>

<script>
export default {
    
computed: {
   adminName() {
    return this.$store.getters.userName
   }
}
}
</script>

<style>

</style>