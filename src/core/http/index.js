import * as http from 'http';


try {
    http.createServer((req,res)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/JSON');
        res.write(JSON.stringify({message:"Namastey World"}));
        res.end();
    }).listen(5000,()=>{
        console.log("Listening on http://lcalhost:5000");
    });

} catch (error) {
    console.log("Error:"+error.message);
}

