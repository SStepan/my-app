import './Sidebar.scss'
import HomeImg from '../images/sidebar/home.svg'
import ExploreImg from '../images/sidebar/explore.svg'
import SubscriptionsImg from '../images/sidebar/subscriptions.svg'
import OriginalsImg from '../images/sidebar/originals.svg'
import MusicImg from '../images/sidebar/youtube-music.svg'
import LibraryImg from '../images/sidebar/library.svg'

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar-link'>
                <img src={HomeImg} className />
                <div>Home</div>
            </div>
            <div className='sidebar-link'>
                <img src={ExploreImg} className />
                Explore
            </div>
            <div className='sidebar-link'>
                <img src={SubscriptionsImg} className />
                Subscriptions
            </div>
            <div className='sidebar-link'>
                <img src={OriginalsImg} className />
                Originals
            </div>
            <div className='sidebar-link'>
                <img src={MusicImg} className />
                Youtube Music
            </div>
            <div className='sidebar-link'>
                <img src={LibraryImg} className />
                Library
            </div>
        </div>
    )
}