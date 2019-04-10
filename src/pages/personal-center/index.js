import { detail } from '@/api/index'

export default {
  components: {},
  props: {},
  data() {
    return {}
  },
  mounted() {
    detail().then(res => {
      console.log(res)
    })
  },
  computed: {},
  watch: {},
  methods: {}
}
