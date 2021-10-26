import Home from '@/views/Home'
import HotelPage from '@/views/HotelPage'


export const routes = [
    
    { path: '/', component: Home },
    { path: '/hotel/:id', component: HotelPage, props: true}
   
  ]