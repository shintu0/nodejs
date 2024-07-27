export default function(req,res,next){
  console.log("In request");
  const originalSend=res.send;
  res.send=(data)=>{
    console.log("Out at:",new Date().toLocaleTimeString());
    originalSend.call(res,data);
  }
  next();
}