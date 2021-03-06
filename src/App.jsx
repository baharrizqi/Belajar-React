import React from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom'
import Cookie from 'universal-cookie'
import { connect } from 'react-redux'
import './App.css';
import './bootstrap.css';
import ProductCard from './views/components/ProductCard';
import Brave from './brave.png'
import Crazy from './crazyRich.png'
import Handmaid from './handmaid.png'
import Educated from './educated.png'
import CounterScreen from './views/screens/CounterScreen';
import InputScreen from './views/screens/InputScreen';
import InputScreen2 from './views/screens/InputScreen2';
import AuthScreen from './views/screens/AuthScreen';
import RegisterScreen from './views/screens/RegisterScreen';
import LoginScreen from './views/screens/LoginScreen';
import LifecycleScreen from './views/screens/LifecycleScreen';
import HomeScreen from './views/screens/HomeScreen';
import PageNotFound from './views/screens/PageNotFound';
import Navbar from './views/components/Navbar';
import TodoReduxScreen from './views/screens/TodoReduxScreen';
import NavbarTemp from './views/components/NavbarTemp';
import ProfileScreen from './views/screens/ProfileScreen';
import { userKeepLogin } from './redux/actions'

const cookieObject = new Cookie()

class App extends React.Component {
  arrBooks = [
    {
      author: "Margaret Atwood",
      title: "The handmaid's tale",
      review: 4,
      desc: `This novel can be interpreted as a double narrative, Offred's tale and the handmaids' tales. The night...`,
      price: 18.99,
      discount: 60,
      image: Handmaid,
      stock: 7,
    },
    {
      author: "Kevin Kwan",
      title: "Crazy rich asians",
      review: 5,
      desc: `the outrageously funny debut novel about three super-rich, pedigreed Chinese families and the gossip...`,
      price: 24.12,
      discount: 80,
      image: Crazy,
      stock: 0,
    },
    {
      author: "Aldous Huxley",
      title: "Brave new world",
      review: 3,
      desc: `dystopian novel written in 1931 by English author Aldous Huxley, and published in 1932. Largely set in...`,
      price: 18.99,
      discount: 60,
      image: Brave,
      stock: 3,
    },
    {
      author: "Tara Westover",
      title: "Educated",
      review: 4.5,
      desc: `It is a tale of fierce family loyalty and of the grief that comes with severing the closest of ties. With...`,
      price: 34.21,
      discount: 0,
      image: Educated,
      stock: 3,
    },
  ];

  renderArr = () => {
    return this.arrBooks.map(val => {
      return (
        <ProductCard productData={val} />
      )
    })
  }

  componentDidMount() {
    let cookieResult = cookieObject.get("authData")
    console.log(cookieResult);
    if (cookieResult) {
      this.props.userKeepLogin(cookieResult)
    }

  }

  render() {
    return (
      <>
        <NavbarTemp />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/auth" component={AuthScreen} />
          <Route exact path="/input" component={InputScreen2} />
          <Route exact path="/register" component={RegisterScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/counter" component={CounterScreen} />
          <Route exact path="/todo" component={TodoReduxScreen} />
          <Route exact path="/profile/:username" component={ProfileScreen} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = {
  userKeepLogin,
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
