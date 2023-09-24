import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FormScreen from './form_screen';
import Headers from './Header.js';
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { WagmiConfig } from 'wagmi'
import { arbitrum, mainnet } from 'wagmi/chains'
const projectId = '71baef523861194a9dd89d7dd9eb45ff'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


const chains = [mainnet, arbitrum]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, appName: 'Web3Modal' })

createWeb3Modal({ wagmiConfig, projectId, chains })

export default function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
       <React.StrictMode>
    {/* <App /> */}
    {/* <ResponsiveAppBar /> */}

    <FormScreen />
    {/* <Headers /> */}

  </React.StrictMode>
    </WagmiConfig>
  )
}