var sortPeople = function(names, heights) {
  let combine=names.map((name,i)=>[name,heights[i]])
  combine.sort((a,b)=>b[1]-a[1])
   return combine.map((cmd)=>cmd[0])

};
console.log(sortPeople(["Mary","John","Emma"],[180,165,170]));
