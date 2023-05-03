import os from 'os';

try {
    console.log(os.arch());
    console.log(os.freemem()/(1024**3));
    console.log(os.totalmem()/(1024**3));
    console.log(os.platform());

} catch (error) {
    
}