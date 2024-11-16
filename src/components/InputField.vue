<script>
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import { defineEmits } from 'vue';

export default {
  props: {
    id: String,
    name: String,
    type: String,
    placeholder: String,
    size: String,
    style: String,
    label: String,
    help: String,
    required: Boolean,
    error: Boolean,
    customClass: String,
    modelValue: String,
    disabled: Boolean
  },
  components: {
    InputText,
    FloatLabel
  },
  methods: {
    updateValue(value) {
      this.$emit('update:modelValue', value);
    }
  },
  setup(props) {
    const emit = defineEmits(['update:modelValue']);
  }
};
</script>
<template>
  <FloatLabel class="w-full">
    <label for="email" class="text-blue-gray-60">{{ label }}</label>
    <InputText
      :type="type"
      :name="name"
      :id="id"
      :disabled="disabled"
      :placeholder="placeholder ?? ''"
      :size="size"
      :help="help"
      :required="required"
      :class="`input-default w-full ${customClass} ${error ? 'text-red-bright' : ''}`"
      :value="modelValue"
      @input="updateValue($event.target.value)"
    />
    <small class="text-blue-gray-60" :id="id + 'help'">{{ help }}</small>
  </FloatLabel>
</template>
