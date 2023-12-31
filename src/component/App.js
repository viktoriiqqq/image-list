import React from "react";
import SearchInput from "./SearchInput";
import axios from "axios";
 import ImageList from "./imageList";

class App extends React.Component  {




constructor(props){
    super(props);

    this.state = { images: []};

    this.onSearchSubmit = this.onSearchSubmit.bind(this)
}


 async onSearchSubmit(entry){
   
  const response = await axios.get(`https://pixabay.com/api/?key=39245186-5eac75604c2b636cdfa81848d&q=${entry}&image_type=photo`);
  console.log(response.data.hits)
  this.setState({images: response.data.hits});
 }   





render(){    
return (
    <div className="ui container">
        <SearchInput onSearchSubmit={this.onSearchSubmit}/>
        We have {this.state.images.length} images 
        <ImageList images = {this.state.images}/>
           </div>
)
}

}

export default App;
