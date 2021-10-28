<template>
  <div>
    <div class="options-container">
      <div
        class="options-checkboxes"
        v-for="(option, index) in options"
        :key="index">
        <label
          :for="'options' + index"
          class="option-label"
          :id="'selected-label' + index"
          @click="chooseOption(index)"
        >
          <span class="option-icon">
            <i :class="option.icon"></i>
          </span>
          <span class="option-name">
            {{ option.name | capitalize }}
          </span>
          <span class="option-price-ribbon"> {{ option.price }}$ </span>
        </label>
        
        <input
          v-bind:checked="checked"
          v-model="optionInfo"
          v-on:change="$emit('take-option', optionInfo)"
          type="checkbox"
          :value="[option.price,option.name,option.icon]"
          :id="'options' + index"
          class="option-checkbox"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { filters } from "@/mixins/global.js";
export default {
  name: "OptionsBox",
  props: {
    options: Array,
  },
  data() {
    return {
      optionInfo: [],
      checked: false,
    };
  },
  mixins: [filters],
  methods: {
    chooseOption(index) {
      let label = document.getElementById("selected-label" + index);
      label.classList.toggle("selected-button");
      this.checked = !this.checked
    },
  },
};
</script>

<style>
.options-container {
  width: 100%;
  height: 275px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 2rem;
}
.options-checkboxes {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 150px;
  height: 150px;
}
.option-checkbox {
  width: 100px;
  height: 100px;
}

.option-label {
  width: 150px;
  height: 150px;
  border-radius: 10px;
  background-color: white;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  color: #616161;
  transition: 0.3s ease;
  border: 3px solid transparent;
  position: absolute;
}
.option-label:hover {
  color: #03a9f4;
  border: 3px solid #03a9f4;
}
.selected-button {
  color: #03a9f4;
  border: 3px solid #03a9f4;
}
.option-icon {
  font-size: 1.3rem;
}
.option-price-ribbon {
  width: 100px;
  height: 25px;
  background-color: #03a9f4;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1rem;
  position: absolute;
  top: 10px;
  right: -30px;
  transform: rotate(45deg);
}
</style>