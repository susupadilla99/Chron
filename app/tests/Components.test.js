import React from 'react';
import renderer from 'react-test-renderer';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import AppColors from '../config/AppColors';

test('AppText', () => {
  // test AppText renders
  var json = renderer.create(<AppText/>).toJSON();
  expect(json).toBeDefined();
  
  // test AppText 
  var json = renderer.create(
    <AppText 
      style={{textDecorationLine: 'underline'}}
      size={30}
      color='red' >Hi mom!</AppText>).toJSON();
  expect(json.children[0]).toBe("Hi mom!");
  expect(json.props.style[0]).toEqual({
    color: AppColors.black,
    fontFamily: 'Avenir',
    fontSize: 20,
  })
  expect(json.props.style[1]).toEqual({fontSize: 30, color: 'red'});
  expect(json.props.style[2]).toEqual({textDecorationLine: 'underline'});
});

test('AppBUtton', () => {
  // test AppButton renders
  var json = renderer.create(<AppButton/>).toJSON();
  expect(json).toBeDefined();
  console.log(json);

  console.log("---------------------------");

  //test AppButton
  var json = renderer.create(
    <AppButton
    title="Hi mom!"
    titleSize={20}
    style={{backgroundColor: AppColors.lightBlue}}
    onPress={() => {console.log("Hi mom!")}} />).toJSON();
  console.log(json);

});