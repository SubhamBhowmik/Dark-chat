import axios from 'axios'//axios is alternative of fetch with some extra functionality it give us
//the data in json format but fetch give us in onject then we have to convert it in a json foRmat
const URL = 'http://localhost:8000';
//address of node server

export const addUser = async (data) => {
  try {

    return await axios.post(`${URL}/add`, data);

  } catch (error) {
    console.log('error in api ', error);
  }
}

export const getUser = async () => {
  try {

    let response = await axios.get(`${URL}/users`);
    console.log(response.data);//getting users information from "/users" routes
    return response.data;

  } catch (error) {
    console.log('error in getuser api ', error);
  }
}

export const setconversation =async (data) => {
  try {
  let res=await axios.post(`${URL}/onadd`,data)
  return res.data;
  } catch (error) {
      console.log('error in setconverstion api',error);
  }
}

export const getConversation = async (users) => {
  try {
      let response = await axios.post(`${URL}/get`, users);
      return response.data;
  } catch (error) {
      console.log('Error while calling getConversation API ', error);
  }
}

export const getMessages = async (id) => {
  try {
      let response = await axios.get(`${URL}/message/get/${id}`);
      return response.data;
  } catch (error) {
      console.log('Error while calling getMessages API ', error);
  }
}

export const newMessages = async (data) => {
  try {
      return await axios.post(`${URL}/message/add`, data);
  } catch (error) {
      console.log('Error while calling newConversations API ', error);
  }
}