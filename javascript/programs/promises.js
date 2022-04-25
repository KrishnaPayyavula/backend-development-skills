function getResourceFromExternalAPIOne(apiDetails="https://api.google.com"){
        // return new Promise((resolve,reject)=>{
        //     setTimeout(resolve,3000,"I am resolving after 3 Sec");
        // })
        return new Promise((resolve)=>{
            let abc= [{
                name:"Krishna",
                location:"Bangalore",
                verticle:"IT"
            }]
            resolve(abc)

        })
}

function getResourceFromExternalAPITwo(apiDetails="https://api.github.com"){
        return new Promise((resolve,reject)=>{
            // setTimeout(reject,0,"I am Rejecting after 3 Sec");
            reject(new Error ("There is an error occured here in function two."))
        })
}




Promise.allSettled([getResourceFromExternalAPIOne("https://api.google.com"), getResourceFromExternalAPITwo("https://api.github.com/users/krishnapayyavula")]).
then(data => console.log(data)).catch((error)=>{
    console.log(error)
})