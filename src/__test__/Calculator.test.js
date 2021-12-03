/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Calculator from '../components/Calculator';
import '@testing-library/jest-dom';

describe('Test Calculator Components', () => {
  it('Should render without error', () => {
    const divElement = document.createElement('div');
    ReactDOM.render(<Calculator />, divElement);
  });

  it('Should render correctly', () => {
    const { getByTestId } = render(<Calculator />);
    expect(getByTestId('mycalc')).toHaveTextContent('Let`s do some math');
  });

  it('Should match snapshot', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});