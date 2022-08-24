






export const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)



export const isEmpty = (obj)=> {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

export const isEmptyData = (data) => {
    if (typeof(data) === 'object') {
      if (JSON.stringify(data) === '{}' || JSON.stringify(data) === '[]') {
        return true;
      } else if (!data) {
        return true;
      }
      return false;
    } else if (typeof(data) === 'string') {
      if (!data.trim()) {
        return true;
      }
      return false;
    } else if (typeof(data) === 'undefined') {
      return true;
    } else {
      return false;
    }
}


export const findByTestAttr = (component, attr) => {
    const wrapper =  component.find(`[data-test='${attr}']`);
    return wrapper;
}

export const updateArrayOfObjects = (stateObject, keyIndex, attributes) => {
    return [stateObject.slice(0,keyIndex),
        Object.assign({}, stateObject[keyIndex], attributes) ]
    
}



export const compareObjectKeys = (obj1, tempObj) => {
  
}


export const returnValueByID = (data, fieldValue, id) => {
    const newArray = data.filter(x => x[fieldValue] === id);
    return newArray;
}
export function shallowEqual(objA, objB) {
    if (objA === objB) {
      return true;
    }
  
    if (typeof objA !== 'object' || objA === null ||
        typeof objB !== 'object' || objB === null) {
      return false;
    }
  
    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
  
    if (keysA.length !== keysB.length) {
      return false;
    }
  
    // Test for A's keys different from B.
    var bHasOwnProperty = hasOwnProperty.bind(objB);
    for (var i = 0; i < keysA.length; i++) {
      if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
        return false;
      }
    }
  
    return true;
  }
  
export function shallowCompare(instance, nextProps, nextState) {
    return (
      !shallowEqual(instance.props, nextProps) ||
      !shallowEqual(instance.state, nextState)
    );
  }
  
  export function findindexObj(obj, key, value) {
    return obj.findIndex(function(v){ return v[key] === value});
  }

export function filterValue(obj, key, value) {
    return obj.find(function(v){ return v[key] === value});
    }
    
  

 