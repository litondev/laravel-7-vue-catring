import Vue from "vue";

import { 
  ValidationProvider,
  ValidationObserver, 
  extend
} from 'vee-validate';

import { 
  confirmed,
  size,
  mimes,
  image,
  alpha,
  required,
  email,
  integer,
  max,
  min,   
} from 'vee-validate/dist/rules';

extend('size',{
  ...size,
  message : '{_field_} harus kurang dari 10mb'
});

extend('image',{
  ...image,
  message : '{_field_} harus gambar'
});

extend('mimes',{
  ...mimes,
  message : '{_field_} harus file yang valid'
});

extend('confirmed',{
  ...confirmed,
  message: '{_field_} dengan password konfirmasi harus sama'
});

extend('required', {
  ...required,
  message: '{_field_} harus diisi'
});

extend('email',{
  ...email,
  message: 'email tidak valid'
});

extend('alpha',{
	...alpha,
	message: "{_field_} harus huruf",
});

extend('integer',{
  ...integer,
  message: "{_field_} harus angka"
});

extend('min',{
 ...min,
  params : ['length'],
  message:  "{_field_} harus lebih dari {length} digit"  
});

extend('max',{
  ...max,
  params : ["length"],
  message: "{_field_} harus kurang dari {length} digit"
});

Vue.component("ValidationProvider",ValidationProvider);
Vue.component("ValidationObserver",ValidationObserver);