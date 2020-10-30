"use strict";

function Homepage() {
  return (
    <React.Fragment>
      <p>Welcome to the React Trading Cards site!</p>
      <a href="/cards">Go to the cards page</a>
      <img src="/static/img/balloonicorn.jpg"></img>
    </React.Fragment>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
