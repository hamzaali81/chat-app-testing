const set_data = (data)=>{

      return (dispatch)=>{
        console.log('Chal check kar',data);
          dispatch({
              type: 'SET_DATA',data:data
          })
          dispatch({
              type: 'OK_DATA'
          })
    return console.log('Chal rha');
      }
}

export {
    set_data
};