const MOCKURL = 'http://www.weichuang.com/'; // mock模拟
const SERVERURL = 'http://localhost:3000/';//真实URL

const URL = {
    getVarietyItem: MOCKURL + 'getVarietyItem',
    getHotProduct: MOCKURL + 'getHotProduct',
    registUser: SERVERURL + 'user/registUser',
    loginUser: SERVERURL + 'user/loginUser'
};

export default URL;