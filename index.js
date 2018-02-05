var recipes = {dinner: "chicken and rice"}



function updateObjectWithKeyAndValue(object, key, value){

var obj = recipes

var newObj = Object.assign({}, obj)

return Object.assign({}, obj, {[key]:value})
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value){

}

function deleteFromObjectByKey(object, key){

}

function destructivelyDeleteFromObjectByKey(object, key){

}
