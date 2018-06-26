/* eslint-disable import/no-extraneous-dependencies */
import 'jest-styled-components';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import initStoryshots from '@storybook/addon-storyshots';

configure({ adapter: new Adapter() });

initStoryshots();
