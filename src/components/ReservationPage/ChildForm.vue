<template>
  <div>
    
      <form class="childForm-form">
        <span class="child-name-lastname">{{$v.user.name.$model}} {{$v.user.lastname.$model}}  </span>
        
        <input
          placeholder="Name"
          type="text"
          class="childForm-input"
          id="name"
          v-model="$v.user.name.$model"
          :class="status($v.user.name)"
        />

        <input
          placeholder="Last Name"
          type="text"
          id="lastName"
          class="childForm-input"
          v-model="$v.user.lastname.$model"
          :class="status($v.user.lastname)"
        />

        <input
          placeholder="Age"
          type="text"
          id="age"
          class="childForm-input"
          v-model="$v.user.age.$model"
          :class="status($v.user.age)"
        />

        <input
          placeholder="Hes Code"
          type="text"
          id="hesCode"
          class="childForm-input"
          v-model="$v.user.hes.$model"
          :class="status($v.user.hes)"
        />

        <input
          placeholder="Citizenship Number"
          type="text"
          id="citizenshipNumber"
          class="childForm-input"
          v-model="$v.user.citizenship.$model"
          :class="status($v.user.citizenship)"
        />
        
      </form>
      
    </div>

</template>

<script>
import { vuelidate } from "@/mixins/global.js";
export default {
  name: "ChildForm",

  data() {
    return {
      user: {
        name: "",
        lastname: "",
        age: null,
        hes: "",
        citizenship: null,
      },
    };
  },
  mixins:[vuelidate],
  methods: {
    status(validation) {
      return {
        error: validation.$error,
        dirty: validation.$dirty,
      };
    },
  },
  
};
</script>

<style>
/*Validation Styles*/
.dirty {
  border-color: #5a5;
  background: #efe;
}

.dirty:focus {
  outline-color: #8e8;
}

.error {
  border-color: red;
  background: #fdd;
}

.error:focus {
  outline-color: #f99;
}



.childForm-form {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 1rem;
  width: 230px;
  height: auto;
  border: 2px solid transparent;
  background-color: white;
  border-radius: 10px;
  padding: 1rem;
  margin-right: 1rem;
  position: relative;
  padding-top:2rem;
  
  

}
.child-name-lastname{
  font-family: "Poppins", sans-serif;
  color: #616161;
  text-transform: capitalize;
  position: absolute;
  top: 10px;

}
.childForm-input {
  height: 30px;
  width: 200px;
  outline: none;
  border: none;
  border-radius: 5px;
  color: #616161;
  padding-left: 1rem;
  transition: 0.3s ease;
  border: 2px solid #61616171;
  font-family: "Poppins", sans-serif;
  font-size: 0.7rem;
  margin: 0.5rem;

}


</style>