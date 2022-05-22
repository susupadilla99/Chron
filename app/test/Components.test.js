import React from 'react';
import renderer from 'react-test-renderer';

import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppColors from '../config/AppColors';

test('AppText', () => {
  // AppText renders
  var json = renderer.create(<AppText/>).toJSON();
  expect(json).toBeDefined();

  // AppText has correct attributes
  var json = renderer.create(
    <AppText
      size={30}
      color={AppColors.gray}
      style={{textDecorationLine: 'underline'}} 
      >Hi mom!</AppText>).toJSON();
  expect(json.children[0]).toBe("Hi mom!");
  expect(json.props.style[0]).toEqual({
    color: AppColors.black,
    fontFamily: 'Avenir',
    fontSize: 20,
  });
  expect(json.props.style[1]).toEqual({fontSize: 30, color: AppColors.gray});
  expect(json.props.style[2]).toEqual({textDecorationLine: 'underline'});
  expect(json).toMatchSnapshot();
});

test('AppScreen', () => {
  // AppScreen renders
  var json = renderer.create(<AppScreen/>).toJSON();
  expect(json).toBeDefined();

  // AppScreen displays childrens correctly
  var textComponent = renderer.create(<AppText>Hi mom!</AppText>).toJSON();
  var json = renderer.create(
    <AppScreen>
      <AppText>Hi mom!</AppText>
    </AppScreen>).toJSON();
  expect(json.props.style.backgroundColor).toEqual(AppColors.backgroundColor);
  expect(json.children[0].children[0]).toEqual(textComponent);
  expect(json).toMatchSnapshot();
})