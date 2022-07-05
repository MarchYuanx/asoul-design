import React from 'react';
import Button, { ButtonType, ButtonSize } from '../components/Button/button';

function ButtonDemo() {
  const link = "https://www.baidu.com"
  return (
    <div>
      <br/>
        <Button btnType={ButtonType.Default}>defult button</Button>
        <Button btnType={ButtonType.Primary}>primary button</Button>
        <Button btnType={ButtonType.Danger}>danger button</Button>
        <Button btnType={ButtonType.Link} href={link}>link button</Button>
        <Button disabled>disabled button</Button>
      <br/>
      <br/>
        <Button btnType={ButtonType.Default} size={ButtonSize.Large}>defult button</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>primary button</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>danger button</Button>
        <Button btnType={ButtonType.Link} size={ButtonSize.Large} href={link}>link button</Button>
        <Button disabled size={ButtonSize.Large}>disabled button</Button>
      <br/>
      <br/>
        <Button btnType={ButtonType.Default} size={ButtonSize.Small}>defult button</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>primary button</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>danger button</Button>
        <Button btnType={ButtonType.Link} size={ButtonSize.Small} href={link}>link button</Button>
        <Button disabled size={ButtonSize.Small}>disabled button</Button>
      <br/>
    </div>
  );
}

export default ButtonDemo;