import Vue from 'vue'
import {
  Message,
  Button,
  FormItem,
  Form,
  Input,
  Card,
  Checkbox
} from 'element-ui'

Vue.use(Button)
Vue.use(FormItem)
Vue.use(Form)
Vue.use(Input)
Vue.use(Card)
Vue.use(Checkbox)

Vue.prototype.$message = Message
console.log(Vue.prototype.$message)
