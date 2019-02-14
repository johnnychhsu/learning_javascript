Javascript is a prototype-based OOL.

### Data type
javascript data type is dynamic.
1. Numbers
2. String
3. Object
4. Array
5. Undefined
6. Boolean

### Objects
```javascript
var person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
```

### Values
1. literal : fixed value
    1. Numbers
    2. Strings
2. variable

A variable without value will be `undefined`.

### Character set
javascript use Unicode

### Operator
```javascript
// This will become '235'
var x = 2 + 3 + "5";
```

```javascript
// equal value and equal type
===

// Returns the type of a variable, can also return function
typeof

// Returns true if an object is an instance of an object type
instanceof
```

### Scope
1. Global scope
2. Function scope
3. Block scope

**Block Scope** <br />
```javascript
{ 
  let x = 2;
}
// x can NOT be used here

{ 
  var x = 2; 
}
// x CAN be used here
```


