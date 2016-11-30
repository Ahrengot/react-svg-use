import renderer from 'react-test-renderer';
import React from 'react';

import Icon from '../src/react-svg-use';

describe('Component', () => {
  const component = <Icon id="my-icon" color="#fff" />;
  const tree = renderer.create(component);

  describe('<Icon />', () => {
    it(`renders correctly`, () => {
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
});