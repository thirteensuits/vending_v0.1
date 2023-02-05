import React from "react";
import { Provider } from "react-redux";
import Mint from '../functions/Mint';
import store from "../redux/store";
import Mint2 from '../functions/Mint2';
import store2 from "../redux/store2";
import Mint3 from '../functions/Mint3';
import store3 from "../redux/store3";
import Mint4 from '../functions/Mint4';
import store4 from "../redux/store4";

function Home() {
  return (
    <div className="buy">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-0">
              <p>
              <Provider store={store}>
              <Mint />
              </Provider>
              <br></br>
              <br></br>
              <Provider store={store2}>
              <Mint2 />
              </Provider>
              <br></br>
              <br></br>
              <Provider store={store3}>
              <Mint3 />
              </Provider>
              <br></br>
              <br></br>
              <Provider store={store4}>
              <Mint4 />
              </Provider>
              <br></br>
              <br></br>
              </p>
        </div>
      </div>
    </div>
    </div>

  );
}

export default Home;
