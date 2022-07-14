import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import Button, { type ButtonProps, ButtonSize, ButtonType } from "./button";

const defaultProps = {
  onClick: jest.fn()
}

const testProps: ButtonProps = {
  btnType: ButtonType.Primary,
  size: ButtonSize.Large,
  className: 'btn-test'
}

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn()
}

describe('test button component', ()=>{
  it('should render the correct default button', () => {
    render(<Button {...defaultProps}>default</Button>);
    const element = screen.getByText('default') as HTMLButtonElement;;
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element.disabled).toBeFalsy()
    expect(element).toHaveClass('btn btn-default')
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })
  it('should render the correct component based on different props', () => {
    render(<Button {...testProps}>props</Button>);
    const element = screen.getByText('props');
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn-primary btn-lg btn-test')
  })
  it('should render a link when btnType equals link and href is provided', () => {
    render(<Button btnType={ButtonType.Link} href="https://www.baidu.com">link</Button>);
    const element = screen.getByText('link');
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass('btn btn-link')
  })
  it('should render disabled button when disabled set to true', () => {
    render(<Button {...disabledProps}>disabled</Button>);
    const element = screen.getByText('disabled') as HTMLButtonElement;
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element.disabled).toBeTruthy()
    fireEvent.click(element)
    expect(defaultProps.onClick).not.toHaveBeenCalled()
  })
})