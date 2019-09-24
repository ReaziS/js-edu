/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(focus, knowProg, config){
    let masterProg = 800;
    let mediumProg = 1300;
    return knowProg == true ? Math.ceil(masterProg / config[focus]):Math.ceil(mediumProg / config[focus]);
        
}