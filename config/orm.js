const db = require( './connection' )

function selectAll(){
    return db.query( "SELECT * FROM burgers" )
}

function insertOne( name ){
    return db.query( "INSERT INTO burgers SET ? ", 
        { burger_name: name, devoured: false } )
}

function updateOne( id, field, value ){
    return db.query( "UPDATE burgers SET ? WHERE id=?", 
        [ { [field]: value}, id ] )
}

module.exports = {selectAll, insertOne, updateOne}