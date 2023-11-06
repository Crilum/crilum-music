import styles from './page.module.css'
import Section from '@/components/section'
import Store from '@/components/store'
import Image from 'next/image'

export default function Home() {

  return (
    <>
      <div>
        <Image className={styles.background} src="/rain.jpg" alt="" />
      </div>
      <main className='main'>
        <Image className="pfp" alt="Profile Picture" src="/pfp.png" />
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
        </div>
        <iframe id="ytEmbed" className={styles.ytEmbed} width="560" height="315" src="https://www.youtube.com/embed/vKp9fiv8iRc?si=bzi0HxvHhxTPnFDV" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <p>🄯 Crilum, 2023</p>
      </main>
    </>
  )
}
