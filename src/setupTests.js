//name of file is important
//jest, if it finds file with name setupTests.js inside src, it executes it first before executing any other test

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });