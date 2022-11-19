import Privacy from "./components/Privacy";
import FAQs from "./components/FAQs";
import Terms from "./components/Terms";
import Login from "./components/Login";
import Phone from "./components/Phone";
import Register from "./components/Register";
import ForgotPass from "./components/ForgotPass";
import ForgotEmail from "./components/ForgotEmail";
import ResetPass from "./components/ResetPass";
import OtpPhone from "./components/OtpPhone";
import OtpEmail from "./components/OtpEmail";
import PassReset from "./components/PassReset";
import Notification from "./components/Notification";
import Transfer from "./components/Transfer";
import WithdrawC from "./components/WithdrawC";
import WithCrypto1 from "./components/WithCrypto1";
import Flat from "./components/Flat";
import Staking from "./components/Staking";
import Stack from "./components/Stack";
import Landing from "./components/Landing";
import { BrowserRouter, Route, Switch } from 'react-router-dom';




function App() {
  return (
    <div className="App">
<BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Register} />
          <Route exact path="/phone" component={Phone} />
          <Route exact path="/otp-phone" component={OtpPhone} />
          <Route exact path="/otp-email" component={OtpEmail} />
          <Route exact path="/reset-pass" component={ResetPass} />
          <Route exact path="/forgot-email" component={ForgotEmail} />
          <Route exact path="/forgotpass" component={ForgotPass} />
          <Route exact path="/pass-reset" component={PassReset} />
          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/terms" component={Terms} />
          <Route exact path="/faqs" component={FAQs} />
          <Route exact path="/notification" component={Notification} />
          <Route exact path="/transfer" component={Transfer} />
          <Route exact path="/withdrawc" component={WithdrawC} />
          <Route exact path="/withcrypto" component={WithCrypto1} />
          <Route exact path="/stack" component={Stack} />
          <Route exact path="/staking" component={Staking} />
          <Route exact path="/landing" component={Landing} />
          <Route exact path="/flat" component={Flat} />
     
        </Switch>
      </BrowserRouter>
    






    {/* <Login /> */}
    {/* <Phone /> */}
    {/* <Flat /> */}
    {/* <With1 /> */}
    {/* <Stack /> */}
    {/* <Register /> */}
    {/* <ForgotPass /> */}
    {/* <ForgotEmail /> */}
    {/* <ResetPass /> */}
    {/* <Notification /> */}
    {/* <OtpPhone/> */}
    {/* <WithCrypto1 /> */}
    {/* <OtpEmail /> */}
{/* <Privacy /> */}
{/* <Transfer /> */}
{/* <WithdrawC /> */}
{/* <FAQs /> */}
  {/* <PassReset /> */}
{/* <Terms /> */}
{/* <Landing /> */}
{/* <Staking /> */}
{/* <NavWith/> */}
{/* <Footer /> */}
{/* <NaaavBarcc /> */}
</div>
  );
}

export default App;
