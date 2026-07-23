import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/home/HomePage.tsx";
import LoginPage from "./pages/login/LoginPage.tsx";
import RegisterPage from "./pages/register/RegisterPage.tsx";
import RecruiterDashboardPage from "./pages/recruiter/RecruiterDashboardPage.tsx";
import RecruiterInterviewsPage from "./pages/recruiter/RecruiterInterviewsPage.tsx";
import RecruiterQuestionBankPage from "./pages/recruiter/RecruiterQuestionBankPage.tsx";
import RecruiterSettingsPage from "./pages/recruiter/RecruiterSettings.tsx";
import RecruiterTemplatesPage from "./pages/recruiter/RecruiterTemplatesPage.tsx";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/recruiter/dashboard" element={<RecruiterDashboardPage />} />
      <Route path="/recruiter/interviews" element={<RecruiterInterviewsPage />} />
      <Route path="/recruiter/question-bank" element={<RecruiterQuestionBankPage />} />
      <Route path="/recruiter/templates" element={<RecruiterTemplatesPage />} />
      <Route path="/recruiter/settings" element={<RecruiterSettingsPage />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;