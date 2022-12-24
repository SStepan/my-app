import './Video.scss'

export default function Video(props) {
    return (
        <div className='video'>
            <div className='thumbnail'>
                <a href={props.linkUrl}>
                    <img src={props.thumUrl} className='thumbnail-image' />
                </a>
            </div>
            <div className='video-info-grid'>
                <div className="channel-picture">
                    <img src={props.channelPic} />
                </div>
                <div className='video-info'>
                    <div className='title'>{props.title}</div>
                    <div className='channel-name'>{props.channelName}</div>
                    <div className='stats'>{props.stats} · {props.uploadTime}</div>
            
                </div>
            </div>
        </div>
    )
}