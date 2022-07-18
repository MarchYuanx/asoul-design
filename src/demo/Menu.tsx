import React from 'react';
import Menu from '../components/Menu/menu';
import MenuItem from '../components/Menu/menuItem';

function MenuDemo() {
  return (
    <>
      <Menu defaultIndex={0} onSelect={console.log}>
        <MenuItem index={0}>Ava</MenuItem>
        <MenuItem index={1}>Bella</MenuItem>
        <MenuItem index={2} disabled>Carol</MenuItem>
        <MenuItem index={3}>Diana</MenuItem>
        <MenuItem index={4}>Eileen</MenuItem>
      </Menu>
      <Menu defaultIndex={0} onSelect={console.log} mode="vertical">
        <MenuItem index={0}>Ava</MenuItem>
        <MenuItem index={1}>Bella</MenuItem>
        <MenuItem index={2} disabled>Carol</MenuItem>
        <MenuItem index={3}>Diana</MenuItem>
        <MenuItem index={4}>Eileen</MenuItem>
      </Menu>
    </>



  );
}

export default MenuDemo;