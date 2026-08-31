const appconfig={
    name:'nti',
    version:15 ,
    api:{
        baseurl:'www.nti.com',
        timeout:20
    }
}
appconfig.api.timeout=25;

appconfig.api.features=['login']

console.log(appconfig);

try{
    appconfig={}
}
catch(err){
    console.log(err);
    
}