<cn>
#### 顶部导航
水平的顶部导航菜单。
</cn>

```vue
<template>
  <div>
    <Menu mode="horizontal" v-model="current">
      <MenuItem key="1" icon="mail">Navigation One</MenuItem>
      <MenuItem key="2" icon="bar-chart" disabled>Navigation Two</MenuItem>
      <SubMenu key="3" icon="settings" title="Navigation - Submenu">
          <MenuItem key="3-1">Option 1</MenuItem>
          <MenuItem key="3-2">Option 2</MenuItem>
          <MenuItem key="3-3">Option 1</MenuItem>
          <MenuItem key="3-4">Option 2</MenuItem>
          <SubMenu key="3-5" icon="settings" title="Submenu">
            <MenuItem key="3-5-1">Option 1</MenuItem>
            <MenuItem key="3-5-2">Option 2</MenuItem>
            <MenuItem key="3-5-3">Option 1</MenuItem>
            <MenuItem key="3-5-4">Option 2</MenuItem>
          </SubMenu>
      </SubMenu>
      <MenuItem key="4">
      <a href="https://k-ui.cn" target="_blank">Navigation -Link</a>
      </MenuItem>
    </Menu>
  </div>
</template>
<script> 
export default {
  data() {
    return {
      current: ['1']
    }
  },
}
</script> 
```
