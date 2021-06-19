var newlogin = document.getElementById("login1");
class denyText extends React.Component {
    
    constructor(props) {
        this.state = {
            input: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ input: event.target.value })
    }
    render() {
        let inputStyle = {
            border: '1px solid black'
        };
        if (newLogin == this.state.input.length) {
            inputStyle.border = "3px solid red";
        }
        return (
            <div>
                <h3>Max input limit</h3>
                <input
                type="text"
                style={inputStyle}
                value={this.state.target}
                value={this.state.input}
                onChange={this.handleChange} />
            </div>
        );
    }
};

function showNav() {
    document.querySelector('container');
document.getElementById('navPopout').style.display = "block";
}