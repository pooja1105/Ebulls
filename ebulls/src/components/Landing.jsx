import { Card, CardContent, Grid } from '@mui/material'
import React from 'react'
import NavBar from './NavBar';
import Crypto from "../img/cccc.png";
import Ccrypto1 from "../img/crypto2.png";
import NavBarcopy from './NavBarcopy';
import { makeStyles } from '@mui/styles';
import a1 from "../img/a1.png";
import a2 from "../img/a2.png";
import a3 from "../img/a3.png";
import a4 from "../img/a4.png";
import mob from '../img/mob.png';
import robot from '../img/robot.png'
import rocket from '../img/rocket.png';
import cardimg from '../img/cardimg.png';
import card1img from '../img/card1img.png'
import { display } from '@mui/system';
import Footer from './Footer';
import t11 from '../img/t11.png';
import t12 from '../img/t12.png';
import t13 from '../img/t13.png';
import t14 from '../img/t14.png';
import t15 from '../img/t15.png';
import { Link, useHistory } from "react-router-dom";
import t21 from '../img/t21.png';
import t22 from '../img/t22.png';
import t23 from '../img/t23.png';
import t24 from '../img/t24.png';
import t25 from '../img/t25.png';



const useStyles = makeStyles({
    cardp: {
        display: "flex",
        gap: "13vw",
        backgroundImage:`linear-gradient(152.97deg, #54534f 0%, #242322 100%);`,
        '@media (max-width: 750px)' : {
            gap: "5vw",
          }

    },

    Cardsize: {
        width: "66.719vw",
        height: "6.823vw",
        left: '15.365vw',
        position: 'relative',
        top: '-33vw',
        backgroundImage:`linear-gradient(152.97deg, #54534f 0%, #242322 100%);`,



    },
    h1live: {
        color: "white",
        paddingLeft: "5.260vw",
        position: "relative",
        top: "-35.021vw",
        fontSize: "2.865vw"
    },
    activa: {
        color: "#EAB73B",
        fontSize: "2.381vw",
        width: "7.857vw",
        height: "3.214vw",
        left: "15.245vw",
        position: "relative",
        bottom: "32vw",
    },

    btnnn: {
        width: "9.531vw",
        height: "3.125vw",
        borderRadius: "5.208vw",
        background: "#EAB73B",
        fontSize: "0.938vw",
        color: "#AAAAA",
        border: "none",
    },
    paragraphh1: {
        color: "white",
        paddingLeft: "5.260vw",
        position: "relative",
        top: "-40.021vw",
        fontSize: "1.065vw"

    },
    img11: {
        width: "41.667vw",
        height: "41.667vw"
    },
    img22: {
        width: "45.875vw",
        height: "45.646vw",
        paddingTop: "3vw"
    },
    trade: {
        color: "white",
        paddingLeft: "5.260vw",
        position: "relative",
        top: "-39.021vw",
        fontSize: "1.565vw"
    },
    btnnndiv: {
        paddingLeft: "5.260vw",
        position: "relative",
        top: "-39.021vw",
    },
    divide: {
        borderLeft: "6px solid #5A5A5A",
        height: "500px"
    },
    imgflex: {
        display: 'flex',
        gap: '2vw',
        paddingLeft: "7.365vw",
        position: 'relative',
        top: '-24.5vw',
        '@media (max-width: 750px)' : {
            paddingLeft: "5.365vw",
          }
    },
    a1234: {
        width: "16.042vw",
        height: "9.896vw",
      
        
    },
    popular: {
        color: "#EAB73B",
        fontSize: '2.083vw',
        textAlign: 'center',
        position: 'relative',
        top: '-21.5vw'
    },
    buy: {
        color: "#212121",
        fontSize: '1.083vw',
        textAlign: 'center',
        position: 'relative',
        top: '-21.5vw'
    },
    staking: {
        paddingLeft: "10.296vw",
        color: "white",
    },
    mmmmmmmm: {
        paddingLeft: "10.292vw"

    },
    mooobb: {
        height: "19.156vw",
        width: "25.729vw"
    },
    SSStak:{
        color: "#EAB73B",
        fontSize: "2.083vw",
        height: "2.292vw",
        width: "8.281vw",

    },
    yearly: {
        width:"25.156vw",
        height: "4.740vw",
        fontSize: "2.083vw",
        color: "#FFFFFF",

    },
    Thiss: {
        width: "26.927vw",
        height: "5vw",
        fontSize: "0.833vw",
        color: "#AAAAAA"

    },
    ifffff: {
        width: "27.865vw",
        height: "3.229vw",
        fontSize: "1.042vw",
        color: "#FFFFFF",
    },
    btnStart: {
        borderRadius: "5.208vw",
        background: "#EAB73B",
        height: "3.125vw",
        width: "9.495vw",
        fontSize: "0.938vw",
        border: "none",
    },
    rooooo: {
        paddingLeft: "10.296vw",
        paddingTop: "20px"
    },
    bottro: {
        height: "22.865vw",
        width: "18.281vw",

    },
    roo00: {

    },
    roo1: {
        color: "White",
    },
    ro2:{
        color: "#D0A563"
    },
    roo3: {
        fontSize: "0.833vw",
        width: "28.542vw",
        height: "6.250vw",
        color: "White",

    },
    staaaart:{
      
        height:"3.125vw",
        width: "9.495vw",
        borderRadius: "5.208vw",
        background: "#EAB73B",
        border: "none",
    },
    cooome: {
        color: "#EAB73B",
    },
    launcch:{
        paddingLeft: "20.938vw",
        paddingTop: "2.823vw"

    },
    launcchh1:{
        width: "1.823vw",
        height: "2.292vw",
        color: "#FFFFFF"

    },
    alllk:{
        color: "#FFFFFF",
        width: "28.542vw",
        height: "5vw",
        fontSize: "0.833vw"

    },
    Sooon:{
        color: "#EAB73B",
        fontSize: "2.083vw",
        
        '@media (max-width: 650px)' : {
            fontSize: "0.5vw",
          }

    },
    bbbtnnnt:{
        height:"3.125vw",
        width: "9.495vw",
        borderRadius: "5.208vw",
        background: "#EAB73B",
        border: "none",

    },
    rooock:{
        width: "33.594vw",
        height: "28.594vw",       
    },

    feww: {
        color: '#000000',
        height: "2.292vw",
        width: "8.021vw",
        fontSize: "1.042vw"
    },
    ebbbuls: {
        height: "7.500vw",
        width: "28.542vw",
        color: "#000000",
        fontSize: "0.833vw",
    },
    uuul: {
        height: "0.729vw",
        color:"#000000",
        fontSize: "0.729vw",

    },
    lastt: {
        display: "flex",
    },
    ccccsa: {
        paddingLeft: "4.958vw",    
    },
    jsak:{
        paddingLeft: "10.296vw",
        paddingTop: "4vw"

    },
    ghds:{
        height: "21.875vw",
        width: "31.719vw"
    },
    tditem:{
        paddingLeft:"6.786vw",
        paddingTop:"3.690vw",
        fontSize:"1.131vw"
    },
    tditem2:{
       width:'12.381vw'
    },
    tditem1:{
        width:'11.667vw',
        height:'2.381vw'
    },
    tablediv:{
        paddingLeft:"5.083vw",
        position:'relative',
        top:'-13vw',
        '@media (max-width: 650px)' : {
            paddingLeft:"0",
          }
    },
    tditemimg:{
        paddingLeft:"6.786vw",
        paddingTop:"3.690vw"
    },
    th:{
        fontSize:'1vw',
        color:'#AAAA',
        paddingLeft:"6vw"
    },
    shoppi: {
        width: "18.227vw",
        height: "15.820vw",
    },

});

