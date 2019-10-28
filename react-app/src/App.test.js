import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import App from './App';

it('Correctly displays initial message', () => {
  const { getByText } = render(<App />);
  const element = getByText('Click the button below to log in')
  expect(element).toBeInTheDocument();
});

it('Displays login button', () => {
  const { getByText } = render(<App />);
  expect(getByText('Login')).toBeInTheDocument();
});

it('Displays enabled login button', () => {
  const { getByText } = render(<App />);
  expect(getByText('Login')).toBeEnabled();
});

it('Disables login button after clicking it', () => {
  const { getByText } = render(<App />);
  const loginButton = getByText('Login');
  fireEvent.click(loginButton);
  expect(loginButton).toBeDisabled();
});

it('Shows "welcome" message after loggin in ', async () => {
  const { container, getByText, getByTestId } = render(<App />);
  const loginButton = getByText('Login');
  fireEvent.click(loginButton);
  const welcomeMessageElement = await waitForElement(() => getByTestId('welcome-message'), { container });
  expect(welcomeMessageElement).toBeInTheDocument();
  expect(welcomeMessageElement.textContent).toBe('Welcome');
});