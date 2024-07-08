/** 
 * Unique id generator
 */
const generatorId = (function* () {
    let id = 0
    while(true) yield ++id
})()

/**
 * Generates unique id and returns it
 * 
 * @returns Unique identificator
 * 
 * @example
 * getId() // 0
 * getId() // 1
 * getId() // 2
 */
export const getId = () => generatorId.next().value