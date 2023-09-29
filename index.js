const fs = require('fs');
const path = require('path');
const replaceThis = "aditya"
const replaceWith = "adityachouksey"
const preview = false
const folder = __dirname
try {
   fs.readdir(folder,(err,data)=>{
    for (let index = 0; index < data.length; index++) {   /*it will run till data length*/
       const item = data[index];
       let oldfile = path.join(folder,item)
       let newfile = path.join(folder, item.replaceAll(replaceThis,replaceWith))
      

       if(!preview){
        fs.rename(oldfile , newfile, ()=>{   /*here data item is providing the item name adityaji.class and all and new file bata raha kis name mai edit hoga */
          console.log("rename success")
         })
      }
      else{
          if ("data/" + item!= newfile) console.log("data/" + item + " will be renamed to " + newfile)
      }
      }
  })
} catch (err) {
  console.error(err);
}
