import { fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';

import Input from '../../components/Input';

jest.mock('@unform/core', () => {
  return {
    useField() {
      return {
        fieldName: 'email',
        defaultValue: '',
        error: '',
        registerField: jest.fn(),
      };
    },
  };
});

describe('Input components', () => {
  it('should be able to render an input', () => {
    const { getByPlaceholderText } = render(
      <Input name="email" placeholder="E-mail" />,
    );

    expect(getByPlaceholderText('E-mail')).toBeTruthy();
  });

  it('should render highlight on input focus', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Input name="email" placeholder="E-mail" />,
    );

    const inputElement = getByPlaceholderText('E-mail');
    const container_element = getByTestId('input-container');

    fireEvent.focus(inputElement);

    await waitFor(() => {
      expect(container_element).toHaveStyle('border-color: #ff9000;');
      expect(container_element).toHaveStyle('color: #ff9000;');
    });

    fireEvent.blur(inputElement);

    await waitFor(() => {
      expect(container_element).not.toHaveStyle('border-color: #ff9000;');
      expect(container_element).not.toHaveStyle('color: #ff9000;');
    });
  });

  it('should keep input border highlight when input filled', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Input name="email" placeholder="E-mail" />,
    );

    const inputElement = getByPlaceholderText('E-mail');
    const container_element = getByTestId('input-container');

    fireEvent.change(inputElement, {
      target: {
        value: 'johndoe@example.com.br',
      },
    });

    fireEvent.blur(inputElement);

    await waitFor(() => {
      expect(container_element).toHaveStyle('color: #ff9000;');
    });
  });
});
