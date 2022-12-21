import './Header.scss'
import HamburgerImg from '../images/hamburger-menu.svg'
import YoutubeImg from '../images/youtube-logo.svg'
import SearchImg from '../images/search.svg'

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

            </div>

            <div className='right-section'>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
        </div>
    )
}