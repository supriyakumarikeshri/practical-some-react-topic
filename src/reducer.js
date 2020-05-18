const inState={
	name:'MOON',
	wishes:['code','eat']
}
const reducer= (state=inState,action) =>{
	if(action.type==='CHANGE_NAME')
	{
		return{
			...state,
			name:action.payload
		}
	}
	console.log(action)  
	return state;
} 

export default reducer;