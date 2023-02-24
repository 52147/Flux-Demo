# Flux-Demo

1. 創建dispatcher 來處理Action。
2. 在dispatcher中創建Action Creator 來產生Action。
3. 創建 Store來響應dispatcher中的 action對象。
4. 每一個action都有一個state，當state改變時，store通知視圖做更新。   

Issue:   
Uncaught TypeError: Failed to resolve module specifier "flux". Relative references must start with either "/", "./", or "../".   

參考資料：   
https://www.freecodecamp.org/news/how-to-use-flux-in-react-example/   
https://juejin.cn/post/6844903806644256782   
