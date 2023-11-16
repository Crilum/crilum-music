import SongStoreIcon from "./songStoreIcon";

export default function SongStoreIconSet({ songName, spotify, appleMusic, amazonMusic }) {
    return (
        <div className="song-store-icon-set">
            <SongStoreIcon songName={songName} store="Spotify" url={spotify} />
            <SongStoreIcon songName="Autumn Sea" store="Apple Music" url={appleMusic} />
            <SongStoreIcon songName="Autumn Sea" store="Amazon Music" url={amazonMusic} />
        </div>
    )
}