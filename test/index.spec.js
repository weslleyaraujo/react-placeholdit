import expect from 'expect';
import jsdomReact from './jsdomReact';
import React from 'react/addons';
import Placeholdit from '../src';

const { TestUtils } = React.addons;

describe('Placeholdit', () => {
  jsdomReact();


  it('should display an img tag with the right dimensions', () => {
    const tree = TestUtils.renderIntoDocument(
      <Placeholdit width="200" height="200" />
    );

    const imgComponent = TestUtils.findRenderedDOMComponentWithTag(
      tree,
      'img'
    );

    const imgElement = imgComponent.getDOMNode();

    expect(imgElement).toExist();
    expect(imgElement.tagName).toBe('img');
    expect(imgElement.getAttribute('width')).toBe('200');
    expect(imgElement.getAttribute('height')).toBe('200');
  });
});
