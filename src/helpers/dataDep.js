
export default function dataDep(data,callback) {
  if(!data){
    callback();
    return;
  }
  if(data.isLoading){
    return;
  }
  callback();

}
