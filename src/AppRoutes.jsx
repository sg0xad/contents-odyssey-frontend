import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Root from './pages/Root'
import Home from './pages/Home'
import Agree from './pages/signup/Agree'
import Join from './pages/signup/Join'
import ContentsList from './pages/ContentsList'
import WritePost from './pages/post/WritePost'
import Group from './pages/Group'
import Profile from './pages/Profile'
import Support from './pages/Support'


function AppRoutes() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root/>} />
        <Route path="/agree" element={<Agree/>} />
        <Route path="/join" element={<Join/>} />
y
        <Route path="/home" element={<Home/>} />
        <Route path="/write" element={<WritePost/>} />

        <Route path="/list" element={<ContentsList/>} />
        <Route path="/group" element={<Group/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/support" element={<Support/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
