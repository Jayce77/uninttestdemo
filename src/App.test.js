import App from './App';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAtapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({adapter: new EnzymeAtapter() });

test('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toBe(true);
});
