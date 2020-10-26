class Room extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isBigRoom: false,
            colorBigRoom: ''
        }
        this.newTask = React.createRef();
    }
    handlerClickRoom = () => {
        this.state.colorBigRoom = this.props.roomColor;
        this.setState({isBigRoom: !this.state.isBigRoom});
    }
    renderRoom = (sizeRoom) =>{
        return (
            <div onClick={this.handlerClickRoom} className={sizeRoom + this.props.roomColor}></div>
        );
    }
    render() {
        const  sizeRoom = this.state.isBigRoom ? 'bigRoom ':'room ';
        return this.renderRoom(sizeRoom);
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