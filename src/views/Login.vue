<template>
  <div class="Login">
    <h1>Login Page</h1>
    <div id="app">
  <v-app id="inspire">
    <v-form>
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="6"
         >
         <v-text-field v-model="user"
            label=" Username"
            @keyup.enter="login()"
            outlined
            ></v-text-field>
            </v-col>
  
         <v-col
            cols="12"
            md="6"
          >
            <v-text-field v-model="password"
              @keyup.enter="login()"
              label="Password"
              outlined
            ></v-text-field>
          
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    
      <div id="app">
      <v-app id="inspire">
      <div class="text-center">
      <v-btn to="/home">Login</v-btn>
      </div>
    </v-app>
   </div>
  </v-app>
 </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      userName: undefined,
    }
    
  },
  methods: {
    login: function(){
if(this.user == "Ívar yfirlögga" && this.password == "MoreSuperPassword1") 
{
 alert("welcome admin");
}
 if(this.user == "Lárus lögga" && this.password == "SuperPassword1") {
   this.msg = "Welcome basic user";
 
}else  {
  this.msg = 'invalid password'
}
    },
    auth() {
      this.$store.commit('SET_USER_NAME',{ user: this.userName});
      this.$router.push({name: 'admin'});
    }

  }
}
</script>