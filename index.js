var recipes = {dinner: "chicken and rice"}


function updateObjectWithKeyAndValue(object, key, value){

return Object.assign({}, object, {[key]:value})

var newObject = Object.assign({}, object)

}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value){

object[key] = value

return object

}

function deleteFromObjectByKey(object, key){

}

function destructivelyDeleteFromObjectByKey(object, key){

}
