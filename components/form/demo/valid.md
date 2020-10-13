<cn>
#### 表单验证
在防止用户犯错的前提下，尽可能让用户更早地发现并纠正错误。
</cn>

```vue
<template>
  <div style="width:600px;">
   <Form :label-width="256" :model="form" :rules="rules" ref="form">
    <FormItem label="E-mail" prop="email">
      <Input v-model="form.email" clearable />
    </FormItem>
    <FormItem label="Password" prop="password">
      <Input v-model="form.password" type="password"/>
    </FormItem>
    <FormItem label="Confirm Password" prop="repassword">
      <Input v-model="form.repassword" type="password"/>
    </FormItem>
    <FormItem label="Phone Number" prop="phone">
      <Input v-model="form.phone" />
    </FormItem>
    <FormItem label="Captcha" prop="captcha">
      <Input v-model="form.captcha">
        <template slot="suffix">
          <span v-if="time==60" @click="sendCode">获取验证码</span>
          <span v-else>{{time}}(s)</span>
        </template>
      </Input>
    </FormItem>
    <FormItem label="Country">
      <Row :gutter="8" type="flex">
        <Col :span="12">
          <FormItem prop="country">
            <Select v-model="form.country" clearable>
              <Option value="0" label="China" />
              <Option value="1" label="Russia" />
            </Select>
          </FormItem>
        </Col>
        <Col :span="12">
          <FormItem prop="city">
            <Select v-model="form.city" clearable>
              <Option value="0" label="Shanghai" />
              <Option value="1" label="Wuhan" />
              <Option value="2" label="Hangzhou" />
            </Select>
          </FormItem>
        </Col>
      </Row>
    </FormItem>
    <FormItem label="Gender" prop="gender">
      <RadioGroup v-model="form.gender">
        <Radio value="0" label="Girl" />
        <Radio value="1" label="Boy" />
      </RadioGroup>
    </FormItem>
    <FormItem label="Birthday" prop="birthday">
      <DatePicker v-model="form.birthday" clearable/>
    </FormItem>
    <FormItem label="Hobby" prop="hobby">
      <CheckboxGroup v-model="form.hobby">
        <Checkbox value="0" label="Football" />
        <Checkbox value="1" label="Music" />
        <Checkbox value="2" label="Photograph" />
        <Checkbox value="3" label="Tennis" />
      </CheckboxGroup>
    </FormItem>
    <FormItem label="Hardcore">
     <Switch true-text="Yes" false-text="No" v-model="form.hardcore"/>
    </FormItem>
    <FormItem label="Other" prop="other">
      <TextArea placeholder="最多只能输入10个字符" v-model="form.other"/>
    </FormItem>
     <FormItem prop="readme">
      <Checkbox v-model="form.readme">我已阅读 <a>服务条款</a> </Checkbox>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="submit">Submit</Button>
      <Button style="margin-left: 10px" @click="reset">Reset</Button>
    </FormItem>
    </Form>
  </div>
</template>
<script>
export default{
  data(){
    var validatePass =(rule,value,callback)=>{
      if(value!==this.form.password){
        return  callback(new Error('两次密码不一致'))
      }
      callback()
    };
    var validateReadme = (rule,value,callback)=>{
      if(value!==true){
        return  callback(new Error('请阅读服务条款'))
      }
      callback()
    };
    return {
      time:60,
      form: {
        email:'',
        password:'',
        repassword:'',
        phone:'',
        captcha:'',
        gender:'',
        birthday:'',
        country:'',
        city:'',
        hobby:[],
        hardcore:'',
        other:'',
        readme:false
      },
      rules:{
        email:[
          { type: 'mail', message: '请输入有效的电子邮箱'},
          { required: true, message: '请输入电子邮箱' },
        ],
        password:[
          { min: 8, max:20 , message: '密码长度请控制在8-20位之间', trigger:'blur'},
          { required: true, message: '请输入密码'},
        ],
        repassword:[
          { min: 8, max:20 , message: '密码长度请控制在8-20位之间', trigger:'blur'},
          { validator:validatePass },
          { required: true, message: '请重复输入密码'},
        ],
        phone:[
          { type: 'mobile', message: '请输入正确的手机号码'},
          { required: true, message: '请输入手机号'},
        ],
        birthday:[
          { required: true, message: '请选择出生日期'},
        ],
        country:[
          { required: true, message: '请选择国家'},
        ],
        city:[
          { required: true, message: '请选择城市'},
        ],
        captcha:[
          { type: 'number', message: '验证码为数字'},
          { required: true, message: '请输入验证码'},
        ],
        gender:[
          { required: true, message: '请选择性别'},
        ],
        readme:[
          { validator: validateReadme },
        ],
        hobby:[
          { required: true, message: '请选择爱好'},
          { max:3, message: '最多只能选择3个爱好'},
        ],
        other:[
          { required: true, message: '请填写其他信息'},
          { max:10, message: '最多只能输入10个字符'},
        ]

      }
    }
  },
  methods:{
    sendCode(){
      this.time = 59
      this.$Message.success("验证码发送成功，请注意查收");
      clearInterval(this.timer)
      this.timer = setInterval(e=>{
          if(this.time < 1){
            clearInterval(this.timer)
            this.time = 60
          }else{
            this.time--
          }
      },1000)
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