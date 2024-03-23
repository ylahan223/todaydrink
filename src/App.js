import { isMobile } from 'react-device-detect';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Root from './pages/Root';
import NotFound from './pages/NotFound';
import MobileRoot from './Mobile/MobileRoot';
import WineList from './pages/WineList';
import SojuList from './pages/SojuList';
import WineInfo from './pages/WineInfo';
import SojuInfo from './pages/SojuInfo';
import MobileHome from './Mobile/MobileHome';
import MobileWineList from './Mobile/MobileWineList';
import MobileSojuList from './Mobile/MobileSojuList';
import MobileWineInfo from './Mobile/MobileWineInfo';
import MobileSojuInfo from './Mobile/MobileSojuInfo';

function App() {

  let router = null

  if (isMobile) {
    router = createBrowserRouter([
      {
        path: '/',
        element: <MobileRoot />,
        errorElement: <NotFound />,
        children: [
          { index: true, element: <MobileHome /> },
          { path: '/wine', element: <MobileWineList /> },
          { path: '/wine/:wineId', element: <MobileWineInfo /> },
          { path: '/soju', element: <MobileSojuList /> },
          { path: '/soju/:sojuId', element: <MobileSojuInfo /> }
        ]

      }
    ])
  } else {
    router = createBrowserRouter(
      [
        {
          path: '/',
          element: <Root />,
          errorElement: <NotFound />,
          // 루트의 아울렛을 말함 children. 아울렛에 들어가는 컴퍼넌트 설계
          children: [
            // 시작하자 마자 보여줄 index, 홈을 보여주겟다
            { index: true, element: <Home /> },
            // 경로 추가
            { path: '/wine', element: <WineList /> },
            { path: '/wine/:wineId', element: <WineInfo /> },
            { path: '/soju', element: <SojuList /> },
            { path: '/soju/:sojuId', element: <SojuInfo /> }
            // //   : 어떠한 파라미터값 변수 로 이동할 곳 지정
            // { path: '/product/:productId', element: <ProductDetail /> }

          ]
        }
      ]
    )
  }


  return (
    <>
      <RouterProvider router={router} />



    </>
  );
}

export default App;
