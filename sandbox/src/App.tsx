import type { Component } from 'solid-js'
import { Hello } from '@o6/hello'

import logo from './logo.svg'
import styles from './App.module.css'

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <h1>
          <Hello></Hello>
        </h1>
        <p>
          Edit <code>src/App.tsx</code> and save
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  )
}

export default App
