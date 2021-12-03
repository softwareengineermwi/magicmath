import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Quote from '../components/Quote';
import '@testing-library/jest-dom';

describe('Test Quote Components', () => {
  it('Should render without error', () => {
    const divElement = document.createElement('div');
    ReactDOM.render(<Quote />, divElement);
  });

  it('Should render correctly', () => {
    const { getByTestId } = render(<Quote />);
    expect(getByTestId('quote')).toHaveTextContent('Mathematics is not about numbers,equations,computations,or algorithms: its about understanding.- William Paul Thurston.');
  });

  it('Should match snapshot', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
