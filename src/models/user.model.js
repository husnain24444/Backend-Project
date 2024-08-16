import mongoose, {Schema} from "mongoose";
import bcryptjs from "bcryptjs";

const userSchema= new Schema(
    {
        username: {
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            index:true
        },
        email: {
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true
        },
        fullname: {
            type:String,
            required:true,
            trim:true,
            index:true
        },
        avatar: {
            type:String,// url because we upload this on third party app like AWS
            required:true,
        },
        coverImage: {
            type:String
        },
        watchHistory: [
            {
                type:Schema.Types.ObjectId,
                ref:"video"
            }
        ],
        password: {
            type:String,
            required: [true,"Password is required"]//custom error
        },
        refreshtoken: {
            type:String
        }
    },
    {
        timestamps:true
    }
)

userSchema.pre("save", async function(next){
if(!this.isModified("password")) return next();

    this.password= bcryptjs.hash(this.password,10)
    next()
} )

userSchema.methods.isPasswordCorrect= async function(){
    return await  bcryptjs.compare(password,this.password)
}

userSchema.methods.generateAccessToken= function(){
    return jwt.sign(
        {
            _id:this._id,
            email:this.email,
            username:this.username,
            fullname:this.fullname
        },
        process.env.Access_Token_Secret,
        {
            expiresIn:Access_Token_Expiry
        }
    )
}

userSchema.methods.generateRefreshToken= function(){
    return jwt.sign(
        {
            _id:this._id
        },
        process.env.Refresh_Token_Secret,
        {
            expiresIn:Refresh_Token_Expiry
        }
    )
}
export const user= mongoose.model("User",userSchema)