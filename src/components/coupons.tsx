import Gif1 from '../images/love-cute.gif'
import CouponTicket from './couponticket';

const Coupons = () => {
    return ( 
        <div className="mt-10 pb-10 bg-[#FFFF] border-8 border-secondary rounded-lg">
             
            <h1 className="pt-8 text-3xl font-bold text-secondary">Love Coupons </h1>
            <h2 className="text-txt-color">These are coupons you can redeem, babe. redeemable 3 each. Screenshot mo lang and sent it to me.</h2>
            <div className="flex flex-wrap justify-center gap-3">
                <CouponTicket 
                title={"Reedem this coupon for:"} 
                description={"Getting out of an agrument"}/>
                <CouponTicket 
                title={"Reedem this coupon for:"} 
                description={"Home cook meal"}/>
                 <CouponTicket 
                title={"Reedem this coupon for:"} 
                description={"Cuddle"}/>
                 <CouponTicket 
                title={"Reedem this coupon for:"} 
                description={"Sport Day"}/>
                 <CouponTicket 
                title={"Reedem this coupon for:"} 
                description={"Gran you a wish"}/>
                 <CouponTicket 
                title={"Reedem this coupon for:"} 
                description={"Yes All Day"}/>
                 <CouponTicket 
                title={"Reedem this coupon for:"} 
                description={"Random compliment"}/>
                 <CouponTicket 
                title={"Reedem this coupon for:"} 
                description={"Stay at ur home "}/>
                 <CouponTicket 
                title={"Reedem this coupon for:"} 
                description={"Family day (w/ Koomi)"}/>
                 <CouponTicket 
                title={"Reedem this coupon for:"} 
                description={"Deep talk"}/>
            </div>
            
        </div>
     );
}
 
export default Coupons;