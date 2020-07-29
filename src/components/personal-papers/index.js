import React, { Component } from 'react';
import './style.css';
import { getDataDetail } from '../../api/api';

class PersonalPapers extends Component {
	id = this.props.match.params.id
	constructor (props) {
			super(props)
			this.state = {
				rateStar : 0,
				evaluate : '',
				feddback : '',
				data: {},
				listPersonalPaper : []
			}
	}
	async componentWillMount(){
		console.log('id ::: ', this.id )
		const res = await getDataDetail(1)
		this.setState({data : res, listPersonalPaper : res.listPersonalPaper})
	}
	render(){
		return (
			<section>
				<div className="Form">
					<h1>Giấy tờ còn thiếu</h1>
					<h3>Thông tin sự vụ</h3>
					<div className="BlockText">
						<div className="ContentText">
							<div className="main-content">
								<p className="text-left">Chủ xe : {this.state.data?.vehicleOwner}</p>
								<p className="text-right">BSX : {this.state.data?.licensePlates}</p>
							</div>
							<div className="main-content">
								<p className="text-left">Giám định viên : {this.state.data?.supervisor}</p>
								<p className="text-right">Điện thoại : {this.state.data?.phoneNumberOfSupervisor}</p>
							</div>
							<p>Nội dung : </p>
							<p>{this.state.data?.content}</p>
						</div>
					</div>
					<h3>Danh sách giấy tờ còn thiếu</h3>
					<div className="list">
							{
								 this.state.listPersonalPaper.map((item, index) =>
								 	<div key={index} className="item">
									 <p>{item}</p>
									</div>
							 )	
							}
					</div>
				</div>
			</section>
		);
	}
}

export default PersonalPapers;
