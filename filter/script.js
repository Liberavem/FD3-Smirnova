var Filter = React.createClass({

  dispayName: 'Filter',

  getDefaultProps: function() {
      return { 
          fruits: ["ПУСТО"]
      }
  },
  
  propTypes: {
    fruits: React.PropTypes.array.isRequired,
  },


  getInitialState: function() {
    return {
      input: "",
      checked: false,
      values: this.props.fruits.join('\n')
    };
  },


 updateFruits: function() {
   let fruits = this.props.fruits.filter(el => el.toLowerCase().includes(this.state.input.toLowerCase()));
   if(this.state.checked){
     fruits = fruits.sort();
   }
   this.setState({values: fruits.join('\n')});
 },
  

 buttonClickHandler: function() {
   this.setState({input: "", checked: false}, ()=> this.updateFruits());
 },

 checkboxSelected: function(event) {
  this.setState({checked: event.target.checked}, ()=> this.updateFruits());
  },

 textChanged: function(event) {
  this.setState({input: event.target.value}, ()=> this.updateFruits())
 },

  render: function() {
  
      return React.DOM.div(null,
          React.DOM.label({className:'Block'},
            React.DOM.input({
              type:'checkbox', onClick: this.checkboxSelected, checked: this.state.checked
            }),
            React.DOM.input({type:'text', value:this.state.input, onInput: this.textChanged}),
            React.DOM.button({onClick: this.buttonClickHandler}, "Сброс"),
            React.DOM.textarea({value: this.state.values}),
            )
          )     
  } 

})