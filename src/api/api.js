import { DataService } from "../utils/request";

export const submitFeedback = (data) => DataService({
  url: 'api/feedback',
	method: 'post',
	data
});

export const getDataDetail = (id) => DataService({
  url: `api/data/${id}`,
	method: 'get',
});

export const getUserInfo = (id) => DataService({
	url: `api/user/${id}`,
	method: 'get'
})