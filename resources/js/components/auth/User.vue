<template>
  <user-form></user-form>
</template>
<script>
import UserForm from '../form/UserForm';
export default {
    components: {
      UserForm
    },
    mounted(){
        this.$store.dispatch('updateMenu', false);
    },
  }
</script>