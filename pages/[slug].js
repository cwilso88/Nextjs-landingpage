import Head from 'next/head'
import Layout from '../components/Layout'

export default function Home() {
    return(
        <Layout>
            <Head>
                <title>Chat Blog</title>
            </Head>
            <div id="main" className="alt">
        {/* One */}
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1>Generic</h1>
            </header>
            <span className="image main"><img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/elle-history-of-braids-1513114669.jpg" alt="" /></span>
            <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula.</p>
            <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fersapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit tristique lorem ipsum dolor.</p>
          </div>
        </section>
      </div>
        </Layout>
    )
}


export const getStaticPaths = async () => {
    const files = fs.readdirSync('posts');
    console.log("Files:", files);
    const path = files.map(filename => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }))
}