/*! kui-vue v2.0.6 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"5VHI":function(e,n,t){"use strict";var r={base:'<Form :label-width="80">\n  <FormItem label="Input">\n    <Input v-model="form.input"></Input>\n  </FormItem>\n  <FormItem label="Select">\n    <Select v-model="form.select">\n      <Option v-for="(x,y) in select" :key="y" :value="x.value">{{x.label}}</Option>\n    </Select>\n  </FormItem>\n  <FormItem label="DatePicker">\n    <DatePicker v-model="form.datepicker"></DatePicker>\n  </FormItem>\n  <FormItem label="Radio">\n    <RadioGroup v-model="form.radio">\n      <Radio label="0">男</Radio>\n      <Radio label="1">女</Radio>\n      <Radio label="2">妖</Radio>\n    </RadioGroup>\n  </FormItem>\n  <FormItem label="Checkbox">\n    <CheckboxGroup v-model="form.checkbox">\n      <Checkbox label="0">男</Checkbox>\n      <Checkbox label="1">女</Checkbox>\n      <Checkbox label="2">妖</Checkbox>\n    </CheckboxGroup>\n  </FormItem>\n  <FormItem label="Switch">\n    <Switch true-text="是" false-text="否"></Switch>\n  </FormItem>\n  <FormItem label="Text">\n    <Input type="textarea" placeholder="情输入..."></Input>\n  </FormItem>\n  <FormItem>\n    <Button type="primary">Submit</Button>\n    <Button style="margin-left: 10px">Cancel</Button>\n  </FormItem>\n</Form>\n<script>\nexport default {\n  data(){\n    return{\n      form: {\n        switch: true,\n        input: "",\n        select: 0,\n        datepicker: "",\n        radio: "1",\n        checkbox: [\'0\']\n      },\n    }\n  }\n}\n<\/script>',invalid:'<Form :label-width="80" ref="form" :model="form" :rules="rules" :labelAlign="labelAlign">\n  <FormItem label="Input" prop="input">\n    <Input v-model="form.input"></Input>\n  </FormItem>\n  <FormItem label="Select">\n    <Row>\n      <Col span="12">\n      <FormItem  prop="province">\n        <Select v-model="form.province" clearable>\n          <Option value="0">北京</Option>\n          <Option value="1">上海</Option>\n          <Option value="2">广州</Option>\n          <Option value="3">深圳</Option>\n        </Select>\n      </FormItem>\n      </Col>\n      <Col span="11" offset="1">\n      <FormItem prop="city">\n        <Select v-model="form.city" clearable>\n          <Option value="0">南山区</Option>\n          <Option value="1">龙华区</Option>\n          <Option value="2">福田区</Option>\n          <Option value="3">宝安区</Option>\n        </Select>   \n      </FormItem>\n      </Col>\n    </Row>\n  </FormItem>\n  <FormItem label="DatePicker" prop="datepicker">\n    <DatePicker v-model="form.datepicker" clearable></DatePicker>\n  </FormItem>\n  <FormItem label="Radio" prop="radio">\n    <RadioGroup v-model="form.radio">\n      <Radio label="0">男</Radio>\n      <Radio label="1">女</Radio>\n      <Radio label="2">妖</Radio>\n    </RadioGroup>\n  </FormItem>\n  <FormItem label="Checkbox" prop="checkbox">\n    <CheckboxGroup v-model="form.checkbox">\n      <Checkbox label="0">男</Checkbox>\n      <Checkbox label="1">女</Checkbox>\n      <Checkbox label="2">妖</Checkbox>\n      <Checkbox label="3">鲛人</Checkbox>\n    </CheckboxGroup>\n  </FormItem>\n  <FormItem label="Text" prop="textarea">\n    <Input type="textarea" placeholder="情输入..." v-model="form.textarea"></Input>\n  </FormItem>\n  <FormItem>\n    <Button type="primary" @click="submitForm(\'form\')">Submit</Button>\n    <Button style="margin-left: 10px" @click="resetForm(\'form\')">Reset</Button>\n  </FormItem>\n</Form>\n<script>\nexport default {\n  data() {\n    return {\n      labelAlign: \'right\',\n      code: code,\n      select: [\n        { label: "男", value: "0" },\n        { label: "女", value: "1" },\n        { label: "妖", value: "2" },\n      ],\n      form: {\n        switch: true,\n        input: "",\n        province:\'\',\n        city:\'\',\n        select: \'\',\n        datepicker: "",\n        radio: "",\n        checkbox: [],\n        textarea: \'\'\n      },\n      rules: {\n        input: [{ required: true, trigger: \'blur\' }],\n        select: [{ required: true, trigger: \'change\' }],\n        province: [{ required: true, trigger: \'change\' }],\n        city: [{ required: true, trigger: \'change\' }],\n        datepicker: [{ required: true, trigger: \'change\' }],\n        radio: [{ required: true, trigger: \'change\' }],\n        checkbox: [{ required: true, trigger: \'change\', min: 2, max: 3 }],\n        textarea: [{ required: true, message: \'必填\', trigger: \'blur\' }, { min: 2, max: 5, message: \'长度为2-5个字符\', trigger: \'blur\' }],\n      },\n    };\n  },\n  methods: {\n    submitForm(name) {\n      console.log(this.$refs[name].model)\n      this.$refs[name].validate(valid => {\n        if (valid) {\n          this.$Message.success(\'验证通过\')\n        } else {\n          this.$Message.error(\'验证失败\')\n        }\n      })\n    },\n    resetForm(name) {\n      this.$refs[name].resetFields()\n    },\n  }\n};\n<\/script>\n',customValid:'<Form :model="customForm" :rules="customRules" labelWidth="80" ref="customForm">\n  <FormItem label="userName" prop="userName">\n    <Input v-model="customForm.userName" />\n  </FormItem>\n  <FormItem label="password" prop="password">\n    <Input v-model="customForm.password" type="password" />\n  </FormItem>\n  <FormItem label="Confrim" prop="rePassword">\n    <Input v-model="customForm.rePassword" type="password" />\n  </FormItem>\n  <FormItem>\n    <Button type="primary" @click="submitForm(\'customForm\')">Submit</Button>\n    <Button style="margin-left: 10px" @click="resetForm(\'customForm\')">Reset</Button>\n  </FormItem>\n</Form>\n<script>\nexport default {\n  data() {\n    const validatePass = (rule, value, callback) => {\n      if (value === \'\') {\n        callback(new Error(\'请填写密码\'))\n      } else {\n        if (this.customForm.rePassword !== "") {\n          this.$refs.customForm.validateField(\'rePassword\')\n        }\n        callback()\n      }\n    };\n    const validateRePass = (rule, value, callback) => {\n      if (value === \'\') {\n        callback(new Error(\'请再次输入密码\'))\n      } else {\n        if (this.customForm.password !== value) {\n          callback(new Error(\'两次密码输入不一致\'))\n        }\n        callback()\n      }\n    };\n    const validateUserName = (rule, value, callback) => {\n      if (value === \'\') {\n        callback(new Error(\'请输入用户名\'))\n      } else {\n        if (value.length < 2 || value.length > 6) {\n          callback(new Error(\'用户名长度为2-6位\'))\n        } else {\n          callback()\n        }\n      }\n    };\n    return {\n      labelAlign: \'right\',\n      select: [\n        { label: "男", value: "0" },\n        { label: "女", value: "1" },\n        { label: "妖", value: "2" },\n      ],\n      customRules: {\n        userName: [{ validator: validateUserName, trigger: \'blur\' }],\n        password: [{ validator: validatePass, trigger: \'blur\' }],\n        rePassword: [{ validator: validateRePass, trigger: \'blur\' }],\n      },\n      customForm: {\n        userName: \'\',\n        password: \'\',\n        rePassword: \'\'\n      },\n    };\n  },\n  methods: {\n    submitForm(name) {\n      console.log(this.$refs[name].model)\n      this.$refs[name].validate(valid => {\n        if (valid) {\n          this.$Message.success(\'验证通过\')\n        } else {\n          this.$Message.error(\'验证失败\')\n        }\n      })\n    },\n    resetForm(name) {\n      this.$refs[name].resetFields()\n    },\n  }\n};\n<\/script>\n'};n.a=r},fVdv:function(e,n,t){"use strict";t.r(n);t("5VHI");var r={data:function(){return{}},methods:{}},o=t("KHd+"),a=Object(o.a)(r,function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[e._m(0),e._v(" "),t("Select",{attrs:{width:"200"}},[t("Option",{attrs:{value:"0"}},[e._v("fdsafs")]),e._v(" "),t("Option",{attrs:{value:"0"}},[e._v("fdsafs")]),e._v(" "),t("Option",{attrs:{value:"0"}},[e._v("fdsafs")]),e._v(" "),t("Option",{attrs:{value:"0"}},[e._v("fdsafs")]),e._v(" "),t("Option",{attrs:{value:"0"}},[e._v("fdsafs")])],1)],1)},[function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticStyle:{width:"700px",height:"600px"}},[n("div",{staticClass:"t1"})])}],!1,null,null,null);n.default=a.exports}}]);