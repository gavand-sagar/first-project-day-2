import logo from './logo.svg';
import './App.css';
import MyButton from './MyButton';
import Panel from './Panel';
import Upper from './Upper';
import Capitalize from './Capitalize';
import ClickDemo from './ClickDemo';
import ConditionalRenderingDemo from './ConditionalRenderingDemo';
import FormDemo from './FormDemo';
import LoginForm from './LoginForm';
import Login from './Login';
import Profile from './Profile';
import { Link, Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import ApiTest from './ApiTest';
import PostsApi from './PostsApi';
import CustomApi from './CustomApi';
import CustomCreateApi from './CustomCreateApi';

export default function App() {
  return (
    <div className="App">

      
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/demo' element={<ConditionalRenderingDemo />} />
        <Route path='/ApiTest' element={<ApiTest/>}/>
        <Route path='/PostsApi' element={<PostsApi/>}/>
        <Route path='/CustomApi' element={<CustomApi/>}/>
        <Route path='/CustomCreateApi' element={<CustomCreateApi/>}/>
        <Route path='/' element={<Profile />} />
      </Routes>



      {/* <FormWithHook/> */}

      {/* <ConditionalRenderingDemo/> */}

      {/* <Upper content="abc"/>
      <Upper content="pqr"/>
      <hr/>
      <Capitalize content="aMiT"/>
      <Capitalize content="sagar"/>
      <Capitalize content="rAhul"/>
      <Capitalize content="sagar"/>
      
      <hr/>

      <MyButton content="downLOAd"/> */}

      {/* <Panel heading="react" content="A Javascript Library" rating={4}/>
      <Panel heading="mySQl" content="A Relational Database" rating={4}/>
      <Panel heading="Java" content="An OOP Programming Language"  rating={5}/>
      <Panel heading="Spring" content="A Java Framework"  rating={3}/> */}
    </div>
  );
}


