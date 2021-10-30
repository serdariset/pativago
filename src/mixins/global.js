export const filters = {
  filters: {
    capitalize: (value) => {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    //Mahmut İset
  },
};
import {
  minLength,
  required,
  email,
  numeric,
  maxLength,
} from "vuelidate/lib/validators";

export const vuelidate = {
  validations: {
    user: {
      name: {
        required,
        minLength: minLength(3),
      },
      lastname: {
        required,
        minLength: minLength(3),
      },
      email: {
        required,
        email,
      },
      phone: {
        required,
        numeric,
        minLength: minLength(11),
      },
      age: {
        required,
        numeric,
      },
      hes: {
        required,
        minLength: minLength(10),
      },
      citizenship: {
        required,
        minLength: minLength(11),
        numeric,
      },
    },
  },
};

export const payment = {
  validations: {
    paymentCard: {
      fullname: {
        required,
        minLength: minLength(3),
      },
      cardNumber: {
        required,
        minLength: minLength(16),
        maxLength: maxLength(16),
        numeric,
      },
      cardMonth: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(2),
        numeric,
      },
      cardYear: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(2),
        numeric,
      },
      cardSecure: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(3),
        numeric,
      },
    },
  },
};
