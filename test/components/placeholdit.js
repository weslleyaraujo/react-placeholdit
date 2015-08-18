import expect from 'expect';
import React from 'react/addons';
import Placeholdit from '../../src';

const { TestUtils } = React.addons;

function shallowComponent(component) {
  const shallowRenderer = TestUtils.createRenderer();
  shallowRenderer.render(component);
  return shallowRenderer.getRenderOutput();
}

describe('Placeholdit', () => {
  describe('Basic usage', () => {
    const simpleComponent = shallowComponent(
      <Placeholdit width="200" />
    );

    const bothComponent = shallowComponent(
      <Placeholdit width="200" height="100" />
    );

    it('should display an img tag', () => {
      expect(simpleComponent.type).toBe('img');
      expect(bothComponent.type).toBe('img');
    });

    it('should display an img tag with the right dimensions', () => {
      expect(simpleComponent.props.width).toBe('200');
      expect(simpleComponent.props.height).toBe('200');

      expect(bothComponent.props.width).toBe('200');
      expect(bothComponent.props.height).toBe('100');
    });

    it('should display an img with the right src', () => {
      expect(simpleComponent.props.src).toBe('https://placehold.it/200x200.gif');
      expect(bothComponent.props.src).toBe('https://placehold.it/200x100.gif');
    });
  });

  describe('Format', () => {
    const defaultComponent = shallowComponent(
      <Placeholdit width="300" height="300" />
    );

    const pngComponent = shallowComponent(
      <Placeholdit width="300" height="300" format="png" />
    );

    const jpgComponent = shallowComponent(
      <Placeholdit width="300" height="300" format="jpg" />
    );

    const jpegComponent = shallowComponent(
      <Placeholdit width="300" height="300" format="jpeg" />
    );

    it('should display an img with the correct format', () => {
      expect(defaultComponent.props.src).toBe('https://placehold.it/300x300.gif');
      expect(pngComponent.props.src).toBe('https://placehold.it/300x300.png');
      expect(jpgComponent.props.src).toBe('https://placehold.it/300x300.jpg');
      expect(jpegComponent.props.src).toBe('https://placehold.it/300x300.jpeg');
    });
  });

  describe('Children callback', () => {
    const spy = expect.createSpy(() => {});

    const component = shallowComponent(
      <Placeholdit width="100" alt="Image">
        {(src, props) => <span>{spy(src, props)}</span>}
      </Placeholdit>
    );

    it('should accept a children callback', () => {
      expect(spy).toHaveBeenCalled();
      expect(spy.calls.length).toBe(1);
      expect(spy.calls[0].arguments[0]).toBe('https://placehold.it/100x100.gif');
      expect(spy.calls[0].arguments[1]).toBeAn(Object);
    });
  });
});
