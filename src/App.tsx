import './index.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BasicForm from './components/BasicForm/BasicForm.component';
import EmailForm from './components/EmailForm/EmailForm.component';
import PasswordForm from './components/PasswordForm/PasswordForm.component';
import AgeForm from './components/AgeForm/AgeForm.component';
import GenderForm from './components/GenderForm/GenderForm.component';
import AgreementForm from './components/AgreementForm/AgreementForm.component';
import URLForm from './components/URLForm/URLForm.component';
import PhoneForm from './components/PhoneForm/PhoneForm.component';
import AddressForm from './components/AddressForm/AddressForm.component';
import TagsForm from './components/TagsForm/TagsForm.component';
import Home from './components/Home/Home.component';

function App() {
  return (
    <Router>
      <nav className="p-4 bg-gray-200 flex align-center justify-center">
        <ul className="flex gap-4 items-center">
          <li>
            <Link to="/basic">Basic Form</Link>
          </li>
          <li>
            <Link to="/email">Email Form</Link>
          </li>
          <li>
            <Link to="/password">Password Form</Link>
          </li>
          <li>
            <Link to="/age">Age Form</Link>
          </li>
          <li>
            <Link to="/gender">Gender Form</Link>
          </li>
          <li>
            <Link to="/agreement">Agreement Form</Link>
          </li>
          <li>
            <Link to="/url">URL Form</Link>
          </li>
          <li>
            <Link to="/phone">Phone Form</Link>
          </li>
          <li>
            <Link to="/address">Address Form</Link>
          </li>
          <li>
            <Link to="/tags">Tags Form</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basic" element={<BasicForm />} />
        <Route path="/email" element={<EmailForm />} />
        <Route path="/password" element={<PasswordForm />} />
        <Route path="/age" element={<AgeForm />} />
        <Route path="/gender" element={<GenderForm />} />
        <Route path="/agreement" element={<AgreementForm />} />
        <Route path="/url" element={<URLForm />} />
        <Route path="/phone" element={<PhoneForm />} />
        <Route path="/address" element={<AddressForm />} />
        <Route path="/tags" element={<TagsForm />} />
      </Routes>
    </Router>
  );
}

export default App;
