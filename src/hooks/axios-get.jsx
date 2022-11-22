import axios from 'axios';

const axiosget = (callback) => {
    axios.get("")
      .then((result) => {
        callback(result.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
};

export default axiosget;