import { createGlobalStyle } from 'styled-components';
import TaskContextProvider from '@/contexts/TaskContext';
import Navigation from '@/components/Navigation/Navigation';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}

body {
    background-color: #d1caacea;
    font-family: Arial, sans-serif;
    user-select: none;
}
`;

export default function App({ Component, pageProps }) {
  return (
    <TaskContextProvider>
      <GlobalStyle />
      <Navigation />
      <Component {...pageProps} />
    </TaskContextProvider>
  );
}