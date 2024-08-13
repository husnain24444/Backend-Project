const asynchandler = (requesthandler)=>{
    (req,res,next)=>{
        Promise.resolve(requesthandler(req,res,next)).catch((err)=>next (err))
    }
}

export default asynchandler





//Might be mostly codebase use this but we use promises
//so keep in mind both
// const asynchandler = () => {}
// const asynchandler = (fn) => () => {}
// const asynchandler = (fn) => async () => {}


// const asynchandler = (fun)=> async (req,res,next) =>{
//     try {
//         await fun(req,res,next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success:false,
//             message:err.message
//         })
//     }
// }