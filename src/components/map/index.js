import React, { Component } from 'react';
import './style.css';
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';
import { getUserInfo } from '../../api/api';

const mapStyles = {
  width: '100%',
  height: '100%',
};


class MAPPTI extends Component {
	constructor (props) {
			super(props)
			this.state = {
					lat: 0,
					lng: 0,
					userInfo: {}
			}
	}
	async componentWillMount(){
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position)=>{
				this.setState({lat: position.coords.latitude});
				this.setState({lng: position.coords.longitude })
			});
		}
		const res = await getUserInfo(1001)
		if(res){
			this.setState({userInfo : res})
		}
	}
	render(){
		setInterval(() => {this.setState({lng : this.state.lng + 0.00001})}, 10000)
		return (
			<section>
					<Map
						google={this.props.google}
						zoom={8}
						style={mapStyles}
						initialCenter={{ lat: 21.058324, lng: 106.277199}}
					>
						<Marker
						 label="Giám định viên" position={{ lat: 21.00, lng: 105.789199}}
						/>
						<Marker
						 label="Vị trí của bạn" position={{ lat: this.state?.lat, lng: this.state?.lng}}
						 animation={window.google.maps.Animation.BOUNCE}
						/>
					</Map>
					<div className="infoBlock">
						<img className="avata" src={this.state?.userInfo?.imgUrl} />
						<div className="info-detail">
							<p>Số ID: {this.state?.userInfo?.id}</p>
							<p>Họ và tên: {this.state?.userInfo?.name}</p>
							<p>Số điện thoại: <span className="phone-num">{this.state?.userInfo?.phone}</span></p>
						</div>
					</div>
			</section>
		);
	}
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCX6s6-wtRRDXKA-kNI8P2ry6H2xSZm4ow'
}) (MAPPTI);
