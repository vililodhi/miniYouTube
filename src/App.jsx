import React,{ Component } from 'react';
import 'SearchBar';

class App extends Component {
    render() {
        return (
            <div>
                <h1>Mini You Tube</h1>
				Search : <SearchBar />
            </div>
        );
    }
}
export default App;