export const loadState = () => {
  try{
    const serializedState = localStorage.getItem('auth_token');
    if(serializedState === null){
      return undefined;
    }
    console.log("return the state");
    return JSON.parse(serializedState);

  } catch(err){
    console.log(err);
    return undefined;
  }

}

export const saveState = (state) => {
  try{
    const serializedState = JSON.stringify(state);
    console.log('try to save the sent state item to local storage')
    console.log(state)
    console.log(serializedState)
    localStorage.setItem('auth_token',serializedState);
    console.log("saved auth token to local storage")

  } catch(err){
    console.log(err);
  }
}
