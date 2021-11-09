import axios from "axios";

//the url format

// https://api.unsplash.com/search/photos?query=america&client_id=mJl1YdfMWoGm2VHdJp7FuWmmSqqCp_cLznoXeK0_gyk

const curl = 'https://api.unsplash.com/search/photos?query=';

class ServerCall{
    static sendgetReq(placeName){
     return axios.get(curl+placeName+'&client_id=mJl1YdfMWoGm2VHdJp7FuWmmSqqCp_cLznoXeK0_gyk');
    }
}

export default ServerCall;