
export function objectKeyMap(obj,cb) {
  Object.keys(obj).map((key,i)=>cb(obj[key],i));
}
export function objectToArray(obj) {
  let arr=[];
  let insert = function (o) {
    arr.push(o);
  };
  objectKeyMap(obj,insert);
  return arr;
}


