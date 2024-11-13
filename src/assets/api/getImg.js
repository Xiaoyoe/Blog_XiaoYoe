import axios from 'axios'

export const getRandomImg = axios
  .get('https://xin.xingvvhuang.cn/suijiimg.php?action=json&msg=8')
  .then(
    (res) => {
      return res.data.data
    },
    (error) => {
      console.log(error)
    },
  )
