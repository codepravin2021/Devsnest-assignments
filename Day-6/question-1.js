function is_array(input) {
    if (toString.call(input) == "[object Array]")
            return true;
        return false;
    }
console.log(is_array([1,2,4,0]));
console.log(is_array('w3resource'));