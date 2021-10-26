import HotelPage from '@/components/HotelPage'
import HotelCards from '@/components/HotelCards'

export const routes = [
    
    { path: '/', component: HotelCards },
    { path: '/hotel/:id', component: HotelPage, props: true}
   
  ]