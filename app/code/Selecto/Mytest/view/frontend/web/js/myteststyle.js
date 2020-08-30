require([
"jquery"
], function($){
    $(document).ready(function() {
    var form = $('form.subscribe');

    form.submit(function(e) {  
		alert("This is just a test"); return false;
        return false;
    });
 });
});
