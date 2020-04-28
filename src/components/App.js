  import React from 'react';
  import '../stylesheets/App.scss';
  import fetchData from '../services/FetchData';
  import CharacterList from './CharacterList';
  import Filter from './Filter';
  import CharacterDetails from './CharacterDetails';
  import { Switch,Route } from 'react-router-dom';
  import logo from '../images/logo.png';


  class App extends React.Component {
    constructor(props) {
      super(props);
      this.handleInputValue = this.handleInputValue.bind(this);
      this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
      this.applyFilters = this.applyFilters.bind(this);
      
      
      this.state = {
        data: [],
        value:''
      }
    }

    
    componentDidMount() {
      fetchData()
        .then(data => {
          this.setState({
            data: data.results
          })
        });
      
        const inputValue = JSON.parse(localStorage.getItem('inputValue'));
        if(inputValue !== null){
          this.setState({
            value: inputValue
            })
          }
      console.log(this.state) 
    }


    componentDidUpdate(){
      localStorage.setItem('inputValue',JSON.stringify(this.state.value))
      console.log(this.state)
    }

    
    handleInputValue(inputValue){
      this.setState({
        value: inputValue
      });
      console.log(this.state.value)
    }

  

    applyFilters(){
      const {data, value} = this.state
      return data
      .filter (characterObj => value === "" || characterObj.name.toLowerCase().includes(value.toLowerCase()))
    }

    renderCharacterDetail(props){
      console.log(props)
      
      const routeId = props.match.params.id;
      const characters = this.state.data;
      
      for (let character of characters){
        if(character.id === parseInt(routeId)){
          return <CharacterDetails characterObj={character}
          alive ={character.status}/>
        }
      }
    }

    render() {
      const {data, value, found} = this.state;
      return (
        <div className="wrapper">
          <Switch>
          <Route exact path="/">
            <header className = "header">
              <img src = {logo}></img>
              <Filter 
                handleInputValue={this.handleInputValue} 
                value={value}
                found={found}
                handleFound={this.handleFound}/>
              </header>
                <main className="main">
                  <CharacterList 
                    characters={data} 
                    inputValue={value}
                    dataList = {this.applyFilters()}/>
              </main>
            </Route>
            <Route path="/character/:id" render={this.renderCharacterDetail}/>
          </Switch>
        </div>
      );
    }
  }

  export default App;