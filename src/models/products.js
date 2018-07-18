
import { query } from '../services/products';

export default {
  namespace: 'products',

  state: {
    obj: {},
    tableList: []
  },

  effects: {
    *query(_, { call, put }) {
      const response = yield call(query);
      console.log(response,"-----");
      yield put({
        type: 'saveObj',
        obj: {a: 1}
      });
    },
  },

  reducers: {
    saveObj(state, action) {
      console.log(state,action,"--6--")
      
      return {
        obj: action.obj,
        tableList: state
      };
    },
    'delete'(state, { payload: id }) {
      
      return state.filter(item => item.id !== id);
    },
  },
};
