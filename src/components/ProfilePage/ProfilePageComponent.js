import ProfileCard from './ProfileCard'
import MenuProfile from './MenuProfile'
import Details from './Details'
import AccountPrivacy from './AccountPrivacy'

const ProfilePageComponent = () =>{
    return (
        <div className="bg-[#F2DEBA] px-20 py-20">
        <div className="flex">
          <div className="w-1/4">
            <ProfileCard />
          </div>
          <div className="w-3/4 ml-7">
            <MenuProfile />
            <Details />
            <AccountPrivacy />
          </div>
        </div>
      </div>
      )
}

export default ProfilePageComponent