import { hasProp } from '../_tool/utils'
import Icon from '../icon'
export default {
  name: "Checkbox",
  props: {
    value: [String, Number, Boolean],
    disabled: Boolean,
    label: { type: [String, Number] },
    indeterminate: Boolean,
    checked: [Boolean, Number]
  },
  model: {
    prop: 'checked',
    // event: 'change'
  },
  inject: {
    FormItem: { default: null },
    groupContext: { default: null },
  },
  data() {
    const checked = hasProp(this, 'checked') ? this.checked : (this.checked === true && !this.indeterminate)
    return {
      isChecked: checked,
    }
  },
  watch: {
    checked(checked) {
      // this.$emit("input", checked);
      // this.$emit("change", { target: { checked } });
    }
  },
  methods: {
    change(e) {
      let { disabled, value, $slots, label, groupContext } = this
      if (disabled) {
        return false;
      }
      const checked = e.target.checked;
      this.isChecked = checked;
      if (groupContext) {
        label = label || $slots.default.text
        this.groupContext.change({ label, value })
      } else {
        this.$emit("input", checked);
        this.$emit("change", e);
        this.FormItem && this.FormItem.testValue(checked)
      }
    }
  },
  render() {
    let { disabled, change, $slots, label, groupContext, value, indeterminate, checked, isChecked } = this

    if (groupContext) {
      checked = groupContext.value.indexOf(value) !== -1
      disabled = disabled || groupContext.disabled
    } else {
      if (!hasProp(this, 'checked')) {
        checked = isChecked
      }
    }
    // console.log(checked)
    const wpclasses = ["k-checkbox-wrapper", { ["k-checkbox-disabled"]: disabled }];

    const classes = [
      "k-checkbox",
      {
        ["k-checkbox-checked"]: checked && !indeterminate,
        ["k-checkbox-indeterminate"]: indeterminate
      }
    ];
    let inner = checked ? <Icon type="ios-checkmark" /> : null
    const labelNode = label || $slots.default
    return (
      <label class={wpclasses}>
        <span class={classes}>
          <input type="checkbox" class="k-checkbox-input" checked={checked} disabled={disabled} onChange={change} />
          <span class="k-checkbox-inner">{inner}</span>
        </span>
        {labelNode ? <span class="k-checkbox-label">{labelNode}</span> : null}
      </label>
    )
  }
}