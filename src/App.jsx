import { CssBaseline, ThemeProvider } from '@mui/material'
import { ColorModeContext, useMode } from './theme'
import { Routes, Route } from "react-router-dom";
import { useState, lazy, Suspense } from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import Topbar from './scenes/global/Topbar'
import SidebarList from './scenes/global/Sidebar'
import Dashboard from "./scenes/dashboard";
import { lazyLoad } from './lazyLoad';

const Team = lazyLoad("./scenes/team")
const Contacts = lazyLoad("./scenes/contacts")
const Invoices = lazyLoad("./scenes/invoices")
const Form = lazyLoad("./scenes/form")
const Bar = lazyLoad("./scenes/bar")
const Line = lazyLoad("./scenes/line")
const Pie = lazyLoad("./scenes/pie")
const FAQ = lazyLoad("./scenes/faq")
const Geography = lazyLoad("./scenes/geography")
const Calendar = lazyLoad("./scenes/calendar")

function App() {
  const [theme, colorMode] = useMode(0)
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          <ProSidebarProvider>
            <SidebarList isSidebar={isSidebar} />
          </ProSidebarProvider>
          <main className='content'>
            <Topbar />
            <Suspense fallback={<div> Loading...</div>} >
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/geography" element={<Geography />} />
              </Routes>
            </Suspense>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
