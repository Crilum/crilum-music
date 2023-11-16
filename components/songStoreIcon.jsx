import Link from "next/link";
import Image from "next/image";

export default function SongStoreIcon({ songName, store, url}) {
    return (
        <Link href={url}>
            <Image src={`/icons/${store}.jpg`} width={34} height={34} className="song-store-icon" alt={`${store} Icon for ${songName} Link`}/>
        </Link>
    )
}