export default function Landing() {
    const history = useHistory();

    const classes = useStyles();

  return (
    <>
    <div>
                        <NavBarcopy />
                    </div>
    <div style={{ overflow: 'hidden', background: 'black' }}>
            <Grid container>
                <Grid item xs={12}>
                    
                </Grid>

                <Grid item xs={6}>
                    <div>
                        <img className={classes.img22} src={Crypto} alt="" />
                    </div>
                    <div className={classes.h1live}>

                        <h1>Live your crypto<br />
                            trading dream </h1>
                    </div>
                    <div className={classes.trade}>
                        <h3>
                            Trade your way to the top <br />
                            Take the Wheel, You’re in Control
                        </h3>
                    </div>
                    <div className={classes.paragraphh1}>
                        <p>
                            Whether you're looking to buy bitcoin for the first time or you're <br />
                            already a pro, or you want to launch your own coin, we've got <br />
                            you covered!
                        </p>
                    </div>
                    <div className={classes.btnnndiv}>
                        <Link to='/withdrawc'><button className={classes.btnnn}>Get Started</button></Link>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div>
                        <img className={classes.img11} src={Ccrypto1} />
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div>
                        <Card className={classes.Cardsize} >
                            <CardContent>
                                <div className={classes.cardp}>
                                    <div>
                                        <div>
                                            <h1 style={{color:'#EAB73B', fontSize:"1.786vw"}}>$4.27</h1>
                                        </div>
                                        <div>
                                            <p style={{color:'#FFFF', fontSize:"0.78"}}>
                                                Copy Trading
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <div>
                                            <h1 style={{color:'#EAB73B', fontSize:"1.786vw"}}>$4.27</h1>
                                        </div>
                                        <div>
                                            <p style={{color:'#FFFF', fontSize:"0.78"}}>
                                                Copy Trading
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <h1 style={{color:'#EAB73B', fontSize:"1.786vw"}}>$4.27</h1>
                                        </div>
                                        <div>
                                            <p style={{color:'#FFFF', fontSize:"0.78"}}>
                                                Copy Trading
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <h1 style={{color:'#EAB73B', fontSize:"1.786vw"}}>$4.27</h1>
                                        </div>
                                        <div>
                                            <p style={{color:'#FFFF', fontSize:"0.78"}}>
                                                Copy Trading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                </Grid>
                <div className={classes.activ1}>
                    <h1 className={classes.activa}>Active</h1>
                </div>
                <div className={classes.imgflex}>
                    <div>
                        <img className={classes.a1234} src={a1} alt="" />
                    </div>
                    <div>
                        <img className={classes.a1234} src={a2} alt="" />
                    </div>
                    <div>
                        <img className={classes.a1234} src={a3} alt="" />
                    </div>
                    <div>
                        <img className={classes.a1234} src={a4} alt="" />
                    </div>
                </div>
                <Grid item xs={12}>
                    <div className={classes.popular}>
                        <h1>Popular crypto</h1>
                    </div>
                    <div className={classes.buy}>
                        <h3>Buy and sell 250+ cryptocurrencies with 20+ fiat currencies using <br /> bank transfers or your credit/debit card.</h3>
                    </div>
                </Grid>
                <Grid item xs={12}>
                <table style={{color:'#ffff'}} className={classes.tablediv}>
  <tr>
    <th className={classes.th}>Market</th>
    <th className={classes.th}>Price</th>
  <th className={classes.th}>Volume</th>
  <th className={classes.th}>24H Change</th>
    <th></th>
  <th></th>
  </tr>
  <tr>
    <td className={classes.tditemimg}> <img src={t11} className={classes.tditem1}/> </td>
    <td className={classes.tditem}>$4,7496</td>
    <td className={classes.tditem}>$56,290.30</td>
    <td className={classes.tditem}>+1.68%</td>
    <td className={classes.tditemimg}><img src={t21} className={classes.tditem2}/></td>
    <td className={classes.tditem}>$56,290.30</td>
  </tr>
  <tr>
    <td className={classes.tditemimg}><img src={t12} className={classes.tditem1}/></td>
    <td className={classes.tditem}>$4,7496</td>
    <td className={classes.tditem}>$56,290.30</td>
    <td className={classes.tditem}>+1.68%</td>
    <td className={classes.tditemimg}><img src={t22} className={classes.tditem2}/></td>
    <td className={classes.tditem}>$56,290.30</td>
  </tr>
  <tr>
    <td className={classes.tditemimg}><img src={t13} className={classes.tditem1}/></td>
    <td className={classes.tditem}>$4,7496</td>
    <td className={classes.tditem}>$56,290.30</td>
    <td className={classes.tditem}>+1.68%</td>
    <td className={classes.tditemimg}><img src={t23} className={classes.tditem2}/></td>
    <td className={classes.tditem}>$56,290.30</td>
  </tr>
  <tr>
    <td className={classes.tditemimg}><img src={t14} className={classes.tditem1}/></td>
    <td className={classes.tditem}>$4,7496</td>
    <td className={classes.tditem}>$56,290.30</td>
    <td className={classes.tditem}>+1.68%</td>
    <td className={classes.tditemimg}><img src={t24} className={classes.tditem2}/></td>
    <td className={classes.tditem}>$56,290.30</td>
  </tr>
  <tr>
    <td className={classes.tditemimg}><img className={classes.tditem1} src={t15} /></td>
    <td className={classes.tditem}>$4,7496</td>
    <td className={classes.tditem}>$56,290.30</td>
    <td className={classes.tditem}>+1.68%</td>
    <td className={classes.tditemimg}><img src={t25} className={classes.tditem2}/></td>
    <td className={classes.tditem}>$56,290.30</td>
  </tr>
</table>
                </Grid>
                <Grid item xs={12}>
                    {/* Table */}
                </Grid>
                <Grid item xs={6}>
                    <div className={classes.staking}>

                        <div>
                            <h1 className={classes.SSStak}>Staking</h1>
                        </div>
                        <div>
                            <h3 className={classes.yearly}>Earn Up To 23% yearly on <br/>
                                your crypto</h3>
                        </div>
                        <div>
                            <p className={classes.Thiss}>This new staking platform by ebulls offers a variety of features to <br />
                                users. One of the most notable features is the ability to stake <br />
                                your own tokens. This means that you can earn rewards for<br />
                                holding and participating in the network. </p>
                        </div>
                        <div>
                            <p className={classes.ifffff}>
                                If you're looking for a new staking platform, be sure to<br />
                                check out ebulls! <br />
                                The more tokens you stake, the higher the rewards.
                            </p>
                        </div><br/><br/>
                        <div>
                            <button className={classes.btnStart}>Start Earring</button>
                        </div>

                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className={classes.mmmmmmmm}>
                        <img className={classes.mooobb} src={mob} alt="" />
                    </div>
                </Grid>
                <Grid item xs={4} className={classes.rooooo} style={{ color: '#ffff' }}>
                    <div>
                        <img className={classes.bottro} src={robot} alt="" />
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div>
                        <h1 className={classes.roo1}>CRYPTO TRADING</h1>
                    </div>
                    <div>
                        <h1 className={classes.ro2}>BOT</h1>
                    </div>
                    <div>
                        <p className={classes.roo3}>
                            Our Arbitrage Trading Bot is a smart, automated cryptocurrency<br />
                            arbitrage trading robot. It is
                            equipped with the most advanced,<br />
                            cutting-edge technology that automatically allows it to buy and<br />
                            sell crypto pairs across different exchanges and exploit the price <br />
                            differences between them.
                        </p>
                    </div>

                </Grid>
                <Grid item xs={4}>
                    <div>
                        <h1 className={classes.cooome}>COMING SOON</h1>
                    </div>
                    <div>
                        <button className={classes.staaaart}>Start Now</button>
                    </div>

                </Grid>
                <Grid className={classes.launcch} item xs={6}>
                    <div>
                        <h1 className={classes.launcchh1}>launchpad</h1>
                    </div>
                    <div>
                        <p className={classes.alllk}>ebulls staking platform that allows users to earn rewards for holding <br/>
                         and stake their cryptocurrencies. The platform provides a safe and <br/>
                         easy way to earn interest on your digital assets,and helps <br/>
                        to promote the adoption of cryptocurrencies.</p>
                    </div>
                    <div>
                        <h1 className={classes.Sooon}>COMING SOON</h1>
                    </div>
                    <div>
                        <button className={classes.bbbtnnnt}>Start Now</button>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div>
                        <img className={classes.rooock} src={rocket} alt="" />
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <Card style={{background:"#EAB73B"}}>
                        <CardContent>
                            <Grid container >
                                <Grid className={classes.jsak} item xs={6}>
                                    <div>
                                        <img className={classes.ghds} src={card1img} alt="" />
                                    </div>
                                   
                                </Grid>
                                <Grid item xs={6}>
                                    <div>
                                        <p className={classes.ebbbuls}>ebulls soon plans to launch an e-commerce store selling household <br/>
                                            items, kitchen equipments and appliances, and FMCG products. We  <br/>
                                            are striving to build the best service in the niche where users will be  <br/>
                                            able to buy various products online, just like they do on Amazon or  <br/>
                                            eBay, but with added benefits of shopping through Ebulls Crypto Exchange.</p>
                                    </div>
                                    <div className={classes.lastt}>
                                       
                                        <div>
                                            <h2 className={classes.feww}>A few benefits:</h2>
                                            <ul className={classes.uuul}>
                                                <li>Save money</li>
                                                <li>Discount on products</li>
                                                <li>Better quality products</li>
                                                <li>Lower price</li>
                                            </ul>
                                        </div>
                                        <div className={classes.ccccsa}>
                                            <img className={classes.shoppi} src={cardimg} alt="" />
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <div>
                <Footer />
            </div>

        </div>
        </>
  )
}
