import './Header.scss'
import HamburgerImg from '../images/hamburger-menu.svg'
import YoutubeImg from '../images/youtube-logo.svg'
import SearchImg from '../images/search.svg'
import UploadImg from '../images/upload.svg'
import AppsImg from '../images/youtube-apps.svg'
import NotificationsImg from '../images/notifications.svg'
import VoiceImg from '../images/voice-search-icon.svg'

export default function Header() {
    return (
        <div className='header'>
            <div className="left-section">
                <img className='hamburger-img' src={HamburgerImg} />
                <img className='youtube-img' src={YoutubeImg} />
            </div>

            <div className='middle-section'>
                <input placeholder='Search' className='search-input' type="text" />
                <button className='search-button'>
                    <img className='search-img' src={SearchImg} alt="" />
                </button>

                <button className='voice-button'>
                    <img src={VoiceImg} className='voice-img' />
                </button>
            </div>

            <div className='right-section'>
                <img className='services' src={UploadImg} />
                <img className='services' src={AppsImg} />
                <img className='services' src={NotificationsImg} />
            </div>
        </div>
    )
}