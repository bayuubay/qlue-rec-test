let data = [
{"username":"ali","hair_color":"brown","height":1.2},
{"username":"marc","hair_color":"blue","height":1.4},
{"username":"joe","hair_color":"brown","height":1.7},
{"username":"zehua","hair_color":"black","height":1.8}
]

const result ={
  "h":Object.keys(data[1]),
  "d":data.map(obj=>{
    return Object.values(obj)    
  })
} 
console.log(result)