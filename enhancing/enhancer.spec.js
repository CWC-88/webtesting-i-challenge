const enhancer = require('./enhancer.js');
// test away!
describe('repair',()=>{
  it('resets hp to 100',()=>{
      const item = {
          name:"hundo",
          durability:88,
          enhancement:7
      }
      expect(enhancer.repair(item)).toBe(100)
  })  
})

//successful repair
describe('successful repair',()=>{
    it('increase hp to 1'),()=>{
        let item={
            name:"hundo",
            durability:88,
            enhancement:15  
        }
        expect(enhancer.succeed(item)).toBe(16)
    }

})

describe('fail',()=>{
    it('decrement by 5 if >15 ',()=>{

        let item={
            name:"hundo",
            durability:88,
            enhancement:15  
        }
        expect(enhancer.fail(item)).toBe(9)
    })
})

