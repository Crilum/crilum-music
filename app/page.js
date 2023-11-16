import styles from './page.module.css'
import Section from '@/components/section'
import Store from '@/components/store'
import Image from 'next/image'
import SongStoreIconSet from '@/components/songStoreIconSet'

export default function Home() {
  const iconLinkURLs = {
    spotify: "https://open.spotify.com/album/071XlFetwYNjy9hAmWEeeF?si=O30kRR7LTLqyivdbm1CyMg",
    appleMusic: "https://music.apple.com/us/album/autumn-sea-single/1711649897",
    amazonMusic: "https://music.amazon.com/albums/B0CKY2D59X?marketplaceId=ATVPDKIKX0DER&ref=dm_sh_bmbGQwhgUbudEQFDEubjhzAnq"
  }
  
  return (
    <>
      <div>
        <Image className={styles.background} src="/rain.jpg" alt="" width={1920} height={1080}/>
      </div>
      <main className='main'>
        <Image className="pfp" alt="Profile Picture" src="/pfp.png" width={512} height={512}/>
        <h1>Hey, I'm <div className="header-accent">Crilum</div></h1>
        <Section>
          <div className={styles.sectionHeader}>
            You can find my music at:
          </div>
          <Store store="Spotify" url="https://open.spotify.com/artist/0KuXotyp9tnRKFWfM5B4Sr?si=1fa7e97370cb4185" />
          <Store store="Apple Music" url="https://music.apple.com/us/artist/crilum/1660339449" />
          <Store store="Amazon Music" url="https://music.amazon.com/artists/B0BQDHMHQD/crilum" />
          <Store store="Pandora" url="https://www.pandora.com/artist/crilum/AR5dJwX9wljh5n9" />
          <Store store="Tidal" url="https://listen.tidal.com/artist/36231722" />
          <Store store="Deezer" url="https://www.deezer.com/us/artist/193897447" />
          <Store store="YouTube" url="https://www.youtube.com/channel/UCQF0KhwgiiDFzbC9jpO46BA" />
        </Section>
        <hr />
        <div className={styles.sectionHeader} id="latest-song">
          Check out my latest song!
          <br/>
          <div className="header-accent">Autumn Sea</div>
        </div>
        <SongStoreIconSet songName="Autumn Sea" {...iconLinkURLs}/>
        <iframe id="ytEmbed" className={styles.ytEmbed} width="560" height="315" src="https://www.youtube-nocookie.com/embed/x0wyj2BOP1A" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <a id="github-link" href="https://github.com/Crilum/crilum-music">🄯 Crilum, 2023</a>
      </main>
    </>
  )
}
