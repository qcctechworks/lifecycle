import React, {Component} from 'react';

class LifeCycle extends Component {
    constructor () {
      super();
      this.state = {
        items: [],
        isLoaded: false,
      };
    };

    //this is where all of our methods live
    componentDidMount () {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data)
          this.setState({
            isLoaded: true,
            items: data,
          })
        })
    }

    render () {
      var { isLoaded, items } = this.state;
      if(!isLoaded) {
        return <div>Loading...</div>
      } else {
      return (
        <div className="App">
          <div className="Names">
            <ul>
            {items.map(el => {
              return (
                <li key={el.id}>
                  Name: {el.name} | UserName: {el.username} | {" "}
                  <a href={`https://${el.website}`}>Website</a>
                </li>
              )
            })}
            </ul>
          </div>
        </div>
      );
      }
    };
};

export default LifeCycle;
