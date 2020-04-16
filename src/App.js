import React, { useState, useEffect } from "react";

import { fetchCards } from "api";
import { Card } from "components";

import "styles/App.scss";

function App() {
  const [state, setState] = useState({ data: [], error: null, loading: false });

  useEffect(() => {
    const fetchData = async () => {
      setState(state => Object.assign({}, state, { loading: true }));
      const response = await fetchCards();

      setState(state =>
        Object.assign(
          {},
          state,
          Object.assign({}, response, { loading: false })
        )
      );
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="cards-container">{state.data.map(Card)}</div>
    </div>
  );
}

export default App;
