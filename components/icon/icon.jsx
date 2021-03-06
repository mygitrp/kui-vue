import icons from 'kui-icons'
// import icons from './lib/kui-icons'

export default {
  name: "Icon",
  props: {
    type: String,
    size: [String, Number],
    color: String,
    spin: Boolean,
  },

  render() {
    const { $listeners, click, type, spin, color, size } = this
    const classes = ['k-icon', { 'k-load-loop': spin }];
    const styles = {
      fontSize: `${size}px`,
      color
    };

    const props = {
      style: styles,
      class: classes,
      on: {
        ...$listeners,
        click: e => this.$emit('click', e)
      }
    }
    const pathNode = (icons[type] || []).map(i => {
      return <path d={i.d} style={i.s ? i.s : 'fill:currentColor;'} />
    })
    return (<i {...props}><svg id={type} viewBox='0 0 512 512' width="1em" height="1em">{pathNode}</svg>{this.$slots.default}</i>)
  }
};
