// 創建Dispatcher 對象，他是Flux中的事件系統，用於觸發事件響應回調，
// 且在 Flux中僅會有一個的Dispatcher對象。
import {Dispatcher} from "flux";

// Dispathcer
const TodoDispatcher = new Dispatcher();

// Action Types
const ADD_TODO = "ADD_TODO";

// Action Creator: 用於補助創建Action對象，並傳遞給Dispatcher
function addToDo(desc){
    const action = {
        type: "ADD_TODO",
        payload:{
            id: Date.now(),
            done: false,
            description: desc
        }
    };
    TodoDispatcher.dispatch(action);
}

// 註冊一個 Store，響應Action 方法。
import { ReduceStore } from 'flux/utils'


class TodoStore extends ReduceStore {
    // 在TodoStore構造器中將 TodoDispatcher傳遞給了 父級構造器ReduceStore 調用
    // 其實是在TodoDispatcher 上調用register方法註冊了Store，
    // 將其作為 dispatch的回掉方法，用於響應每一個action對象。
    constructor() {
        super(TodoDispatcher);
    }

    getInitialState() {
        return [];
    }
    // 當state 改變時，會觸發一個事件，通知視圖進行更新
    reduce(state, action) {
        switch (action.type) {
            case "ADD_TODO":
                return state.concat(action.payload);
                defalut:
                return state;
        }

    }
}
TodoStore = new TodoStore();

    console.log(TodoStore.getState());
    addToDo("吃早餐拉");
    console.log(TodoStore.getState());