Router.map(function(){
  this.route('/addition',{where:'server'})
  .post(function(){
      // POST data
      var jsondata = JSON.parse(JSON.stringify(this.request.body));

      // Get number1 and number2 from POST and create the addition
      var result = parseInt(jsondata.number1) + parseInt(jsondata.number2) + "\n";

      // Return result
      this.response.end('{\n "result": ' + result + '}\n');
  });
});
Router.route('/', {
    name: 'main',
    template: 'main'
});
