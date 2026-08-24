var correctpin ='1234';
var attempts =0;
while (attempts<3&&correctpin!=pin) {
    var pin =prompt('your pin');
    attempts++;
}
if(pin==correctpin)
    console.log('sucess');
else
    console.log('failed');
       
