name = 'The Window';

var alpha = {
    name : 'My Alpha',
    getNameFunc : function() {
    	var that = this;
        return function() {
            return that.name;
        };
    }
};