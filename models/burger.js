const orm = require( '../config/orm' )

async function getAvailable(){
    const burgerList = await orm.selectAll()
    return burgerList.filter( burger=>burger.devoured == false )
}

async function getDevoured(){
    const burgerList = await orm.selectAll()
    return burgerList.filter( burger=>burger.devoured == true )
}

function add( name ){
    return orm.insertOne( name )
}

function devour( id ){
    return orm.updateOne( id,"devoured",true )
}

module.exports = {getAvailable, getDevoured, add, devour}