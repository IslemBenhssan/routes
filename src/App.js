import logo from './logo.svg';
import './App.css';
import CarList from './Components/CarList';
import { ChakraProvider } from '@chakra-ui/react'
import { Routes, Route,BrowserRouter as Router  } from "react-router-dom";
import About from './Components/About';
import Contact from './Components/Contact';
import NaveBare from './Components/NaveBare';
import Details from './Components/Details';

function App() {
  const data = [

    {
      id: 1, name: "Autotrader", pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu2tLMHe9JhaTzL0dTqmjLUuO-MuZ0vqDSmMr6axvs2oCzIu7Y8MMGlAMpSZ1s-2ZHsyw&usqp=CAU"
    },
    {
      id: 2, name: "Lamborghini Models", pic: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/2023/03_29_revuelto/gate_models_s_02.jpg"
    }, {
      id: 3, name: "ZigWheels", pic: "https://media.zigcdn.com/media/model/2022/Jun/kia-ev6-2_270x180.jpg"
    }, {
      id: 4, name: "VW Model Lineup ", pic: "https://media.vw.mediaservice.avp.tech/media/fast/H4sIAAAAAAAAAE2Uu84dNRDHNwkhiCIIUIToo09IkRh771scoVyAAkFSoFCkOBrveu1dey_H9nrPtxUPlIfgJahoeAEqGhokJlIKqt_-Z-c_tseXt38l9zeX3Hvz5tkP_375SKk_qrtJcl2TJLlD8btvnr39-4t_Pvzo5z_fh-9_l9wPmxPLHUp5dffjYUIlYVyl-iR5QKHkXpI8-JXw2zuRPHy4Obuiw-nrTopNffpV2_dd0zLRpX1R8IY1si_SoihFV6VlynjVpV3Vt-yzJPng980jdOW09JjlvVvmsLYga55OY-6kjQwhZWkGj4MblJLuPLmzXjnw_MmarikU5ZPjCoiYK0bYJOWiwK3jhKXUFBSOrwgou2KYANXEFCkdeUf_BpFvFLQx96TmUNsS0MvyOhOURAr6SU1U0_tibAED8mtKEGNDauuafSR4rAXgHusxA4GaG0EII9eEyO0MwgrBAkEZQSnLzj0hIIsTwTUHA7F3TeDQakx1Ae3StoxBG65qZ9Chy3wKXSusJsgh66lrvebjOyxlTyl9VIyDbOU8MJDd3kTCqmtMQfqhoirS-41m3WPHyN7rPZKvj76i1vWH76nXqpOF7UDJuVYjKKPZrSJEy3JQ0zKzEpTDOmSg_Kr4AVru9cRBDz6bSRk0Ogft93pwoLfOUFuH2W9FSwj5nMHgfE5NNuhMrcDYg93mYKb14howi84uBI9FywmbocmbTRuTgcW2MBVYoTPaP9uul0sNtlukL8FKtMwSZk4jWLUPtCI7YK04WIOSOmFNW5XkW1y1knKYHmRwEWMK1svaBZgGk3UpTEbKicG0BMt7mDFWW4BlttIWsOKkyL4q7ENOMNUqwCHy2RK6rWSEpcYIrl2ky8B1pjIlODmMGYf3B9r5mF8cuK2fjxw8ivyagReujgp8p3PJCE41ErzEOFTg-yOlrfLKNCupQcw5ZQ4ys-QbdI4Eg-OVUmZd3xKWubhewa_uojlhq24JTpdDCd7r3PTgQ5-OgqCZaAlBjeQLND8qHV0sR_C7q6803u7rmXzHxmYBwcSc9iGsVmwpBNcXPSfsWYsQaGHYQ4jystUQ9o3T5Q63K5cCojA8MIi94DRQDLE5IuweK1kRfK56OFBc9gIO4dId4egnFggmZqKCY7KWLt7hPXMajk03tEePn7548f23L88vf_rf5zdyjgM9JJOcw-n1L-fnz1-n52eL7W72oQv6xJuU3Wg5KB1OTclu0K4aT8Ft8qbFSTo8PX39Kn1xfnpOz4zxG5zpAQzDMvvTzbR00joZB0_69OMrfqPsIpCO027kradly7mVp_Tze1TjP43r53l5BQAA.webp?width=864"
    },
  ]

  return (
    <div className="App">
      
      <ChakraProvider>
        <Router>
      <NaveBare/>
        <Routes>

          <Route path='/' element={ <CarList cars={data} />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/details/:id"  element={<Details  cars={data}/>}/>

        </Routes>
        </Router>

     
      </ChakraProvider>
    </div>
  );
}

export default App;
