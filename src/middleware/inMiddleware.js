export default function(req,res,next){
  console.log("In request at:",new Date().toLocaleTimeString());
  next();
}