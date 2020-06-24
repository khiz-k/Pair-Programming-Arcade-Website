import React from 'react';
import './App.scss';
import Nav from './components/nav/nav';
import Hero from './components/hero/hero';
import Article from './components/article/article';
import Comments from './components/comments/comments';
import Aside from './components/aside/aside';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <main>
        <div className="not-aside">
          <Article />
          <Comments />
        </div>
        <Aside />
      </main>
    </div>
  );
}

export default App;
