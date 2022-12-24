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
                <img src={HomeImg} />
                <div>Home</div>
            </div>
            <div className='sidebar-link'>
                <img src={ExploreImg} />
                Explore
            </div>
            <div className='sidebar-link'>
                <img src={SubscriptionsImg} />
                Subscriptions
            </div>
            <div className='sidebar-link'>
                <img src={OriginalsImg} />
                Originals
            </div>
            <div className='sidebar-link'>
                <img src={MusicImg} />
                Youtube Music
            </div>
            <div className='sidebar-link'>
                <img src={LibraryImg} />
                Library
            </div>
        </div>
    )
}