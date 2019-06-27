// ***TO DO*** Implement functionality to add entries for the F2, F3 forms to database

// these aren't needed as they're being linked directly in index.html
// import React from '../public/react.development';
// import ReactDOM from '../public/react-dom.development';
// import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      pageCount: 0,
      name: '',
      email: '',
      password: '',
      line1: '',
      line2: '',
      city: '',
      state: '',
      zipShipping: '',
      phone: '',
      ccNumber: '',
      expiration: '',
      ccv: '',
      zipBilling: ''
    };
    this.handleCheckout = this.handleCheckout.bind(this);
    this.handleNextOne = this.handleNextOne.bind(this);
    this.handleNextTwo = this.handleNextTwo.bind(this);
    this.handleInputOne = this.handleInputOne.bind(this);
    this.handleNextThree = this.handleNextThree.bind(this);
    // this.handleInputTwo = this.handleInputTwo.bind(this);
    // this.handleInputThree = this.handleInputThree.bind(this);
    this.handlePurchase = this.handlePurchase.bind(this);
  }

  handleCheckout() {
    this.setState({pageCount: 1});
    console.log('This is count', this.state.pageCount);
  }

  handleNextOne() {
    this.setState({
      pageCount:2});    
      let { name, email, password } = this.state;
      // console.log('THIS IS FOR POST REQ', obj);
      axios
      .post('/api', {name, email, password})
      .then( res => {console.log('THIS IS RES FROM POST REQ', res)})
      .catch( err => console.error('Post request error'));
  }

  handleInputOne(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    // var inputData = {[name]: value};

    this.setState({
      [name]: value
      // name: value,
      // email: target['email'].value,
      // password: target['password'].value
    })

    console.log('THIS is EVENT from form input from F1', this.state);
  }

  handleNextTwo() {
    this.setState({pageCount:3});
  }

  // handleInputTwo(e) {
  //   const target = e.target;
  //   const value = target.value;
  //   const name = target.name;

  //   this.setState({
  //     [name]: value
  //   })
  // }

  handleNextThree() {
    this.setState({pageCount:4});
  }

  // handleInputThree(e) {
  //   const target = e.target;
  //   const value = target.value;
  //   const name = target.name;

  //   this.setState({
  //     [name]: value
  //   })
  // }

  handlePurchase() {
    this.setState({pageCount:0});
  }

  render() {
    const page0 = (
      <div>
        <h1>Home Page</h1>
        <button type='button' onClick={this.handleCheckout}>Checkout</button>
      </div>
    );

    //use onSubmit for each form, which would affect all input data and run function
    const page1 = (
      <form name='F1'>
        Name: <input type='text' name='name' onChange={this.handleInputOne} /><br />
        Email: <input type='text' name='email' onChange={this.handleInputOne} /><br />
        Password: <input type='password' name='password' onChange={this.handleInputOne} /><br />
        <button onClick={this.handleNextOne}>Next</button>
        {/* <input type='submit' value='Next' onClick={this.handleNextOne} /> */}
      </form>
    );

    const page2 = (
      <form name='F2'>
         <h1>Ship To: </h1>
         Address Line 1: <input type='text' name='line1' onChange={this.handleInputOne} /><br />
         Address Line 2: <input type='text' name='line2' onChange={this.handleInputOne} /><br />
         City: <input type='text' name='city' onChange={this.handleInputOne} /><br />
         State: <input type='text' name='state' onChange={this.handleInputOne} /><br />
         Zip: <input type='text' name='zipShipping' onChange={this.handleInputOne} /><br />
         Phone: <input type='text' name='phone' onChange={this.handleInputOne} /><br />
         <input type='submit' value='Next' onClick={this.handleNextTwo} />
       </form>
    );

    const page3 = (
      <form name='F3'>
         <h1>Credit Card Info </h1>
         Credit Card #: <input type='text' name='ccNumber' onClick={this.handleNextOne} /><br />
         Expiry Date: <input type='text' name='expiration' onClick={this.handleNextOne} /><br />
         CVV: <input type='text' name='cvv' onClick={this.handleNextOne} /><br />
         Billing Zip: <input type='text' name='zipBilling' onClick={this.handleNextOne} /><br />
         <button onClick={this.handleNextThree}>Next #3</button>
         {/* <input type='submit' value='Purchase' onClick={this.handlePurchase}/> */}
       </form>
    );

    const page4 = (
      <div>
        <h1>Confirm Purchase</h1>
        <button onClick={this.handlePurchase}>Purchase</button>
      </div>
    );

    function renderPage(count) {
      if(count === 0) {
        return page0;
      } 
      if(count === 1) {
        return page1;
      }
      if(count === 2) {
        return page2;
      }
      if(count === 3) {
        return page3;
      }
      if(count === 4) {
        return page4;
      }
    }

    return(

      renderPage(this.state.pageCount)

      // this.state.pageCount === 0 ? page0 : page1

      // if(this.state.pageCount === 0) {
      //   page0;
      // } 
      // else if(this.state.pageCount === 1){
      //   page1;
      // } else if(this.state.pageCount === 2) {
      //   page2;
      // }
    );
    
  }
}

ReactDOM.render(<App />, document.getElementById('app'));