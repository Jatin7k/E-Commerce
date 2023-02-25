/* 
  return {status : true} if user created
  return {status: false, error:"message"} if not
*/

const USER_DB_KEY ='dws454757d';



export function loginUser({username,password}){
    let userKey = localStorage.getItem(USER_DB_KEY);  //getting local storage key

    if(!userKey){
        return {
            status:'error',
            error:'Invalid credentails'
        }
    }
    const userArray = JSON.parse(userKey);

    const user= userArray.find(user => user.username === username && user.password === password);
    if(user){
        
        return {
            status:'ok'
        }

    }
    else{
        return {
            status:'error',
            error:'Invalid credentails'
        }
    }
}
export function createUser({username, password}){
    let userKey = localStorage.getItem(USER_DB_KEY);

    if(!userKey){
        userKey='[]';
    }
    const userArray = JSON.parse(userKey);

    //if there is another user with similar username
   const duplicate= userArray.find(user => user.username === username);
   if(duplicate){
    return {
        status:'error',
        error: 'Username already exists'
    }
   }

   if(password.length <3){
    return {
        status:'error',
        error: 'Password should be more than 3 words'
    }
   }

   //create the account
   userArray.push({
    username,
    password
   })

   localStorage.setItem(USER_DB_KEY, JSON.stringify(userArray));

   return{
    status:'ok'
   }

}