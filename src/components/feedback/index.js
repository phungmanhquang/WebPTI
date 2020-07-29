import React, { Component } from 'react';
import './style.css';
import { submitFeedback, getDataDetail } from '../../api/api'
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Feedback extends Component {
	constructor (props) {
			super(props)
			this.state = {
				rateStar : 0,
				evaluate : '',
				feddback : '',
				data : {}
			}
	}
  async handleSubmit(){
		const res = await submitFeedback({...this.state})
		if(res){
			toast.success("Gửi thành công !")
		}
	}
	handleValue(event){
		this.setState({ [event.target.name] : event.target.value})
	}
	async componentWillMount(){
		const res = await getDataDetail(1)
		this.setState({data : res})
	}
	render(){
		console.log(this.state)
		return (
			<section>
				<ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
				<div className="Feedback">
					<h1>Ý kiến khách hàng</h1>
					<h3>Thông tin sự vụ</h3>
					<div className="BlockText">
						<div className="ContentText">
							<p>Chủ xe : {this.state.data?.vehicleOwner}</p>
							<p>Giám định viên : {this.state.data?.supervisor}</p>
							<p>Nội dung : </p>
							<p>{this.state.data?.content}</p>
						</div>
					</div>
					<h3>Đánh giá</h3>
					<div className="BlockText">
						<div className="ContentText">
							<div className="rate-customer">
								<div className="rate">
									<input type="radio" id="star5" name="rateStar" value="5" onChange={event => this.handleValue(event)}  />
									<label htmlFor="star5" title="text">5 stars</label>
									<input type="radio" id="star4" name="rateStar" value="4" onChange={event => this.handleValue(event)}/>
									<label htmlFor="star4" title="text">4 stars</label>
									<input type="radio" id="star3" name="rateStar" value="3" onChange={event => this.handleValue(event)}/>
									<label htmlFor="star3" title="text">3 stars</label>
									<input type="radio" id="star2" name="rateStar" value="2" onChange={event => this.handleValue(event)}/>
									<label htmlFor="star2" title="text">2 stars</label>
									<input type="radio" id="star1" name="rateStar" value="1" onChange={event => this.handleValue(event)}/>
									<label htmlFor="star1" title="text">1 star</label>
								</div>
							</div>
							<div className="Check">
								<div className="player">
										<input type="radio" name="evaluate" id="player2"
										value="Giám định viên nhiệt tình" onChange={event => this.handleValue(event)} />
										<label htmlFor="player2" className="playerName pointer">Giám định viên nhiệt tình</label>
								</div>
								<div className="player">
										<input type="radio" name="evaluate" id="player3"
										value="Giám định viên có trách nhiệm" onChange={event => this.handleValue(event)} />
										<label htmlFor="player3" className="playerName pointer">Giám định viên có trách nhiệm</label>
								</div>
									<div className="player">
										<input type="radio" name="evaluate" id="player4"
										value="Giám định viên nhiệt tình" onChange={event => this.handleValue(event)} />
										<label htmlFor="player4" className="playerName pointer">Giám định viên nhiệt tình</label>
								</div>
							</div>
						</div>
					</div>
					<h3>Ý kiến người dùng</h3>
					<input className="input-text size-input" name="feddback" onChange={event => this.handleValue(event)} />
	
					<button className="size-input btn-submit" onClick={() => { this.handleSubmit() }}>Gửi đánh giá</button>
				</div>
			</section>
		);
	}
}

export default Feedback;
