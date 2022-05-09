import formVisibleReducer from'../../reducers/form-visible-reducer';
describe("formVisiblereducer",()=>{

  test('SHould return default state if no action type is recognised',()=>{
    expect(formVisibleReducer(false,{type:null})).toEqual(false);
  });

  test('Should toggle form visibility state to true',()=>{
    expect(formVisibleReducer(false,{type:'TOGGLE_FORM'})).toEqual(true);

  });

});