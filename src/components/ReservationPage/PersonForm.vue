<template>
  <div>
    <div class="person-form-container">
      <div class="adult-person-form">
        <span class="form-title">Adult information</span>
        <div class="form-group">
          <form
            class="person-form"
            v-for="(adult, index) in person[0]"
            :key="index"
          >
            <label for="name" class="person-label">Name</label>
            <input type="text" id="name" class="person-input" />

            <label for="lastName" class="person-label">Last Name</label>
            <input type="text" id="lastName" class="person-input" />

            <label for="email" class="person-label">E-mail</label>
            <input type="email" id="email" class="person-input" />

            <label for="name" class="person-label">Phone Number</label>
            <input type="number" id="phone" class="person-input" />

            <label for="name" class="person-label">Age</label>
            <input type="number" id="age" class="person-input" />

            <label for="name" class="person-label">Hes Code</label>
            <input type="text" id="hesCode" class="person-input" />

            <label for="name" class="person-label">Citizenship Number</label>
            <input type="number" id="citizenshipNumber" class="person-input" />
            <label for="gender"></label>
          </form>
        </div>
      </div>
      <div class="adult-person-form" v-show="person[1] > 0">
        <span class="form-title">Children information</span>
        <div class="form-group">
          <form
            class="person-form"
            v-for="(adult, index) in person[1]"
            :key="index"
          >
            <label for="name" class="person-label">Name</label>
            <input type="text" name="name" id="name" class="person-input" />

            <label for="lastName" class="person-label">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              class="person-input"
            />

            <label for="name" class="person-label">Age</label>
            <input type="number" name="age" id="age" class="person-input" />

            <label for="name" class="person-label">Hes Code</label>
            <input
              type="text"
              name="hesCode"
              id="hesCode"
              class="person-input"
            />

            <label for="name" class="person-label">Citizenship Number</label>
            <input
              type="number"
              name="citizenshipNumber"
              id="citizenshipNumber"
              class="person-input"
            />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonForm",
  props: {
    person: Array,
  },
};
</script>

<style>
.person-form-container {
  width: calc(1180px - 2rem);
  height: auto;
  background-color: #cfd8dc;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 4rem;
}
.adult-person-form {
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
}
.form-title {
  font-family: "Poppins", sans-serif;
  color: #616161;
  border-bottom: 3px solid white;
  margin-bottom: 1.5rem;
  width: calc(1180px - 6rem);
  height: 40px;
  font-size: 1.4rem;
  padding-left: 1rem;
}
.form-group {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
}
.person-form {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 240px;
  height: auto;
  border: 2px solid transparent;
  background-color: white;
  border-radius: 10px;
  padding: 1rem;
  margin-right: 1rem;
}
.person-input {
  height: 30px;
  width: 200px;
  outline: none;
  border: none;
  border-radius: 5px;
  color: #616161;
  padding-left: 1rem;
  transition: 0.3s ease;
  border: 2px solid #61616171;
}
.person-input:focus {
  border: 2px solid #03a9f4;
}

.person-label {
  font-family: "Poppins", sans-serif;
  color: #616161;
  font-size: 0.9rem;
  margin-left: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 0.2rem;
}
</style>