import React from 'react';
import fs from 'fs';
import path from 'path';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('QuillIcons', function() {
  const icons = fs.readdirSync(path.resolve(__dirname, '../icons'));

  icons.forEach(icon => {
    if (icon[0] === '.' || path.extname(icon) !== '.js') {
      return;
    }

    test(icon, () => {
      const file = path.resolve(__dirname, `../icons/${icon}`);
      const iconComponent = React.createElement(require(file).default);

      const wrapper = shallow(iconComponent);
      expect(wrapper.type()).toEqual('svg');
    });

    test(`${icon}: should pass customize props`, () => {
      const file = path.resolve(__dirname, `../icons/${icon}`);
      const iconComponent = React.createElement(require(file).default, {
        width: '30px',
        className: 'container'
      });

      const wrapper = shallow(iconComponent);
      expect(wrapper.find('.container').length).toEqual(1);
      expect(wrapper.find({width: '30px'}).length).toEqual(1);
    });
  });
});
