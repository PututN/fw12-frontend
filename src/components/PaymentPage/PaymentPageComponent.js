import PaymentInfo from './PaymentInfo'
import ChoosePayment from './ChoosePayment'
import PersonalInfo from './PersonalInfo'

const PaymentPageComponent = () =>{
    return (
        <div className="bg-[#F2DEBA] px-20 py-20">
        <div className="flex">
          <div className="w-2/3">
            <PaymentInfo />
            <ChoosePayment />
          </div>
          <div className="w-1/3">
            <PersonalInfo />
          </div>
        </div>
      </div>
      )
}

export default PaymentPageComponent