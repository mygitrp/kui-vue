<cn>
#### 基础用法
最简单的下拉菜单。
</cn>

```vue
<template>
  <Dropdown>
    <a href="#">
      滑动展开 <Icon type="chevron-down" />
    </a>
    <Menu slot="content">
      <MenuItem>
        <a href="javascript:;">1st menu item</a>
      </MenuItem>
      <MenuItem>
        <a href="javascript:;">2nd menu item</a>
      </MenuItem>
      <MenuItem>
        <a href="javascript:;">3rd menu item</a>
      </MenuItem>
    </Menu>
  </Dropdown>
  <Dropdown show-placement-arrow trigger="click" placement="bottom">
    <Button theme="light">
      下拉箭头 <Icon type="chevron-down" />
    </Button>
    <Menu slot="content">
      <MenuItem>
        <a href="javascript:;">1st menu item</a>
      </MenuItem>
      <MenuItem>
        <a href="javascript:;">2nd menu item</a>
      </MenuItem>
      <MenuItem>
        <a href="javascript:;">3rd menu item</a>
      </MenuItem>
    </Menu>
  </Dropdown>

  <Dropdown trigger="click" >
    <Button theme="light">
      Click me <Icon type="chevron-down" />
    </Button>
    <Menu slot="content">
      <MenuItem>
        <a href="javascript:;">1st menu item</a>
      </MenuItem>
      <MenuItem>
        <a href="javascript:;">2nd menu item</a>
      </MenuItem>
      <MenuItem>
        <a href="javascript:;">3rd menu item</a>
      </MenuItem>
    </Menu>
  </Dropdown>
</template>

```