<cn>
#### 动态校验规则
根据不同情况执行不同的校验规则。
</cn>

```vue
<template>
  <div style="width:600px;">
   <Form :label-width="256" :model="form" ref="form">
    <FormItem 
      label="姓名" 
      prop="fullname" 
      :rules="[ 
          { required: true, message: '请输入姓名' },
          { message: '姓名只能是中文', pattern: /^[\u4e00-\u9fa5]+$/ },
        ]"
    >
      <Input v-model="form.fullname" clearable />
    </FormItem>
    <FormItem 
      :label="'网址' + i" 
      :prop="'webs.' + i + '.value'" 
      v-for="(item,i) in form.webs" 
      :key="item.key"
      :rules="{required: true, message: '网址不能为空'}"
    >
      <Input v-model="item.value" style="width:230px"/>
      <Button @click="e=>remove(item.key)" v-if="i>0">Delete</Button>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="submit">Submit</Button>
      <Button @click="add">Add</Button>
      <Button @click="reset">Reset</Button>
    </FormItem>
    </Form>
  </div>
</template>
<script>
export default{
  data(){
    var validateIDNumber = (rule,value,callback)=>{
      if(value && !/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value)){
        return  callback(new Error('请输入正确的身份证号码'))
      }
      callback()
    };
    return {
      count:1,
      form: {
        fullname:'',
        webs:[
          { value:'', key:'a1' }
        ] ,
      },
    }
  },
  methods:{
    add(){
      this.count+=1
      this.form.webs.push({value:'', key:'a'+this.count})
    },
    remove(key){
      let item = this.form.webs.filter(x=>x.key==key)[0]
      let index = this.form.webs.indexOf(item)
      this.form.webs.splice(index, 1)
    },
    submit(){
      this.$refs.form.validate(valid=>{
        this.$Message[valid?'success':'error'](valid?'success':'faild')
      })
    },
    reset(){
      this.$refs.form.reset()
    }
  }
}
</script>
```