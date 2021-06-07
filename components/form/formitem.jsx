import { Row, Col } from '../grid'
import cloneVNode from '../_tool/clone';
import { getChild } from '../_tool/utils'

export default {
  name: "FormItem",
  props: {
    label: String,
    prop: String,
    labelCol: Object,
    wrapperCol: Object,
    rules: [Array, Object]
  },
  provide() {
    return {
      FormItem: this
    }
  },
  inject: {
    FormItem: { default: null },
    Form: { default: () => { } },
    collectFormItems: { default: () => { } }
  },
  data() {
    return {
      valid: true,
      itemValue: null,
      errorMessage: '',
    };
  },
  beforeDestroy() {
    this.collectFormItems(this, 'delete')
  },
  created() {
    //valid prop
    if (this.prop) {
      this.collectFormItems(this, 'add')
    }
  },

  render() {
    let { label, Form, prop, valid, wrapperCol = {}, labelCol = {} } = this
    const rules = this.rules || (Form.rules || {})[prop] || []
    const required = rules.constructor === Object ? rules.required : rules.filter(r => r.required).length > 0

    const classes = [
      "k-form-item",
      {
        "k-form-item-required": required,
        "k-form-item-error": !valid
      }
    ]
    const labelProp = { props: { ...labelCol } }
    const wrapperProp = { props: { ...wrapperCol } }
    const childs = getChild(this.$slots.default)
    return (
      <Row class={classes} type="flex">
        {
          label ? <Col class="k-form-item-label"  {...labelProp}>
            {label ? <label for={prop}>{label}</label> : null}
          </Col>
            : null
        }
        <Col {...wrapperProp}>
          <div class="k-form-item-content">
            {
              childs.map(child => {
                return cloneVNode(child, { props: { id: prop } })
              })
            }
            <transition name="k-form-item-fade">
              {!valid ? <div class="k-form-item-error-tip">{this.errorMessage}</div> : null}
            </transition>
          </div>
        </Col>
      </Row>
    )
  },
  methods: {
    testValue(value, trigger) {
      this.itemValue = value

      // 正在清理中，这时不进行验证
      if (this.Form.clearing === true) return;
      if (this.prop) {
        const rules = this.rules || (this.Form.rules || {})[this.prop]
        rules && this.validate(rules, trigger)
      }
    },
    reset() {
      if (this.prop) {
        // if (Array.isArray(this.itemValue)) {
        //   // prop.model[prop.key] = []
        //   this.itemValue = []
        // } else {
        //   // prop.model[prop.key] = ''
        //   this.itemValue = ''
        // }
        this.valid = true
      }
    },
    test(rule, trigger = 'change') {
      let { valid, itemValue } = this
      let message = rule.message
      // console.log(rule,valid)

      // todo：
      // if (trigger == 'blur' && rule.trigger !== trigger) {
      //   return;
      // }
      if (rule.required) {
        valid = Array.isArray(itemValue) ? itemValue.length > 0 : (itemValue !== null && itemValue !== undefined && itemValue !== '' && itemValue !== false)
        message = message || 'This field is required'
        // console.log(valid, message)
      } else {
        //valid custom pattern
        if (rule.pattern) {
          valid = rule.pattern.test(itemValue)
        }
        //valid type
        else if (rule.type) {
          switch (rule.type) {
            case 'mail':
              valid = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(itemValue)
              message = message || 'Incorrect email format'
              break;
            case 'mobile':
              valid = /^[1][3,4,5,6,7,8][0-9]{9}$/.test(itemValue)
              message = message || 'Incorrect mobile phone number format'
              break;
            case 'number':
              // valid = typeof itemValue === 'number' && !isNaN(itemValue)
              valid = /^(-?\d+)(\.\d+)?$/.test(itemValue)
              message = message || 'Incorrect number format'
              // let { min, max } = rule
              // if (min !== undefined && min !== null && min !== '') {
              //   valid = itemValue <= min
              // }
              break;
            default:
              break;

          }
          // console.log(valid, prop, message)

        }
        //valid custom validator
        else if (typeof rule.validator === 'function') {
          rule.validator(rule, itemValue, error => {
            // console.log('error',error)
            valid = error === undefined
            if (error) {
              message = error.message
            }
          })
        }
        //valid length (min or max)
        else if (rule.min !== undefined || rule.max !== undefined) {
          const _type = typeof itemValue
          //min
          if (rule.min !== undefined) {
            if (Array.isArray(itemValue)) {
              valid = itemValue.length >= rule.min
            } else if (_type === 'string') {
              valid = itemValue.replace(/[\u0391-\uFFE5]/g, "aa").length >= rule.min
            } else if (_type === 'number') {
              valid = itemValue >= rule.min
            }
          }

          //max
          if (rule.max !== undefined && valid) {
            if (Array.isArray(itemValue)) {
              valid = itemValue.length <= rule.max
            } else if (_type === 'string') {
              valid = itemValue.replace(/[\u0391-\uFFE5]/g, "aa").length <= rule.max
            } else if (_type === 'number') {
              valid = itemValue <= rule.max
            }
          }
          message = message || 'Incorrect length'

        }
      }

      this.errorMessage = message

      this.valid = valid
      // console.log(itemValue, valid, this.prop, message)
      // callback && callback(valid)

      return valid
    },
    validate(rules, trigger) {
      if (rules.constructor === Object) return this.test(rules, trigger)
      // 有 required 排前面
      rules = rules.sort((a, b) => a.required ? -1 : 0)
      for (let i = 0; i < rules.length; i++) {
        let valid = this.test(rules[i], trigger)
        if (!valid) {
          this.valid = valid
          return valid
          // 有一条规则不通过就跳出
          break;
        }
      }
      return this.valid
    }
  }
}