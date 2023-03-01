import axios from 'axios';

export const getShips = async () => {
  const arrShips = [];
  const res = await axios.get('https://vortex.worldofwarships.eu/api/encyclopedia/en/vehicles/');
  if (res?.data?.status === 'ok') {
    for (let key in res.data.data) {
      arrShips.push(res.data.data[key])
    }
  }
  return arrShips;
}