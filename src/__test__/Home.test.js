import '@testing-library/jest-dom'
import Home from '../components/Home'
// import { render } from 'react-dom'
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';

describe('Test Home Components', () => {
  it('test HomePage function component renders without error', () => {
    const divElement = document.createElement('div');
    ReactDOM.render(<Home />, divElement);
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});