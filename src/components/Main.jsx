import './Main.scss'
import Video from './Video'
import { videosData } from '../data'

console.log(videosData);
const videos = videosData.map(t => <Video 
    key={t.id}
    title={t.title} 
    channelName={t.channelName}
    stats={t.stats}
    uploadTime={t.uploadTime}
    linkUrl={t.linkUrl}
    thumUrl={t.thumUrl}
    channelPic={t.channelPic}
    />)

    console.log(videos);

export default function Main() {
    return (
        <div className='main'>
            {videos}
        </div>
    )
}