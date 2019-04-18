import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

/**
 * Configuration for test adapter enzyme 
 */
configure({ adapter: new Adapter() });