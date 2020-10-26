class Room extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isBigRoom: false,
            colorBigRoom: ''
        }
        this.newTask = React.createRef();
    }
    handlerClickBigRoom = () => {
        this.state.colorBigRoom = this.props.roomColor;
        this.setState({isBigRoom: true});
    }

    handlerClickLittleRoom = () => {
        this.state.colorBigRoom = '';
        this.setState({isBigRoom: false});
    }
    renderBigRoom = () =>{
        return (
            <div onClick={this.handlerClickLittleRoom} className={'bigRoom ' + this.props.roomColor}></div>
        );
    }

    renderLittleRoom = () =>{
        return (
            <div onClick={this.handlerClickBigRoom} className={'room ' + this.props.roomColor}></div>
        );
    }

    render() {
        if(this.state.isBigRoom) {
            return this.renderBigRoom();
        } else {
            return this.renderLittleRoom();
        }
    }
}


    class Hostel extends React.Component{

    constructor() {
        super();
        this.state={
            roomColor: ['red','green','blue','yellow']
        }
    }
    render() {
        return (
            <div className='box' class="row">
                {this.state.roomColor.map(item => <Room roomColor={item}/>)}
            </div>
        );
    }
}
ReactDOM.render(<Hostel/>, document.getElementById('root'));