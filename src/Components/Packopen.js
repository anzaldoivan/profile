import React, {useState, useEffect} from 'react'
import {doSomethingWithInput, justAnAlert, steamid_to_64bit} from './Util.js'


import * as SteamID from '@node-steam/id';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';
import '../App.css';

// importamos AXIOS que nos sirve hacer los fetch con las API
import axios from 'axios';

import {
  fromAccountID,
  ID,
  Instance,
  Type,
  Universe,
} from '@node-steam/id';

function Packopen(){

  const [opened, setOpened] = useState(0);
  const [rand, setRand] = useState(0);

  let ovr;

    return(
      <div>
        <div className="fut-container" style={{minHeight: '770 px'}}>
          <div className="fut-row" style={{marginBottom: '10px', marginTop: '30px'}}>
            <div className="fut-col" style={{marginTop: '1%', marginBottom: '2%'}}>
              <div className="fut-header-bg">
                <h1 className="fut_header" style={{color: 'white'}}>
                  IOS Manager Pack Opener
                </h1>
              </div>
            </div>
          </div>
          <div>
          <div className="fut-col-pack">
            {opened == 0 ? <div>
            <div className="fut-row fut-col-pack fut-choose">
              <div className="fut-col-card fut-col-pack-1" onClick={() => setOpened(opened + 1)}>
                <div class="fut-pack-name"> PACK CADD</div>
                <div class="fut-divide-line"></div>
                <div style={{textAlign: 'center'}}>
                  <img className="fut-image" src={require(`../images/pack/cadd.png`)}></img>
                </div>
                <div class="fut-divide-line-bottom"></div>
                <div className="fut-pack-desc">
                  <ul className="inline">
                    <li className="fut-items">
                      <div className="fut-items-top">11</div>
                      <div className="fut-items-top">PLAYERS</div>
                    </li>
                    <li className="fut-hex">
                      <div className="fut-items-top">7</div>
                      <div className="fut-items-top">Golds</div>
                    </li>
                    <li className="fut-hex-rare">
                      <div className="fut-items-top">2</div>
                      <div className="fut-items-top">Rares</div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="fut-col-card fut-col-pack-1">
                <div class="fut-pack-name"> PACK CADD </div>
                <div class="fut-divide-line"></div>
                <div style={{textAlign: 'center'}}>
                  <img className="fut-image" src={require(`../images/pack/cadd.png`)}></img>
                </div>
                <div class="fut-divide-line-bottom"></div>
                <div className="fut-pack-desc">
                  <ul className="inline">
                    <li className="fut-items">
                      <div className="fut-items-top">11</div>
                      <div className="fut-items-top">PLAYERS</div>
                    </li>
                    <li className="fut-hex">
                      <div className="fut-items-top">6</div>
                      <div className="fut-items-top">Golds</div>
                    </li>
                    <li className="fut-hex-rare">
                      <div className="fut-items-top">2</div>
                      <div className="fut-items-top">Rares</div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="fut-col-card fut-col-pack-1">
                <div class="fut-pack-name"> PACK CADD </div>
                <div class="fut-divide-line"></div>
                <div style={{textAlign: 'center'}}>
                  <img className="fut-image" src={require(`../images/pack/cadd.png`)}></img>
                </div>
                <div class="fut-divide-line-bottom"></div>
                <div className="fut-pack-desc">
                  <ul className="inline">
                    <li className="fut-items">
                      <div className="fut-items-top">12</div>
                      <div className="fut-items-top">PLAYERS</div>
                    </li>
                    <li className="fut-hex">
                      <div className="fut-items-top">6</div>
                      <div className="fut-items-top">Golds</div>
                    </li>
                    <li className="fut-hex-rare">
                      <div className="fut-items-top">2</div>
                      <div className="fut-items-top">Rares</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            </div>
          : <div>
              <div className="fut-row fut-col-pack fut-choose">
                <div className="fut-col-card fut-col-pack-1" onClick={() => setOpened(opened - 1)}>
                  <div class="fut-pack-name"> PACK CADD</div>
                  <div class="fut-divide-line"></div>
                  <div style={{textAlign: 'center'}}>
                    <img className="fut-image" src={require(`../images/pack/cadd.png`)}></img>
                  </div>
                  <div class="fut-divide-line-bottom"></div>
                  <div className="fut-pack-desc">
                    <ul className="inline">
                      <li className="fut-items">
                        <div className="fut-items-top">11</div>
                        <div className="fut-items-top">PLAYERS</div>
                      </li>
                      <li className="fut-hex">
                        <div className="fut-items-top">7</div>
                        <div className="fut-items-top">Golds</div>
                      </li>
                      <li className="fut-hex-rare">
                        <div className="fut-items-top">2</div>
                        <div className="fut-items-top">Rares</div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="fut-cards">
                    <div class="fut-divide-line"></div>
                    <div className="fut-player-row">
                    <img src={require(`../images/players/CADD_PACK/t0_STEAM_0_1_48359313.png`)} width="85.3125" height="120"></img>
                    <div className="fut-divide"></div>
                    <img src={require(`../images/players/CADD_PACK/t0_STEAM_0_1_67981774.png`)} width="85.3125" height="120"></img>
                    <div className="fut-divide"></div>
                    <img src={require(`../images/players/CADD_PACK/t0_STEAM_0_1_128106997.png`)} width="85.3125" height="120"></img>
                    <div className="fut-divide"></div>
                    <img src={require(`../images/players/CADD_PACK/t1_STEAM_0_0_245137691.png`)} width="85.3125" height="120"></img>
                    <div className="fut-divide"></div>
                    <img src={require(`../images/players/CADD_PACK/t1_STEAM_0_1_185950898.png`)} width="85.3125" height="120"></img>
                    <div className="fut-divide"></div>
                    <img src={require(`../images/players/CADD_PACK/t0_STEAM_0_0_41134189.png`)} width="85.3125" height="120"></img>
                    </div>
                    <div className="fut-player-row">
                    <img src={require(`../images/players/CADD_PACK/t0_STEAM_0_1_181525163.png`)} width="85.3125" height="120"></img>
                    <div className="fut-divide"></div>
                    <img src={require(`../images/players/CADD_PACK/t0_STEAM_0_1_32295184.png`)} width="85.3125" height="120"></img>
                    <div className="fut-divide"></div>
                    <img src={require(`../images/players/CADD_PACK/t1_STEAM_0_0_98901724.png`)} width="85.3125" height="120"></img>
                    <div className="fut-divide"></div>
                    <img src={require(`../images/players/CADD_PACK/t1_STEAM_0_0_76340856.png`)} width="85.3125" height="120"></img>
                    <div className="fut-divide"></div>
                    <img src={require(`../images/players/CADD_PACK/t0_STEAM_0_1_245274134.png`)} width="85.3125" height="120"></img>
                    </div>
                    <button onClick={() => setRand(Math.random())}>ABRIR SOBRE</button>
                    <p>RAND {rand}: {rand <= 0.10 && rand > 0.05 ?
                    <img src={require(`../images/players/CADD_PACK/t1_STEAM_0_0_76340856.png`)} width="85.3125" height="120"></img> :
                    rand > 0 && rand <= 0.05 ? <img src={require(`../images/players/CADD_PACK/t0_STEAM_0_0_41134189.png`)} width="85.3125" height="120"></img> :
                    rand > 0.10 && rand <= 0.18 ? <img src={require(`../images/players/CADD_PACK/t0_STEAM_0_1_48359313.png`)} width="85.3125" height="120"></img> :
                    rand > 0.18 && rand <= 0.27 ? <img src={require(`../images/players/CADD_PACK/t0_STEAM_0_1_67981774.png`)} width="85.3125" height="120"></img> :
                    rand > 0.27 && rand <= 0.35 ? <img src={require(`../images/players/CADD_PACK/t0_STEAM_0_1_128106997.png`)} width="85.3125" height="120"></img> :
                    rand > 0.35 && rand <= 0.44 ? <img src={require(`../images/players/CADD_PACK/t1_STEAM_0_0_245137691.png`)} width="85.3125" height="120"></img> :
                    rand > 0.44 && rand <= 0.525 ? <img src={require(`../images/players/CADD_PACK/t0_STEAM_0_1_181525163.png`)} width="85.3125" height="120"></img> :
                    rand > 0.525 && rand <= 0.61 ? <img src={require(`../images/players/CADD_PACK/t1_STEAM_0_0_98901724.png`)} width="85.3125" height="120"></img> :
                    rand > 0.61 && rand <= 0.70 ? <img src={require(`../images/players/CADD_PACK/t0_STEAM_0_1_245274134.png`)} width="85.3125" height="120"></img> :
                    rand > 0.70 && rand <= 0.85 ? <img src={require(`../images/players/CADD_PACK/t0_STEAM_0_1_32295184.png`)} width="85.3125" height="120"></img> :
                    rand > 0.85 ? <img src={require(`../images/players/CADD_PACK/t1_STEAM_0_1_185950898.png`)} width="85.3125" height="120"></img> :
                    null
                    }</p>
                  </div>
                </div>
              </div>
            </div>}
          </div>
        </div>
      </div>
      </div>
    )

}

export default Packopen