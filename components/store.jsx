import Link from "next/link"
import Image from "next/image"

export default function Store({ store, url }) {
    return (
        <Link href={url}>
        <div className="store">
            <Image src={`/icons/${store}.jpg`} width={75} height={75} className="store-icon"/>
            <p className="store-link">{store}</p>
        </div>
        </Link>
    )
}