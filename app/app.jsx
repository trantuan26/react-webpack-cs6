var React = require('react');
var ReactDOM = require('react-dom');

class Note extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var rowDel = this.props.onRowDel;
        return (
            <div>
                <p>{this.props.name}</p>
                <button onClick={rowDel.bind(this)}>Delete</button>
            </div>
        );
    }
}

class NoteForm extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange() {
        this.props.onUserInput(this.refs.filterTextInput.value);
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Search..." value={this.props.filterText} ref="filterTextInput"  />
               <button type="button" onClick={this.handleChange.bind(this)} className="btn btn-success pull-right">Add</button>
            </div>
        );
    }
}


class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state.filterText = "";
        this.state.items = ["PHP", "Android", "IOS"];
    }

    handleRowDel(product) {
        var index = this.state.items.indexOf(product);
        this.state.items.splice(index, 1);
        this.setState(this.state.items);
    };

    handleUserInput(filterText) {

    };


    render() {
        return (
            <div>
                <NoteForm filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}  />
                {this.state.items.map((e, i) =>
                    <Note name={e} onRowDel={this.handleRowDel.bind(this)}/>
                )}
            </div>
        );
    }
}

ReactDOM.render(
    <List/>,
    document.getElementById('root')
)