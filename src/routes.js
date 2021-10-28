import Home from '@/views/Home'
import HotelPage from '@/views/HotelPage'
import ReservationPage from '@/views/ReservationPage'



export const routes = [
    
    { path: '/', component: Home },
    { path: '/reservation', component: ReservationPage, props:true, name:"reservation" },
    { path: '/hotel/:id', component: HotelPage, props: true}
   
  ]