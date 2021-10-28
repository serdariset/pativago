<template>
  <div>
    
      <form class="adultForm-form">
        <span class="adult-name-lastname">{{$v.user.name.$model}} {{$v.user.lastname.$model}}  </span>
        
        <input
          placeholder="Name"
          type="text"
          class="adultForm-input"
          id="name"
          v-model="$v.user.name.$model"
          :class="status($v.user.name)"
        />

        <input
          placeholder="Last Name"
          type="text"
          id="lastName"
          class="adultForm-input"
          v-model="$v.user.lastname.$model"
          :class="status($v.user.lastname)"
        />

        <input
          placeholder="E-mail"
          type="email"
          id="email"
          class="adultForm-input"
          v-model="$v.user.email.$model"
          :class="status($v.user.email)"
        />

        <input
          placeholder="0 (5__) ___ __ __"
          type="text"
          id="phone"
          class="adultForm-input"
          v-model="$v.user.phone.$model"
          :class="status($v.user.phone)"
        />

        <input
          placeholder="Age"
          type="text"
          id="age"
          class="adultForm-input"
          v-model="$v.user.age.$model"
          :class="status($v.user.age)"
        />

        <input
          placeholder="Hes Code"
          type="text"
          id="hesCode"
          class="adultForm-input"
          v-model="$v.user.hes.$model"
          :class="status($v.user.hes)"
        />

        <input
          placeholder="Citizenship Number"
          type="text"
          id="citizenshipNumber"
          class="adultForm-input"
          v-model="$v.user.citizenship.$model"
          :class="status($v.user.citizenship)"
        />
      </form>
    </div>

</template>

<script>
import { vuelidate } from "@/mixins/global.js";
export default {
  name: "AdultForm",

  data() {
    return {
      user: {
        name: "",
        lastname: "",
        email: "",
        phone: null,
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

.adult-name-lastname{
  font-family: "Poppins", sans-serif;
  color: #616161;
  text-transform: capitalize;
  position: absolute;
  top: 10px;

}

.adultForm-form {
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
  padding-top: 2rem;
  
  

}
.adultForm-input {
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