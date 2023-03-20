function chunkArrayInGroups(arr, size) {
  let groups = [];
  let slicePosition = 0;
  for(let i = 0; i < Math.round(arr.length / 2); i++, slicePosition+= size){
    let group = arr.slice(slicePosition, slicePosition + size);
    group.length && groups.push(group);
  }
  return groups;
}
