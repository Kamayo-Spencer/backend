// const  mongoose= require("mongoose");

// const schema = new mongoose.Schema({
//   email: {
//     type:String,
//     required:true},
//   username: {
//     type:String,
//     required:true},
//   password: {
//     type:String,
//     required:true},
// });
// const User = mongoose.model('User', schema);

// export default User;


module.exports = mongoose =>{
  var MySchema = mongoose.Schema(
      {
        email: {
          type:String,
          required:true},
        username: {
          type:String,
          required:true},
        password: {
          type:String,
          required:true},
      });
    


  MySchema.method("toJSON", ()=>{
      const {__v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
  });
  
  const User = mongoose.model("User", MySchema)
  return User;
};

