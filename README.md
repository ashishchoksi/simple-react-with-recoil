<h1 align="center">Hi 👋, I'm Ashish</h1>
<h3 align="center">This react App is demo of how to avoid props drilling and unnecessary re-rendering of component</h3>
<h4 align="center"><a href="https://simple-react-with-recoil.vercel.app/" target="_blank" rel="noreferrer">App deployed here</a></h4>
## steps

- create vite project    
    ```
    npm create vite@latest
    ```
- install all the dependencies
    ```
    npm install
    ```
- Install MUI for design
    ```
    npm install @mui/material @emotion/react @emotion/styled
    ```
- create simple react counter app design
- Add useState for count
- see props drilling & re-rendering
  
  > **props drilling** - It is a problem when different component wanted to share some common state then that state has to define is LCA of both the component and pass through other component’s props even intermediator component don’t need that state.
  
  > **re-rendering** - In case of props passed to the child component, when state changes all the components including the intermediator gets re-render. because react thinks that those components might be using state even they don't.

- Add useContext hook to avoid props drilling but re-rendering issue still exists
- Add recoil library to avoid re-rendering
    ```
    npm install recoil
    ```
- Add atom and use use state from atom.
- Checkout the commits we have optimized our code from rendering all the component to the only required ones.

Made in ❤️ with <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="22" height="22"/> </a>
